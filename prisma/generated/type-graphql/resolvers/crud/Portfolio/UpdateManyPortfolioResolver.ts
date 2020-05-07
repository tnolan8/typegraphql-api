import * as TypeGraphQL from "type-graphql";
import { UpdateManyPortfolioArgs } from "./args/UpdateManyPortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Portfolio)
export class UpdateManyPortfolioResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPortfolioArgs): Promise<BatchPayload> {
    return ctx.prisma.portfolio.updateMany(args);
  }
}
