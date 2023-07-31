const { Schema, model, Types } = require('mongoose');

// Reaction Schema
const reactionSchema = new Schema({
  reactionId: { //automatically assigned a new unique ObjectId
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(),
  },
});

//thoughtSchema its not a model, but represents a schema for the thought model
const thoughtSchema = new Schema(
  {
    thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
    },
    createdAt: {
    type: Date,
    default: Date.now,
    get: (timestamp) => new Date(timestamp).toISOString(),
    },
    username: {
    type: String,
    required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

thoughtSchema
.virtual('reactionCount')
.get(function () {
  return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;

