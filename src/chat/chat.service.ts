import { HttpException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { ChatDTO } from "./dto";
import { staticResponses } from "../../constants/responses"

@Injectable()
export class ChatService {
    constructor(private prisma: PrismaService) { }

    async chatCompletion(dto: ChatDTO) {
        const { model, prompt, provider, isFileUploaded, FileName } = dto
        const m = await this.prisma.model.findFirst({
            where: {
                model,
                provider
            }
        })
        if (!m) {
            throw new HttpException("Request Model Not found", 404)
        }

        await this.prisma.chat.create({
            data: {
                prompt,
                isFileUploaded,
                model,
                provider,
                FileName
            }
        })

        let resp = staticResponses[provider] || staticResponses?.provider

        if (!resp) {
            resp = "Generating a static response"
        }

        if (isFileUploaded) {
            resp += ` The file ${FileName} that is sent is processed`
        }

        return { provider, model, response: resp }
    }

}