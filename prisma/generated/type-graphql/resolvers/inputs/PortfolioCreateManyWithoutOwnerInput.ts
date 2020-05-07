import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateWithoutOwnerInput } from "../inputs/PortfolioCreateWithoutOwnerInput";
import { PortfolioWhereUniqueInput } from "../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioCreateManyWithoutOwnerInput {
  @TypeGraphQL.Field(_type => [PortfolioCreateWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  create?: PortfolioCreateWithoutOwnerInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  connect?: PortfolioWhereUniqueInput[] | null;
}
