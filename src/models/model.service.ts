import { Injectable } from '@nestjs/common';
import { ModelDTO } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ModelService {
    constructor(private prisma: PrismaService) { }
    async addAmodel(dto: ModelDTO) {
        const { model, provider } = dto

        const m = await this.prisma.model.create(
            {
                data: {
                    model,
                    provider
                }
            }
        )
        return { message: "Model created", model: m }
    }

    async ListAllModel() {
        const models = await this.prisma.model.findMany()
        return { models }
    }
}
