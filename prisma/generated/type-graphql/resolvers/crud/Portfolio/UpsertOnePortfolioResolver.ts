import * as TypeGraphQL from "type-graphql";
import { UpsertOnePortfolioArgs } from "./args/UpsertOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class UpsertOnePortfolioResolver {
  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: false,
    description: undefined
  })
  async upsertOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOnePortfolioArgs): Promise<Portfolio> {
    return ctx.prisma.portfolio.upsert(args);
  }
}
