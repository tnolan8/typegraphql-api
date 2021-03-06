/*
    Author: tom
    Date: 08/05/2020
*/

import { ObjectType, Field } from "type-graphql";
import { UserResponse } from "../../../common/types/user-response";

@ObjectType()
export class AuthPayload {
    @Field(() => String)
    token!: string;

    @Field(() => UserResponse)
    user!: UserResponse;
}