import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class EditUserDto {
  @ApiPropertyOptional({
    description: 'The email address of the user.',
    example: 'user@example.com',
  })
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email: string;

  @ApiPropertyOptional({
    description:
      'The password of the user. Must be 4-30 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
    example: 'Password123!',
  })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,30}$/, {
    message:
      'Password must be 4-30 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character.',
  })
  password: string;

  @ApiPropertyOptional({
    description: 'The first name of the user.',
    example: 'John',
  })
  @IsString()
  @IsOptional()
  firstName: string;
}