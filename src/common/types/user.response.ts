import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserResponse {
    @Field(() => String)
    email!: string;

    @Field(() => String)
    firstname!: string;

    @Field(() => String)
    lastname!: string;

    @Field(() => Date)
    createdAt!: Date;
}
