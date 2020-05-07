import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateWithoutOwnerInput } from "../inputs/PortfolioCreateWithoutOwnerInput";
import { PortfolioScalarWhereInput } from "../inputs/PortfolioScalarWhereInput";
import { PortfolioUpdateManyWithWhereNestedInput } from "../inputs/PortfolioUpdateManyWithWhereNestedInput";
import { PortfolioUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/PortfolioUpdateWithWhereUniqueWithoutOwnerInput";
import { PortfolioUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/PortfolioUpsertWithWhereUniqueWithoutOwnerInput";
import { PortfolioWhereUniqueInput } from "../inputs/PortfolioWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioUpdateManyWithoutOwnerInput {
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

  @TypeGraphQL.Field(_type => [PortfolioWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  set?: PortfolioWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  disconnect?: PortfolioWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioWhereUniqueInput], {
    nullable: true,
    description: undefined
  })
  delete?: PortfolioWhereUniqueInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  update?: PortfolioUpdateWithWhereUniqueWithoutOwnerInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioUpdateManyWithWhereNestedInput], {
    nullable: true,
    description: undefined
  })
  updateMany?: PortfolioUpdateManyWithWhereNestedInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  deleteMany?: PortfolioScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true,
    description: undefined
  })
  upsert?: PortfolioUpsertWithWhereUniqueWithoutOwnerInput[] | null;
}
