import {gql} from 'apollo-server'

const typeDefs = gql`
    type User {
        usuNumIden: String!
        usuPriNombre: String!
        usuSegNombre: String
        usuPriApellido: String!
        usuSegApellido: String
        usuEmail: String!
        usuPass: String!
        usuCel: String
        usuFechCreacion: String!
        id: ID!
    }
    type Query {
        # User
        allUser: [User]
        
    }
`;

module.exports = typeDefs;
