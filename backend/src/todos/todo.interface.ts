import { Document } from 'mongoose';

export interface TodoInterface extends Document {
    readonly content: string;
    readonly isCompleted: boolean;
}