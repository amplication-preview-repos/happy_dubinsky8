/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CareerWhereUniqueInput } from "./CareerWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class DeleteCareerArgs {
  @ApiProperty({
    required: true,
    type: () => CareerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CareerWhereUniqueInput)
  @Field(() => CareerWhereUniqueInput, { nullable: false })
  where!: CareerWhereUniqueInput;
}

export { DeleteCareerArgs as DeleteCareerArgs };
