import { Controller, HttpCode, Body, UseGuards, Post, Get } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelDTO } from './dto';
import { JwtGuard } from 'src/guards';
import { UserDecorator } from 'src/decorator';
import { User } from '@prisma/client';
import { Role } from 'src/auth/interfaces/enum';

@UseGuards(JwtGuard)
@Controller('models')
export class ModelController {
    constructor(private modelservice: ModelService) { }

    @Post("create")
    @HttpCode(201)
    async addaModel(@UserDecorator() user: User, @Body() dto: any) {
        const { name } = dto        
        if (user.role === Role.USER) {
            return { message: "Only admins can add a new model" }
        }
        return this.modelservice.addAmodel(dto)
    }

    @Get("listall")
    @HttpCode(200)
    async listAllModels() {
        return this.modelservice.ListAllModel()
    }

}
