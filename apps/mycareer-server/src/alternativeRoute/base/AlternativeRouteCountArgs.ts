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
import { AlternativeRouteWhereInput } from "./AlternativeRouteWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class AlternativeRouteCountArgs {
  @ApiProperty({
    required: false,
    type: () => AlternativeRouteWhereInput,
  })
  @Field(() => AlternativeRouteWhereInput, { nullable: true })
  @Type(() => AlternativeRouteWhereInput)
  where?: AlternativeRouteWhereInput;
}

export { AlternativeRouteCountArgs as AlternativeRouteCountArgs };
