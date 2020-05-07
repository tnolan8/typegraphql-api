import * as TypeGraphQL from "type-graphql";
import { PortfolioCreateManyWithoutOwnerInput } from "../inputs/PortfolioCreateManyWithoutOwnerInput";

@TypeGraphQL.InputType({
  isAbstract: true,
  description: undefined,
})
export class UserCreateInput {
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
    nullable: false,
    description: undefined
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  password!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  firstname!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false,
    description: undefined
  })
  lastname!: string;

  @TypeGraphQL.Field(_type => PortfolioCreateManyWithoutOwnerInput, {
    nullable: true,
    description: undefined
  })
  portfolios?: PortfolioCreateManyWithoutOwnerInput | null;
}
