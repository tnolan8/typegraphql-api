import * as TypeGraphQL from "type-graphql";
import { PortfolioUpdateManyWithoutOwnerInput } from "../inputs/PortfolioUpdateManyWithoutOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserUpdateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  id?: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  createdAt?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true,
    description: undefined
  })
  updatedAt?: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  password?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  firstname?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true,
    description: undefined
  })
  lastname?: string | null;

  @TypeGraphQL.Field(_type => PortfolioUpdateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  portfolios?: PortfolioUpdateManyWithoutOwnerInput | null;
}
