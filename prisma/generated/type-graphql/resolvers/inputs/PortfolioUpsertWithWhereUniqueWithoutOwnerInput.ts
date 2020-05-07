import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateWithoutOwnerInput } from "../inputs/PortfolioCreateWithoutOwnerInput";
import { PortfolioUpdateWithoutOwnerDataInput } from "../inputs/PortfolioUpdateWithoutOwnerDataInput";
import { PortfolioWhereUniqueInput } from "../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpsertWithWhereUniqueWithoutOwnerInput {
  @TypeGraphQL.Field(_type => PortfolioWhereUniqueInput, {
    nullable: false,
    description: undefined
  })
  where!: PortfolioWhereUniqueInput;

  @TypeGraphQL.Field(_type => PortfolioUpdateWithoutOwnerDataInput, {
    nullable: false,
    description: undefined
  })
  update!: PortfolioUpdateWithoutOwnerDataInput;

  @TypeGraphQL.Field(_type => PortfolioCreateWithoutOwnerInput, {
    nullable: false,
    description: undefined
  })
  create!: PortfolioCreateWithoutOwnerInput;
}
