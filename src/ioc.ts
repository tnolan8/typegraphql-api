/*
    Author: tom
    Date: 08/05/2020
*/

import { Container, decorate, injectable } from "inversify";
import { PrismaClient } from "@prisma/client";

decorate(injectable, PrismaClient);

const prisma = new PrismaClient();

const serviceContainer = new Container({ defaultScope: "Singleton", autoBindInjectable: true });

serviceContainer.bind(PrismaClient).toConstantValue(prisma);

export { serviceContainer };