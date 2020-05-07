import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutPortfoliosInput } from "../inputs/UserCreateWithoutPortfoliosInput";
import { UserUpdateWithoutPortfoliosDataInput } from "../inputs/UserUpdateWithoutPortfoliosDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpsertWithoutPortfoliosInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPortfoliosDataInput, {
    nullable: false,
    description: undefined
  })
  update!: UserUpdateWithoutPortfoliosDataInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPortfoliosInput, {
    nullable: false,
    description: undefined
  })
  create!: UserCreateWithoutPortfoliosInput;
}
