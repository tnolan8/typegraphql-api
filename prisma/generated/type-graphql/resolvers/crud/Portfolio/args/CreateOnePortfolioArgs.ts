import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateInput } from "../../../inputs/PortfolioCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioCreateInput, { nullable: false })
  data!: PortfolioCreateInput;
}
