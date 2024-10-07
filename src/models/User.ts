import { Schema, model } from "mongoose";
import Thought from "./Thought.js";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Please enter a valid e-mail address']
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},
{
    toJSON: {
        virtuals: true,
        getters: true
    },
    id: false
});

UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

UserSchema.pre('findOneAndDelete', async function (next) {
    try {
      const user = await this.model.findOne(this.getFilter());
      if (user) {
        await Thought.deleteMany({ username: user.username });
      }
      next();
    } catch (err) {
      next(err as Error);
    }
  });
  

const User = model('User', UserSchema);

export default User;