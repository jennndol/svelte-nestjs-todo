import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
  content: String,
  isCompleted: Boolean
});