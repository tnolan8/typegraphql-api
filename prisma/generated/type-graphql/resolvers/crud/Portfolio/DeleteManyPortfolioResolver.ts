import * as TypeGraphQL from "type-graphql";
import { DeleteManyPortfolioArgs } from "./args/DeleteManyPortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Portfolio)
export class DeleteManyPortfolioResolver {
  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPortfolioArgs): Promise<BatchPayload> {
    return ctx.prisma.portfolio.deleteMany(args);
  }
}
