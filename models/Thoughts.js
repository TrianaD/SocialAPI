const { Schema, model, Types } = require('mongoose');
const moment = require('moment');

const reactionSchema = new Schema(
    {
      reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
      },
      reactionBody: {
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
          },
    },
    {
      toJSON: {
        getters: true,
      },
    }
  );

const thoughtsSchema = new Schema (
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
        },
        reactions: [ 
            reactionSchema
        ]

    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
)

thoughtsSchema.virtual('reactionCount').get(function(){ 
    return this.reactions.length;

} );

const Thoughts = model ('Thoughts', thoughtsSchema);

module.exports = Thoughts;




userSchema.virtual('friendCount').get(function(){
    return this.friends.length;
})


const User = model('User', userSchema);

module.exports = User;