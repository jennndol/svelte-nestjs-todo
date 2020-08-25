import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true
  },
  isCompleted: {
    type: Boolean,
    default: false
  }
});