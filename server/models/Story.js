const { Schema, model } = require('mongoose');
const userSchema = require('./User');
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
    writers: [userSchema],
	lines: [lineSchema]
  },
  {
    toJSON: {
      getters: true
    }
  }
);

storySchema.virtual('writerCount').get(function() {
  return this.writers.length;
});

storySchema.virtual('lineCount').get(function() {
  return this.writers.length;
});



const Story = model('Story', storySchema);

module.exports = Story;
