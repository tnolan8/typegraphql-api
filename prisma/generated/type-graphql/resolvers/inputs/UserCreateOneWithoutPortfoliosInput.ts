import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutPortfoliosInput } from "../inputs/UserCreateWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateOneWithoutPortfoliosInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPortfoliosInput, {
    nullable: true,
    description: undefined
  })
  create?: UserCreateWithoutPortfoliosInput | null;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true,
    description: undefined
  })
  connect?: UserWhereUniqueInput | null;
}
