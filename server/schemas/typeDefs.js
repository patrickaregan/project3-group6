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
        writerCount: Int
        writers: [User]
    }

    type Line {
        _id: ID
        lineContent: String
        username: String
        createdAt: String
    }
`;

module.exports = typeDefs;