const { Schema } = require('mongoose');

const writerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
);

module.exports = writerSchema;
