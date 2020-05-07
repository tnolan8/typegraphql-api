import { Mutation, Resolver, Arg, Ctx } from "type-graphql";
import { RegisterInput } from "./types/register.input";
import { hash, compare } from "bcryptjs";
import { UserResponse } from "../../common/types/user.response";
import { LoginInput } from "./types/login.input";
import { sign } from "jsonwebtoken";
import { AuthPayload } from "./types/auth.payload";
import { Context } from "../../common/types/context";

@Resolver()
export class AuthResolver {

    @Mutation(() => UserResponse)
    async registerUser(@Arg("data") data: RegisterInput, @Ctx() { prisma }: Context): Promise<UserResponse> {
        const hashedPassword = await hash(data.password, 10);
        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                firstname: data.firstname,
                lastname: data.lastname,
            },
        });
        return user;
    }

    @Mutation(() => AuthPayload)
    async loginUser(@Arg("data") data: LoginInput, @Ctx() { prisma }: Context): Promise<AuthPayload> {
        const user = await prisma.user.findOne({
            where: {
                email: data.email,
            },
        });

        if (!user) throw new Error(`No user found for email: ${data.email}`);

        const passwordValid = await compare(data.password, user.password);
        if (!passwordValid) {
            throw new Error("Invalid password");
        }

        return {
            token: sign({ userId: user.id }, "secretkey"),
            user,
        };
    }
}
