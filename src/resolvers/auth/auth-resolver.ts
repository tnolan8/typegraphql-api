/*
    Author: tom
    Date: 08/05/2020
*/

import { Mutation, Resolver, Arg } from "type-graphql";
import { RegisterInput } from "./types/register-input";
import { UserResponse } from "../../common/types/user-response";
import { LoginInput } from "./types/login-input";
import { AuthPayload } from "./types/auth-payload";
import { inject, injectable } from "inversify";
import { AuthService } from "../../services/auth-service";

@injectable()
@Resolver()
export class AuthResolver {

    constructor(@inject(AuthService) private authService: AuthService) {}

    @Mutation(() => UserResponse)
    async registerUser(@Arg("data") data: RegisterInput): Promise<UserResponse> {
        const { email, password, firstname, lastname } = data;
        const user = await this.authService.register(email, password, firstname, lastname);
        return user;
    }

    @Mutation(() => AuthPayload)
    async loginUser(@Arg("data") data: LoginInput): Promise<AuthPayload> {
        const { email, password } = data;
        return await this.authService.login(email, password);
    }
}
