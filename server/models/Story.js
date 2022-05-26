const { Schema, model } = require('mongoose');
const writerSchema = require('./Writer');
const lineSchema = require('./Line');
const dateFormat = require('../utils/dateFormat');

const storySchema = new Schema(
  {
    storyTitle: {
      type: String,
      required: 'The Title is required!',
      minlength: 10,
      maxlength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    genre: {
      type: String,
      required: true
    },
	  storyType: {
		  type: String,
		  required: true
	  },
	  lineCount: {
		  type: Number,
		  min: 10,
		  max: 10000
	  },
	  writers: [writerSchema],
    lines: [lineSchema]
    },
  {
    toJSON: {
      getters: true
    }
  }
);

const Story = model('Story', storySchema);

module.exports = Story;
