import * as TypeGraphQL from "type-graphql";
import { PortfolioUpdateWithoutOwnerDataInput } from "../inputs/PortfolioUpdateWithoutOwnerDataInput";
import { PortfolioWhereUniqueInput } from "../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpdateWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PortfolioWhereUniqueInput;

  @TypeGraphQL.Field(_type => PortfolioUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PortfolioUpdateWithoutOwnerDataInput;
}
