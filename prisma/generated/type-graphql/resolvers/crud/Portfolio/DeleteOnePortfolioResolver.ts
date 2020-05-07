import * as TypeGraphQL from "type-graphql";
import { DeleteOnePortfolioArgs } from "./args/DeleteOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";

@TypeGraphQL.Resolver(_of => Portfolio)
export class DeleteOnePortfolioResolver {
  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async deleteOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.delete(args);
  }
}
