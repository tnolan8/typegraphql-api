import * as TypeGraphQL from "type-graphql";
import { PortfolioWhereInput } from "../inputs/PortfolioWhereInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioFilter {
  @TypeGraphQL.Field(_type => PortfolioWhereInput, {
    nullable: true,
    description: undefined
  })
  every?: PortfolioWhereInput | null;

  @TypeGraphQL.Field(_type => PortfolioWhereInput, {
    nullable: true,
    description: undefined
  })
  some?: PortfolioWhereInput | null;

  @TypeGraphQL.Field(_type => PortfolioWhereInput, {
    nullable: true,
    description: undefined
  })
  none?: PortfolioWhereInput | null;
}
