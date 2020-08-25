import { ObjectType, Field, ID } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';

@ObjectType()
export class Todo {
  @Field(() => ID)
  @IsString()
  readonly id?: string;
  @Field()
  @IsString()
  @IsNotEmpty()
  readonly content: string;
  @Field()
  @IsBoolean()
  readonly isCompleted: boolean;
}