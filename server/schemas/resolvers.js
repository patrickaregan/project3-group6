const { AuthenticationError } = require('apollo-server-express');
// const { User } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('stories')
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