import * as TypeGraphQL from "type-graphql";
import { UserCreateWithoutPortfoliosInput } from "../inputs/UserCreateWithoutPortfoliosInput";
import { UserUpdateWithoutPortfoliosDataInput } from "../inputs/UserUpdateWithoutPortfoliosDataInput";
import { UserUpsertWithoutPortfoliosInput } from "../inputs/UserUpsertWithoutPortfoliosInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateOneWithoutPortfoliosInput {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  disconnect?: boolean | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true,
    description: undefined
  })
  delete?: boolean | null;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPortfoliosDataInput, {
    nullable: true,
    description: undefined
  })
  update?: UserUpdateWithoutPortfoliosDataInput | null;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPortfoliosInput, {
    nullable: true,
    description: undefined
  })
  upsert?: UserUpsertWithoutPortfoliosInput | null;
}
