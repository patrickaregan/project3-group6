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
        createdAt: String
        genre: String
        storyType: String
        lineCount: Int
        lines: [Line]
        writerCount: Int
        writers: [User]
    }

    type Line {
        _id: ID
        lineContent: String
        username: String
        createdAt: String
    }

    type Query {
        users: [User]
        user(_id: ID, username: String): User
        stories: [Story]
        story(_id: ID, storyTitle: String): Story
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        addStory(storyTitle: String!, genre: String!, storyType: String!, lineCount: String, writerCount: String, writers: [String!]): Story
        addLine(lineContent: String!, username: String!): Story
    }
`;

module.exports = typeDefs;