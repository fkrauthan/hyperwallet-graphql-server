import {
    GraphQLObjectType,
    GraphQLString,
} from "graphql";

export default new GraphQLObjectType({
    name: "Address",
    description: "A address within the system",

    fields: {
        addressLine1: { type: GraphQLString },
        addressLine2: { type: GraphQLString },
        city: { type: GraphQLString },
        stateProvince: { type: GraphQLString },
        country: { type: GraphQLString },
        postalCode: { type: GraphQLString },
    },
});
