/*
    Author: tom
    Date: 08/05/2020
*/

import { Resolver, Query, Ctx } from "type-graphql";
import { UserResponse } from "../../common/types/user-response";
import { Context } from "../../common/types/context";
import { inject, injectable } from "inversify";
import { AuthService } from "../../services/auth-service";

@injectable()
@Resolver()
export class UserResolver {

  constructor(@inject(AuthService) private authService: AuthService){}

  /**
   * 
   * @param ctx - Current request context.
   * 
   * @returns Promise containing the current logged in User.
   */
  @Query(() => UserResponse)
  async me(@Ctx() ctx: Context): Promise<UserResponse|null> {
    return new Promise(async (resolve, reject) => {
      const userId = await this.authService.getUserId(ctx).catch(err => reject(err));
      if(userId){
        const user = ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        });
        resolve(user);
      }
      reject(new Error("Invalid Me"));
    });
  }
}