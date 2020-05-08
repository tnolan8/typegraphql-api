/*
    Author: tom
    Date: 08/05/2020
*/

import "reflect-metadata";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import express from "express";
import { Context } from "./common/types/context";
import { serviceContainer } from "./ioc";
import { AuthResolver, UserResolver } from "./resolvers";
import { applyMiddleware } from "graphql-middleware";
import { permissions } from "./permissions";
import winston from "winston";

(async (): Promise<void> => {
    const logger = winston.createLogger({
        transports: [
            new winston.transports.Console()
        ]
    });
    
    const schema = await buildSchema({
        resolvers: [ AuthResolver, UserResolver ],
        container: serviceContainer,
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        validate: false,
        dateScalarMode: "timestamp",
    });
    
    const server = new ApolloServer({
        schema: applyMiddleware(schema, permissions),
        playground: true,
        context: ({ req, res }): Context => ({ 
            req,
            res,
            prisma: serviceContainer.get(PrismaClient),
            container: serviceContainer
         }),
    });

    const app = express();

    app.use(
        cors({
            origin: "http://localhost:3000",
            credentials: true,
        })
    );

    server.applyMiddleware({ app, cors: false });

    app.listen(3000, () => {
        console.log("🚀 Server ready at: http://localhost:3000");
    });
})().catch(err => console.log(err));
