import * as TypeGraphQL from "type-graphql";
import { PortfolioUpdateManyMutationInput } from "../../../inputs/PortfolioUpdateManyMutationInput";
import { PortfolioWhereInput } from "../../../inputs/PortfolioWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPortfolioArgs {
  @TypeGraphQL.Field(_type => PortfolioUpdateManyMutationInput, { nullable: false })
  data!: PortfolioUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PortfolioWhereInput, { nullable: true })
  where?: PortfolioWhereInput | null;
}
