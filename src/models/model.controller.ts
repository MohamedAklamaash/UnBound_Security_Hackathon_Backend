import { Controller, HttpCode, Body, UseGuards, Post, Get } from '@nestjs/common';
import { ModelService } from './model.service';
import { ModelDTO } from './dto';
import { JwtGuard } from 'src/guards';

@UseGuards(JwtGuard)
@Controller('model')
export class ModelController {
    constructor(private modelservice: ModelService) { }
    
    @Post("create")
    @HttpCode(201)
    async addaModel(@Body() dto: ModelDTO) {
        return this.modelservice.addAmodel(dto)
    }

    @Get("listall")
    async listAllModels() {
        return this.modelservice.ListAllModel()
    }

}
