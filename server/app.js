const express = require("express");
const graphqlHTTP = require("express-graphql");
const Book = require("./models/book");
const Author = require("./models/author");
const mongoose = require("mongoose");
const schema = require("./schema/schema");

const app = express();

// Connect DB
mongoose.connect(
  "mongodb+srv://phone:99491232@cluster0-dqv8d.mongodb.net/graphQLPlaylist?retryWrites=true&w=majority",
  {
    useNewUrlParser: true
  }
);
mongoose.connection.once("open", () => {
  console.log("Connected Database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("app listening to port 4000");
});
