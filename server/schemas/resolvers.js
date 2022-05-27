const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                  .select('-__v -password')
                  .populate('stories')
        
                console.log(context.user);  
                return userData;
            }
        
            throw new AuthenticationError("You are not logged in!");
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('stories')
        },
        user: async (parent, { username }) => {
            const user = await User.findOne({ username })
            .select('-__v')
            .populate('stories');

            return user;
        },
        stories: async () => {
            return Story.find()
            .select('-__v')
            .populate('writers')
        },
        story: async (parent, { storyTitle }) => {
            const story = await Story.findOne({ storyTitle })
            .select('-__v')
            .populate('lines')
            .populate('writers')

            return story;
        }
    },

    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
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
            const token = signToken(newUser);

            return { newUser, token };
        },
        removeUser: async (parent, { _id }) => {
            const deletedUser = await User.findByIdAndDelete({ _id });
            return deletedUser;
        },
        addStory: async (parent, args, context) => {
            if (context.user) {
                const newStory = await Story.create({ ...args, username: context.user.username });
                const { storyTitle, _id } = newStory;

                const storyCreator = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { stories: { storyTitle, _id } } },
                    { new: true }
                );

                if (args.writers) {
                    const [writers] = args.writers;

                    writers.forEach(writer => {
                        User.findOneAndUpdate(
                            { username: writer.username },
                            { $push: { stories: { storyTitle, _id } } },
                            { new: true }
                        );
                    });
                }

                return { newStory, storyCreator };
            }

            throw new AuthenticationError("You are not logged in!");
        },
        removeStory: async (parent, { _id }) => {
            const deletedStory = await Story.findByIdAndDelete({ _id });
            return deletedStory;
        },
        addLine: async (parent, { storyId, lineContent }, context) => {
            if (context.user) {
                const username = context.user.username;
                const updatedStory = await Story.findByIdAndUpdate(
                    { _id: storyId },
                    { $push: { lines: { lineContent, username } } },
                    { new: true, runValidators: true }
                );

                return updatedStory;
            }

            throw new AuthenticationError("You are not logged in!");
        },
        editLine: async (parent, { storyId, lineId, lineContent }, context) => {
            if (context.user) {
                const username = context.user.username;
                const story = await Story.findOne({ _id: storyId });

                let index = '';
                let storyLines = story.lines;
                let lineToEdit = storyLines.filter((line, i) => {
                    if (line._id == lineId) {
                        index = i;
                        return line;
                    }
                });

                if (lineToEdit.username == username) {
                    lineToEdit = { lineContent, username };
                    storyLines.splice(index, 1, lineToEdit);

                    const updatedStory = await Story.findOneAndUpdate(
                        { _id: storyId },
                        { $set: { lines: storyLines } },
                        { new: true }
                    );

                    return updatedStory;
                } else {
                    throw new AuthenticationError("Access denied.");
                }
            }

            throw new AuthenticationError("You are not logged in!");
        }
    }
};

module.exports = resolvers;