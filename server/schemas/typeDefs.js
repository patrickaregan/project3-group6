const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        storyCount: Int
        stories: [Story]
    }

    type Story {
        _id: ID
        storyTitle: String
        username: String
        createdAt: String
        genre: String
        storyType: String
        lineCount: Int
        writers: [User]
        lines: [Line]
    }

    type Line {
        _id: ID
        lineContent: String
        username: String
        createdAt: String
    }

    type Writer {
        username: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        stories: [Story]
        story(storyTitle: String!): Story
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): User
        removeUser(_id: ID!): User
        addStory(storyTitle: String!, username: String!, genre: String!, storyType: String!, lineCount: Int!, writers: [String]): Story
        removeStory(_id: ID!): Story
        addLine(storyId: ID!, lineContent: String!, username: String!): Story
    }
`;

module.exports = typeDefs;