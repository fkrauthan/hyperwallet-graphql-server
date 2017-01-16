import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";

import { BankAccountType } from "../schema/bankAccounts";

import _updateBankAccount from "../updaters/bankAccounts";

export const BankAccountInputType = new GraphQLInputObjectType({
    name: "BankAccountInput",
    fields: () => ({
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
    }),
});

export const updateBankAccount = {
    description: "Update a specific users bank account",
    type: BankAccountType,
    args: {
        id: {
            description: "The token for the bank account to update",
            type: new GraphQLNonNull(GraphQLString),
        },
        userId: {
            description: "The token for the user the bank account belongs to",
            type: new GraphQLNonNull(GraphQLString),
        },
        bankAccount: {
            type: BankAccountInputType,
        },
    },
    resolve: (root, { id, userId, bankAccount }) => _updateBankAccount(id, userId, bankAccount),
};
