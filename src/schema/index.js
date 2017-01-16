import { GraphQLSchema, GraphQLObjectType } from "graphql";

import { allUsers, user } from "./users";
import { updateUser } from "../mutations/users";
import { updateBankAccount } from "../mutations/bankAccounts";

const QueryType = new GraphQLObjectType({
    name: "Hyperwallet",
    description: "Hyperwallet GraphQL API",
    fields: () => ({
        allUsers,
        user,
    }),
});

const MutationType = new GraphQLObjectType({
    name: "HyperwalletMutations",
    description: "Hyperwallet GraphQL Mutation API",
    fields: () => ({
        updateUser,
        updateBankAccount,
    }),
});

export default new GraphQLSchema({
    query: QueryType,
    mutation: MutationType,
});
