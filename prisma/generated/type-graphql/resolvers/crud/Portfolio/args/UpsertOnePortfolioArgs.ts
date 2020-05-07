import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateInput } from "../../../inputs/PortfolioCreateInput";
import { PortfolioUpdateInput } from "../../../inputs/PortfolioUpdateInput";
import { PortfolioWhereUniqueInput } from "../../../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, { nullable: false })
  where!: PortfolioWhereUniqueInput;

  @TypeGraphQL.Field(_type => PortfolioCreateInput, { nullable: false })
  create!: PortfolioCreateInput;

  @TypeGraphQL.Field(_type => PortfolioUpdateInput, { nullable: false })
  update!: PortfolioUpdateInput;
}
