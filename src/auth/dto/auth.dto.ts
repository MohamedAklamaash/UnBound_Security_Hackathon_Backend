import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";
import { Role } from "../interfaces/enum";

export class AuthDtos {
  @ApiProperty({ example: "john@example.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "Password123!" })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,30}$/)
  password: string;

  @ApiProperty({ example: "John", required: false })
  @IsString()
  @IsOptional()
  firstName: string;

  @ApiProperty({ example: "USER", required: false })
  @IsString()
  @IsOptional()
  role: Role.USER
}

export class VerifyOTPDTO {
  @ApiProperty({ example: "john@example.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "123456" })
  @IsString()
  @IsNotEmpty()
  otp: string;
}

export class VerifyEmailDTO {
  @ApiProperty({ example: "john@example.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;
}

export class ChangePasswordDTO {
  @ApiProperty({ example: "john@example.com" })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ example: "NewPassword123!" })
  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,30}$/)
  password: string;

  @ApiProperty({ example: "123456", required: false })
  @IsString()
  @IsOptional()
  otp: string;
}