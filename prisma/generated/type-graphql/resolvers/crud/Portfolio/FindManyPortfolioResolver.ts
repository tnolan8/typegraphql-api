import * as TypeGraphQL from "type-graphql";
import { FindManyPortfolioArgs } from "./args/FindManyPortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class FindManyPortfolioResolver {
  @TypeGraphQL.Query(_returns => [Portfolio], {
    nullable: false,
    description: undefined
  })
  async portfolios(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPortfolioArgs): Promise<Portfolio[]> {
    return ctx.prisma.portfolio.findMany(args);
  }
}
