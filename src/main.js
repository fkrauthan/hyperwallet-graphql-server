import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";

const app = express();
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));

const server = app.listen(process.env.PORT || 5000, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}!`);
});
