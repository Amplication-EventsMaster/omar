/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { PaymentMethodCreateNestedManyWithoutUsersInput } from "./PaymentMethodCreateNestedManyWithoutUsersInput";
import { Type } from "class-transformer";
import { TransactionCreateNestedManyWithoutUsersInput } from "./TransactionCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string | null;

  @ApiProperty({
    required: false,
    type: () => PaymentMethodCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => PaymentMethodCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => PaymentMethodCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  paymentMethods?: PaymentMethodCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => TransactionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => TransactionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => TransactionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  transactions?: TransactionCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string | null;
}

export { UserCreateInput as UserCreateInput };
