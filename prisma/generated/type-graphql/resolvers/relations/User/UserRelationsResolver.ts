import * as TypeGraphQL from "type-graphql";
import { Portfolio } from "../../../models/Portfolio";
import { User } from "../../../models/User";
import { UserPortfoliosArgs } from "./args/UserPortfoliosArgs";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Portfolio], {
    nullable: true,
    description: undefined,
  })
  async portfolios(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPortfoliosArgs): Promise<Portfolio[] | null> {
    return ctx.prisma.user.findOne({
      where: {
        id: user.id,
      },
    }).portfolios(args);
  }
}
