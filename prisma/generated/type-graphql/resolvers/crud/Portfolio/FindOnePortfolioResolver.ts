import * as TypeGraphQL from "type-graphql";
import { FindOnePortfolioArgs } from "./args/FindOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class FindOnePortfolioResolver {
  @TypeGraphQL.Query(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async portfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.findOne(args);
  }
}
