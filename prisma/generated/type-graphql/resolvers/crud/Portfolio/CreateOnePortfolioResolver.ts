import * as TypeGraphQL from "type-graphql";
import { CreateOnePortfolioArgs } from "./args/CreateOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class CreateOnePortfolioResolver {
  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: false,
    description: undefined
  })
  async createOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOnePortfolioArgs): Promise<Portfolio> {
    return ctx.prisma.portfolio.create(args);
  }
}
