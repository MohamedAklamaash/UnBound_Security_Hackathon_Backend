import { IsNotEmpty, IsString } from "class-validator";

export class FileUploadDTO {
    @IsString()
    @IsNotEmpty()
    fileType: string
}