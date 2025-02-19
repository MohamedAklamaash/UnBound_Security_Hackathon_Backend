import { Body, Controller, Get, HttpCode, Patch, UseGuards } from '@nestjs/common';
import { User } from '@prisma/client';
import { UserDecorator } from '../decorator';
import { JwtGuard } from '../guards';
import { UserService } from './user.service';
import { EditUserDto } from './dto/edituser.dto';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiBody,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth() 
@UseGuards(JwtGuard)
@Controller('users')
export class UserController {
  constructor(private userService: UserService) { }

  @Get('me')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get current user information' }) // Describes the endpoint
  @ApiResponse({
    status: 200,
    description: 'Returns the details of the currently authenticated user.',
    schema: {
      example: {
        user: {
          id: 1,
          email: 'user@example.com',
          firstName: 'John',
          lastName: 'Doe',
          createdAt: '2023-01-01T00:00:00.000Z',
          updatedAt: '2023-01-01T00:00:00.000Z',
        },
      },
    },
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  UserInfo(@UserDecorator() user: User) {

    const { id, email, firstName, lastName, role } = user
    return { id, email, firstName, lastName, role };
  }

  @Patch('edituser')
  @HttpCode(200)
  @ApiOperation({ summary: 'Edit current user information' })
  @ApiBody({ type: EditUserDto })
  @ApiResponse({
    status: 200,
    description: 'Returns the updated user details.',
    schema: {
      example: {
        id: 1,
        email: 'updated@example.com',
        firstName: 'Jane',
        lastName: 'Doe',
        createdAt: '2023-01-01T00:00:00.000Z',
        updatedAt: '2023-01-02T00:00:00.000Z',
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  editUser(@UserDecorator() user: User, @Body() dto: EditUserDto) {
    return this.userService.editUser(user.id, dto);
  }
}