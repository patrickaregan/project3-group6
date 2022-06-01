const { AuthenticationError } = require('apollo-server-express');
const { User, Story } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // returns user data for context.user if logged in
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                  .select('-__v -password')
                  .populate('stories')
        
                console.log(context.user);  
                return userData;
            }
            throw new AuthenticationError("You are not logged in.");
        },
        // returns user data for all users
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('stories')
        },
        // returns user data for user matching username arg
        user: async (parent, { username }) => {
            return User.findOne({ username })
            .select('-__v')
            .populate('stories');
        },
        // returns story data for all stories
        stories: async () => {
            return Story.find()
            .select('-__v')
            .populate('writers')
        },
        // returns story data for story matching storyTitle arg
        story: async (parent, { storyTitle }) => {
            return Story.findOne({ storyTitle })
            .select('-__v')
            .populate('lines')
            .populate('writers');
        }
    },

    Mutation: {
        // logs in user, sets token to current user
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            // checks if email matches
            if (!user) {
                throw new AuthenticationError("Incorrect credentials.");
            }

            //checks if password matches
            const correctPassword = await user.isCorrectPassword(password);
            if (!correctPassword) {
                throw new AuthenticationError("Incorrect credentials.");
            }

            const token = signToken(user);
            return { token, user };
        },
        // creates a new user and sets token to current user
        addUser: async (parent, args) => {
            const newUser = await User.create(args);
            const token = signToken(newUser);
            return { newUser, token };
        },
        // deletes a user by ID
        removeUser: async (parent, { _id }) => {
            const deletedUser = await User.findByIdAndDelete({ _id });
            return deletedUser;
        },
        // creates a story and sets username to current user
        addStory: async (parent, args, context) => {
            //checks if a user is logged in
            if (context.user) {
                const newStory = await Story.create({ ...args, username: context.user.username });
                const { storyTitle, _id } = newStory;

                // adds new story to current user's stories array
                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { stories: { storyTitle, _id } } },
                    { new: true }
                );

                return newStory;
            }
            throw new AuthenticationError("You are not logged in.");
        },
        // adds a writer to the writers array of a story owned by currnet user
        addWriter: async (parent, { storyId, username }, context) => {
            // checks if a user is logged in
            if (context.user) {
                const currentUser = context.user.username;
                const story = await Story.findOne({ _id: storyId });

                // checks if current user is owner of the story
                if (story.username == currentUser) {
                    const updatedStory = await Story.findByIdAndUpdate(
                        { _id: storyId },
                        { $addToSet: { writers: { username } } },
                        { new: true, runValidators: true }
                    );

                    // adds story to the stories array of the newly added writer
                    const { storyTitle, _id } = updatedStory;
                    await User.findOneAndUpdate(
                        { username },
                        { $push: { stories: { storyTitle, _id } } },
                        { new: true }
                    );

                    return updatedStory;
                }
                throw new AuthenticationError("Access denied.");
            }
            throw new AuthenticationError("You are not logged in!");
        },
        // deletes a story by ID
        removeStory: async (parent, { _id }) => {
            const deletedStory = await Story.findByIdAndDelete({ _id });
            return deletedStory;
        },
        // adds a line from current user to a story by ID
        addLine: async (parent, { storyId, lineContent }, context) => {
            // checks if a user is logged in
            if (context.user) {
                const username = context.user.username;
                const story = await Story.findOne({ _id: storyId });

                // checks if current user is owner OR a writer of the story
                //if (story.username == username || story.writers.some(writer.username == username)) {
                if (true) {
                    const updatedStory = await Story.findByIdAndUpdate(
                        { _id: storyId },
                        { $push: { lines: { lineContent, username } } },
                        { new: true, runValidators: true }
                    );

                    return updatedStory;
                }
                throw new AuthenticationError("Access denied.");
            }
            throw new AuthenticationError("You are not logged in!");
        },
        // updates a line owned by current user
        editLine: async (parent, { storyId, lineId, lineContent }, context) => {
            // checks if a user is logged in
            if (context.user) {
                const story = await Story.findOne({ _id: storyId });

                let index = '';
                let storyLines = story.lines;

                // returns the data and index of the line to be edited
                let lineToEdit = storyLines.filter((line, i) => {
                    if (line._id == lineId) {
                        index = i;
                        return line;
                    }
                });

                // checks if current user is owner of the line
                if (lineToEdit[0].username == context.user.username) {
                    const username = context.user.username;

                    // sets new content for line
                    lineToEdit = { lineContent, username };

                    // replace old line data with new line data in lines array
                    storyLines.splice(index, 1, lineToEdit);

                    // replaces old lines array with updated lines array
                    const updatedStory = await Story.findOneAndUpdate(
                        { _id: storyId },
                        { $set: { lines: storyLines } },
                        { new: true }
                    );

                    return updatedStory;
                }
                throw new AuthenticationError("Access denied.");
            }
            throw new AuthenticationError("You are not logged in!");
        }
    }
};

module.exports = resolvers;