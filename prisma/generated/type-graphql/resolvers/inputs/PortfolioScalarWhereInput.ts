import * as TypeGraphQL from "type-graphql";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { NullableStringFilter } from "../inputs/NullableStringFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class PortfolioScalarWhereInput {
  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  id?: StringFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  createdAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true,
    description: undefined
  })
  updatedAt?: DateTimeFilter | null;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true,
    description: undefined
  })
  name?: StringFilter | null;

  @TypeGraphQL.Field(_type => NullableStringFilter, {
    nullable: true,
    description: undefined
  })
  userId?: NullableStringFilter | null;

  @TypeGraphQL.Field(_type => [PortfolioScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  AND?: PortfolioScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  OR?: PortfolioScalarWhereInput[] | null;

  @TypeGraphQL.Field(_type => [PortfolioScalarWhereInput], {
    nullable: true,
    description: undefined
  })
  NOT?: PortfolioScalarWhereInput[] | null;
}
