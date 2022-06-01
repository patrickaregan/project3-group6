import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
          token
          user {
            _id
            username
          }
        }
    }
`;

export const REMOVE_USER = gql`
    mutation removeUser($_id: ID!) {
        removeUser(_id: $_id) {
            _id
            username
        }
    }
`;

export const ADD_STORY = gql`
    mutation addStory($storyTitle: String!, $genre: String!, $storyType: String!, $lineCount: Int!) {
        addStory(storyTitle: $storyTitle, genre: $genre, storyType: $storyType, lineCount: $lineCount) {
            _id
            storyTitle
            username
            createdAt
            genre
            storyType
            lineCount
        }
    }
`;

export const ADD_WRITER = gql`
    mutation addWriter($storyId: ID!, $username: String!) {
        addWriter(storyId: $storyId, username: $username) {
            _id
            storyTitle
            username
            writers {
                _id
                username
            }
        }
    }
`;

export const REMOVE_STORY = gql`
    mutation removeStory($_id: ID!) {
        removeStory(_id: $_id) {
            _id
            storyTitle
            username
            writers {
                _id
                username
            }
        }
    }
`;

export const ADD_LINE = gql`
    mutation addLine($storyId: ID!, $lineContent: String!) {
        addLine(storyId: $storyId, lineContent: $lineContent) {
            _id
            storyTitle
            username
            lineCount
            writers {
                _id
                username
            }
            lines {
                _id: ID
                lineContent
                username
                createdAt
            } 
        }
    }
`;

export const EDIT_LINE = gql`
    mutation editLine($storyId: ID!, $lineId: ID!, $lineContent: String!) {
        editLine(storyId: $storyId, lineId: $lineId, lineContent: $lineContent) {
            _id
            storyTitle
            username
            writers {
                _id
                username
            }
            lines {
                _id: ID
                lineContent
                username
                createdAt
            } 
        }
    }
`;