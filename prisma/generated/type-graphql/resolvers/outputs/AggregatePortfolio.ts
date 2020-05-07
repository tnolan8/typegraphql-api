import * as TypeGraphQL from "type-graphql";
import { AggregatePortfolioCountArgs } from "./args/AggregatePortfolioCountArgs";

@TypeGraphQL.ObjectType({
  isAbstract: true,
  description: undefined,
})
export class AggregatePortfolio {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false,
    description: undefined
  })
  count(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: AggregatePortfolioCountArgs) {
    return ctx.prisma.portfolio.count(args);
  }
}
