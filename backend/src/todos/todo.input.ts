import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field()
  readonly content: string;
  @Field({nullable: true})
  readonly isCompleted: boolean;
}