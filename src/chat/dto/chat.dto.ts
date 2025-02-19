import { IsString } from "class-validator"

export class ChatDTO {
    @IsString()
    provider: string
    @IsString()
    model: string
    @IsString()
    prompt: string
}