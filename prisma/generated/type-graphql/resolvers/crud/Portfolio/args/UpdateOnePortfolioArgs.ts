import * as TypeGraphQL from "type-graphql";
import { PortfolioUpdateInput } from "../../../inputs/PortfolioUpdateInput";
import { PortfolioWhereUniqueInput } from "../../../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioUpdateInput, { nullable: false })
  data!: PortfolioUpdateInput;

  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, { nullable: false })
  where!: PortfolioWhereUniqueInput;
}
