import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TodoInput {
  @Field({nullable: true})
  readonly content: string;
  @Field({nullable: true})
  readonly isCompleted: boolean;
}