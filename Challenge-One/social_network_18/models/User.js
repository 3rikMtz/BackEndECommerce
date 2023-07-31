const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/, //regex thaht validates email format
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thought',
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { //allow us to include virtual properties 
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


// Define the virtual friendCount
userSchema
.virtual('friendCount')
//getter
.get(function () {
  return this.friends.length;
});

//initialize our Application model
const User = model('User', userSchema);

module.exports = User;
