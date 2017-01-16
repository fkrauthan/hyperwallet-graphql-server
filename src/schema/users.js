import {
    GraphQLObjectType,
    GraphQLEnumType,
    GraphQLList,
    GraphQLString,
} from "graphql";

import resolveSingleItem from "../utils/resolveSingleItem";

import AddressType from "../types/address";

import { allBankAccounts, bankAccount } from "./bankAccounts";
import { loadUsers, loadUser } from "../resolver/users";

export const UserStatusType = new GraphQLEnumType({
    name: "UserStatus",
    values: {
        PRE_ACTIVATED: { value: "PRE_ACTIVATED" },
        ACTIVATED: { value: "ACTIVATED" },
        LOCKED: { value: "LOCKED" },
        FROZEN: { value: "FROZEN" },
        DE_ACTIVATED: { value: "DE_ACTIVATED" },
    },
});

export const UserType = new GraphQLObjectType({
    name: "User",
    description: "A user within the Hyperwallet platform",

    fields: {
        id: {
            type: GraphQLString,
            resolve: source => source.token,
        },
        status: { type: UserStatusType },
        clientUserId: { type: GraphQLString },
        profileType: { type: GraphQLString },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },

        address: {
            type: AddressType,
            resolve: source => source,
        },

        allBankAccounts,
        bankAccount,
    },
});
const NO_LOAD_REQUIRED = ["id", "allBankAccounts", "bankAccount"];


export const allUsers = {
    description: "Load all users",
    type: new GraphQLList(UserType),
    resolve: () => loadUsers(),
};

export const user = {
    description: "Load a specific user",
    type: UserType,
    args: {
        id: {
            description: "The user token",
            type: GraphQLString,
        },
    },
    resolve: (root, { id }, context, info) => resolveSingleItem(id, () => loadUser(id), info, NO_LOAD_REQUIRED),
};
