import * as TypeGraphQL from "type-graphql";
import { UpdateOnePortfolioArgs } from "./args/UpdateOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class UpdateOnePortfolioResolver {
  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async updateOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.update(args);
  }
}
