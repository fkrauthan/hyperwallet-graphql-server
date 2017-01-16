import {
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLList,
    GraphQLString,
} from "graphql";

import resolveSingleItem from "../utils/resolveSingleItem";

import { loadBankAccounts, loadBankAccount } from "../resolver/bankAccounts";

export const BankAccountTypeType = new GraphQLEnumType({
    name: "BankAccountType",
    values: {
        BANK_ACCOUNT: { value: "BANK_ACCOUNT" },
        WIRE_ACCOUNT: { value: "WIRE_ACCOUNT" },
    },
});

export const BankAccountStatusType = new GraphQLEnumType({
    name: "BankAccountStatus",
    values: {
        ACTIVATED: { value: "ACTIVATED" },
        INVALID: { value: "INVALID" },
        DE_ACTIVATED: { value: "DE_ACTIVATED" },
    },
});

export const BankAccountType = new GraphQLObjectType({
    name: "BankAccount",
    description: "A bank account for a user within the Hyperwallet platform",

    fields: {
        id: {
            type: GraphQLString,
            resolve: source => source.token,
        },
        type: { type: BankAccountTypeType },
        status: { type: BankAccountStatusType },
        transferMethodCountry: { type: GraphQLString },
        transferMethodCurrency: { type: GraphQLString },
        bankName: { type: GraphQLString },
        bankId: { type: GraphQLString },
        branchName: { type: GraphQLString },
        branchId: { type: GraphQLString },
        bankAccountId: { type: GraphQLString },
    },
});
const NO_LOAD_REQUIRED = ["id"];


export const allBankAccounts = {
    description: "Load all bank accounts for this user",
    type: new GraphQLList(BankAccountType),
    resolve: root => loadBankAccounts(root.token),
};

export const bankAccount = {
    description: "Load a specific bank account for this user",
    type: BankAccountType,
    args: {
        id: {
            description: "The bank account token",
            type: GraphQLString,
        },
    },
    resolve: (root, { id }, context, info) => resolveSingleItem(id, () => loadBankAccount(root.token, id), info, NO_LOAD_REQUIRED),
};
