import { IsBoolean, IsOptional, IsString } from "class-validator"

export class ChatDTO {
    @IsString()
    provider: string

    @IsString()
    model: string
    @IsString()
    prompt: string

    @IsBoolean()
    @IsOptional()
    isFileUploaded: boolean

    @IsString()
    @IsOptional()
    FileName: string
}