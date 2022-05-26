const { AuthenticationError } = require('apollo-server-express');
const {signToken} = require('../utils/auth');
const { User, Story } = require('../models');

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
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email })
            if (!user) {
                throw new AuthenticationError("Incorrect credentials.");
            }

            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError("Incorrect credentials.");
            }

            const token = signToken(user);
            return { token, user };
        },
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(user);

            return { newUser, token };
        },
        addStory: async (parent, args) => {
            const newStory = await Story.create(args);
            const [writers] = args.writers;

            writers.forEach(writer => {
                User.findByIdAndUpdate(
                    { _id: writer._id },
                    { $push: { stories: newStory._id } },
                    { new: true }
                );
            });

            return newStory;
        },
        addLine: async (parent, { storyId, lineContent, username }) => {
            const updatedStory = await Story.findOneAndUpdate(
                { _id: storyId },
                { $push: { lines: { lineContent, username } } },
                { new: true, runValidators: true }
            );

            return updatedStory;
        }
    }
};

module.exports = resolvers;