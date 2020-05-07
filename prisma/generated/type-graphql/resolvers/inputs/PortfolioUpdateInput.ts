import * as TypeGraphQL from "type-graphql";
import { UserUpdateOneWithoutPortfoliosInput } from "../inputs/UserUpdateOneWithoutPortfoliosInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  name?: string | null;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutPortfoliosInput, {
    nullable: true,
    description: undefined
  })
  owner?: UserUpdateOneWithoutPortfoliosInput | null;
}
