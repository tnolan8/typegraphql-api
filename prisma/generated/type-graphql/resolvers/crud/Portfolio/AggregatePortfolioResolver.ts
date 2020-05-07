import * as TypeGraphQL from "type-graphql";
import { Portfolio } from "../../../models/Portfolio";
import { AggregatePortfolio } from "../../outputs/AggregatePortfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class AggregatePortfolioResolver {
  @TypeGraphQL.Query(_returns => AggregatePortfolio, {
    nullable: false,
    description: undefined
  })
  async aggregatePortfolio(): Promise<AggregatePortfolio> {
    return new AggregatePortfolio();
  }
}
