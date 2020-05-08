/*
    Author: tom
    Date: 08/05/2020
*/

import { InputType, Field } from "type-graphql";

@InputType()
export class RegisterInput {
  @Field(() => String)
  email!: string

  @Field(() => String)
  password!: string;

  @Field(() => String)
  firstname!: string;

  @Field(() => String)
  lastname!: string;
}