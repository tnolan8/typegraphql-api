/*
    Author: tom
    Date: 08/05/2020
*/

import { InputType, Field } from "type-graphql";

@InputType()
export class LoginInput {
  @Field(() => String)
  email!: string;

  @Field(() => String)
  password!: string;
}