import * as TypeGraphQL from "type-graphql";
import { Portfolio } from "../../../models/Portfolio";
import { User } from "../../../models/User";

@TypeGraphQL.Resolver(_of => Portfolio)
export class PortfolioRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true,
    description: undefined,
  })
  async owner(@TypeGraphQL.Root() portfolio: Portfolio, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return ctx.prisma.portfolio.findOne({
      where: {
        id: portfolio.id,
      },
    }).owner({});
  }
}
