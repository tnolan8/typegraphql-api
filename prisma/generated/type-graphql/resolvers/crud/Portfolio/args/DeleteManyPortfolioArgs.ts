import * as TypeGraphQL from "type-graphql";
import { PortfolioWhereInput } from "../../../inputs/PortfolioWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioWhereInput, { nullable: true })
  where?: PortfolioWhereInput | null;
}
