const { Schema, model, Types } = require('mongoose');
const { stringify } = require('querystring');
const { moveMessagePortToContext } = require('worker_threads');



const reactionSchema = new Schema (
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,   
        },
        userName: {
            type: String,
            required: true,
          },
        createdAt: { 
            type: Date, 
            default: Date.now,
            get: (createdAtVal) => moment ( createdAtVal).format('MM DD, YY [at} hh:mm a')
        }
        // reactions {

        // },

    }
),





const userSchema = new Schema(
  {
    UserName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
            "Use valid email",
        ]
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Thoughts',
      },
    ],
    friends: [
        {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
      ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})


const User = model('User', userSchema);

module.exports = User;