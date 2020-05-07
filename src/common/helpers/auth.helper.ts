import { verify } from "jsonwebtoken";
import { Context } from "../types/context";

export const APP_SECRET = "";

interface Token {
  userId: string;
}

export function getUserId({ req }: Context): string | void {
  const Authorization = req.get("Authorization");
  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");
    const verifiedToken = verify(token, APP_SECRET) as Token;
    return verifiedToken && verifiedToken.userId;
  }
}
