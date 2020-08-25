import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  content: String,
  isCompleted: {
    type: Boolean,
    default: false
  }
});