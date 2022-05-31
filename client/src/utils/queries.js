import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            storyCount
            stories {
                _id
                storyTitle
                username
                createdAt
                genre
                storyType
                lineCount
                writers {
                    _id
                    username
                }
            }
        }
    }
`;

export const QUERY_STORIES = gql`
    query stories {
        stories {
            _id
            storyTitle
            username
            createdAt
            genre
            storyType
            lineCount
            lines {
                _id
                lineContent
                username
                createdAt
            }
        }
    }
`;

export const QUERY_STORY = gql`
    query stories($storyTitle: String!) {
        stories(storyTitle: $storyTitle) {
            _id
            storyTitle
            username
            createdAt
            genre
            storyType
            lineCount
            writers {
                _id
                username
            }
            lines {
                _id
                lineContent
                username
                createdAt
            }
        }
    }
`;

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            storyCount
            stories {
                _id
                storyTitle
                username
                createdAt
                genre
                storyType
                lineCount
                writers {
                    _id
                    username
                }
                lines {
                    _id
                    username
                    createdAt
                }
            }
        }
    }
`;

export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            email
            storyCount
            stories {
                _id
                storyTitle
                username
                createdAt
                writers {
                    _id
                    username
                }
            }
        }
    }
`;