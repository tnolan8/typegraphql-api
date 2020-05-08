import { rule, shield } from "graphql-shield";
import { serviceContainer } from "../ioc";
import { AuthService } from "../services/auth-service";

const authService = serviceContainer.get(AuthService);

const rules = {
  isAuthenticatedUser: rule()( async (parent, args, context) => {
    const userId = await authService.getUserId(context).catch(err => err);
    return Boolean(userId);
  }),
};

export const permissions = shield({
  Query: {
    me: rules.isAuthenticatedUser
  },
});
