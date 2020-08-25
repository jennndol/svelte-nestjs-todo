import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  readonly title: string;
  @Field(() => Int)
  readonly isCompleted: boolean;
}