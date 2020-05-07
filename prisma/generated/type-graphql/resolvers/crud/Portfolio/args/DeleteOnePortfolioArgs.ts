import * as TypeGraphQL from "type-graphql";
import { PortfolioWhereUniqueInput } from "../../../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOnePortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, { nullable: false })
  where!: PortfolioWhereUniqueInput;
}
