import "reflect-metadata";
import path from "path";
import { PrismaClient } from "@prisma/client";
import { buildSchema } from "type-graphql";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
// import { AuthResolver } from "./resolvers";
import express from "express";
import { CreateOneUserResolver, FindOneUserResolver } from "../prisma/generated/type-graphql";
import { Context } from "./common/types/context";

(async (): Promise<void> => {
    const schema = await buildSchema({
        resolvers: [ CreateOneUserResolver, FindOneUserResolver ],
        emitSchemaFile: path.resolve(__dirname, "./generated-schema.graphql"),
        validate: false,
        dateScalarMode: "timestamp",
    });

    const prisma = new PrismaClient();
    
    const server = new ApolloServer({
        schema,
        playground: true,
        context: (req): Context => ({ req, prisma }),
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
