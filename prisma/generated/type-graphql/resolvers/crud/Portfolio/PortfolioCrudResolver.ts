import * as TypeGraphQL from "type-graphql";
import { CreateOnePortfolioArgs } from "./args/CreateOnePortfolioArgs";
import { DeleteManyPortfolioArgs } from "./args/DeleteManyPortfolioArgs";
import { DeleteOnePortfolioArgs } from "./args/DeleteOnePortfolioArgs";
import { FindManyPortfolioArgs } from "./args/FindManyPortfolioArgs";
import { FindOnePortfolioArgs } from "./args/FindOnePortfolioArgs";
import { UpdateManyPortfolioArgs } from "./args/UpdateManyPortfolioArgs";
import { UpdateOnePortfolioArgs } from "./args/UpdateOnePortfolioArgs";
import { UpsertOnePortfolioArgs } from "./args/UpsertOnePortfolioArgs";
import { Portfolio } from "../../../models/Portfolio";
import { AggregatePortfolio } from "../../outputs/AggregatePortfolio";
import { BatchPayload } from "../../outputs/BatchPayload";

@TypeGraphQL.Resolver(_of => Portfolio)
export class PortfolioCrudResolver {
  @TypeGraphQL.Query(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async portfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.findOne(args);
  }

  @TypeGraphQL.Query(_returns => [Portfolio], {
    nullable: false,
    description: undefined
  })
  async portfolios(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyPortfolioArgs): Promise<Portfolio[]> {
    return ctx.prisma.portfolio.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: false,
    description: undefined
  })
  async createOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateOnePortfolioArgs): Promise<Portfolio> {
    return ctx.prisma.portfolio.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async deleteOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: true,
    description: undefined
  })
  async updateOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateOnePortfolioArgs): Promise<Portfolio | null> {
    return ctx.prisma.portfolio.update(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async deleteManyPortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyPortfolioArgs): Promise<BatchPayload> {
    return ctx.prisma.portfolio.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => BatchPayload, {
    nullable: false,
    description: undefined
  })
  async updateManyPortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyPortfolioArgs): Promise<BatchPayload> {
    return ctx.prisma.portfolio.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Portfolio, {
    nullable: false,
    description: undefined
  })
  async upsertOnePortfolio(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertOnePortfolioArgs): Promise<Portfolio> {
    return ctx.prisma.portfolio.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregatePortfolio, {
    nullable: false,
    description: undefined
  })
  async aggregatePortfolio(): Promise<AggregatePortfolio> {
    return new AggregatePortfolio();
  }
}
