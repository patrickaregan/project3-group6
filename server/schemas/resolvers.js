const { AuthenticationError } = require('apollo-server-express');
// const { User, Story } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('stories')
        },
        user: async (parent, args) => {
            let user = {};

            switch(args) {
                case args._id:
                    user = await User.findOne({ _id })
                    .select('-__v')
                    .populate('stories')
                    break;
                case args.username:
                    user = await User.findOne({ storyTitle })
                    .select('-__v')
                    .populate('stories')
                    break;
                default:
                    break;
            }

            return user;
        },
        stories: async () => {
            return Story.find()
            .select('-__v')
            .populate('writers')
        },
        story: async (parent, args) => {
            let story = {};

            switch(args) {
                case args._id:
                    story = await Story.findOne({ _id })
                    .select('-__v')
                    .populate('writers')
                    break;
                case args.storyTitle:
                    story = await Story.findOne({ storyTitle })
                    .select('-__v')
                    .populate('writers')
                    break;
                default:
                    break;
            }

            return story;
        }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            return newUser;
        }
    }
};

module.exports = resolvers;