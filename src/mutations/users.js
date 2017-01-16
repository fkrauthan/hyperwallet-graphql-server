import {
    GraphQLInputObjectType,
    GraphQLNonNull,
    GraphQLString,
} from "graphql";

import { UserType } from "../schema/users";

import _updateUser from "../updaters/users";

export const UserInputType = new GraphQLInputObjectType({
    name: "UserInput",
    fields: () => ({
        firstName: {
            type: GraphQLString,
        },
        lastName: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    }),
});

export const updateUser = {
    description: "Update a specific user",
    type: UserType,
    args: {
        id: {
            description: "The token for the user to update",
            type: new GraphQLNonNull(GraphQLString),
        },
        user: {
            type: UserInputType,
        },
    },
    resolve: (root, { id, user }) => _updateUser(id, user),
};
