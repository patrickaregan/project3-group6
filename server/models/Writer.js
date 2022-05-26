const { Schema } = require('mongoose');

const writerSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    }
  }
);

module.exports = writerSchema;
