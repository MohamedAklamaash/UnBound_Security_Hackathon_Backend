import {Injectable } from '@nestjs/common';
import { ModelDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModelService {
    constructor(private prisma: PrismaService) { }
    async addAmodel(dto: ModelDTO) {
        const { name } = dto
        const model = await this.prisma.model.create(
            {
                data: {
                    name
                }
            }
        )
        return { message: "Model created", model }
    }

    async ListAllModel() {
        const models = await this.prisma.model.findMany()
        return { models }
    }
}
