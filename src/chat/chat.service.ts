import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ChatDTO } from "./dto";
import { staticResponses } from "../../constants/responses"

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) { }

    async chatCompletion(dto: ChatDTO) {
        const { model, prompt, provider } = dto
        const m = await this.prisma.model.findFirst({
            where: {
                model,
                provider
            }
        })
        if (!m) {
            throw new HttpException("Request Model Not found", 404)
        }
        let resp = staticResponses[provider] || staticResponses?.provider
        
        if (!resp) {
            resp = "Generating a static response"
        }
        return { provider, model, response: resp }
    }

}