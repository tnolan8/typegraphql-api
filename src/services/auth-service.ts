/*
    Author: tom
    Date: 08/05/2020
*/

import { injectable, inject } from "inversify";
import { PrismaClient } from "@prisma/client";
import { hash, compare } from "bcryptjs";
import { UserResponse } from "../common/types/user-response";
import { AuthPayload } from "../resolvers/auth/types/auth-payload";
import { sign, verify } from "jsonwebtoken";
import { Context } from "../common/types/context";

interface Token {
    userId: string;
}

@injectable()
export class AuthService {
    constructor(@inject(PrismaClient) private prisma: PrismaClient) {}

    /**
     *
     * @param ctx - Current Request Context.
     *
     * @returns Promise containing Users ID.
     */
    async getUserId(ctx: Context): Promise<string> {
        return new Promise((resolve, reject) => {
            const Authorization = ctx.req.get("Authorization");
            if (Authorization) {
                const token = Authorization.replace("Bearer ", "");
                const verifiedToken = verify(token, "secretkey") as Token;
                resolve(verifiedToken && verifiedToken.userId);
            }
            reject(new Error("Invalid Auth"));
        });
    }

    /**
     *
     * @param email - Users email.
     * @param password - Users password.
     * @param firstname - Users first name.
     * @param lastname - Users last name.
     *
     * @retunrs A Promise containing a user response object.
     */
    async register(email: string, password: string, firstname: string, lastname: string): Promise<UserResponse> {
        return new Promise(async (resolve, reject) => {
            const hashedPassword = await hash(password, 10);
            const user = await this.prisma.user.create({
                data: {
                    email: email,
                    password: hashedPassword,
                    firstname: firstname,
                    lastname: lastname,
                },
            }).catch(err => reject(err));
            if (user) {
                resolve(user);
            }
            reject(new Error("Invalid"));
        });
    }

    /**
     *
     * @param email - Users email.
     * @param password - Users password.
     *
     * @returns A Promise containing the logged in user and token.
     */
    async login(email: string, password: string): Promise<AuthPayload> {
        return new Promise(async (resolve, reject) => {
            const user = await this.prisma.user.findOne({
                where: {
                    email: email,
                },
            });

            if (user) {
                const passwordValid = await compare(password, user.password);
                if (!passwordValid) {
                    throw new Error("Invalid password");
                }
                resolve({
                    token: sign({ userId: user.id }, "secretkey"),
                    user,
                });
            }

            reject(new Error(`No user found for email: ${email}`));
        });
    }
}
