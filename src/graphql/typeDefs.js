import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        _id: ID
        name: String
        email: String
        password: String
    }

    type Product {
        _id: ID
        name: String,
        description: String,
        thumbnail: String,
    }

    type Query {
        hello: String
        getAllUsers: [User]
        getAllProducts: [Product]
    }

`

export default typeDefs