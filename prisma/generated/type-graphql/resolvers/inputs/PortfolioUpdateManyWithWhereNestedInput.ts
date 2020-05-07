import * as TypeGraphQL from "type-graphql";
import { PortfolioScalarWhereInput } from "../inputs/PortfolioScalarWhereInput";
import { PortfolioUpdateManyDataInput } from "../inputs/PortfolioUpdateManyDataInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpdateManyWithWhereNestedInput {
  @TypeGraphQL.Field(_type => PortfolioScalarWhereInput, {
    nullable: false,
    description: undefined
  })
  where!: PortfolioScalarWhereInput;

  @TypeGraphQL.Field(_type => PortfolioUpdateManyDataInput, {
    nullable: false,
    description: undefined
  })
  data!: PortfolioUpdateManyDataInput;
}
