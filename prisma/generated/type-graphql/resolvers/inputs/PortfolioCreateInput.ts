import * as TypeGraphQL from "type-graphql";
import { UserCreateOneWithoutPortfoliosInput } from "../inputs/UserCreateOneWithoutPortfoliosInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioCreateInput {
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
    nullable: false,
    description: undefined
  })
  name!: string;

  @TypeGraphQL.Field(_type => UserCreateOneWithoutPortfoliosInput, {
    nullable: true,
    description: undefined
  })
  owner?: UserCreateOneWithoutPortfoliosInput | null;
}
