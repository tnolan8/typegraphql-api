import * as TypeGraphQL from "type-graphql";
import { PortfolioOrderByInput } from "../../inputs/PortfolioOrderByInput";
import { PortfolioWhereInput } from "../../inputs/PortfolioWhereInput";
import { PortfolioWhereUniqueInput } from "../../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregatePortfolioCountArgs {
  @TypeGraphQL.Field(_type => PortfolioWhereInput, { nullable: true })
  where?: PortfolioWhereInput | null;

  @TypeGraphQL.Field(_type => PortfolioOrderByInput, { nullable: true })
  orderBy?: PortfolioOrderByInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  skip?: number | null;

  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, { nullable: true })
  after?: PortfolioWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, { nullable: true })
  before?: PortfolioWhereUniqueInput | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  first?: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, { nullable: true })
  last?: number | null;
}
