import { PrismaClient } from "@prisma/client";
import { Container } from "inversify";
import { Request, Response } from "express";

export interface Context {
    req: Request;
    res: Response;
    prisma: PrismaClient;
    container: Container;
}
