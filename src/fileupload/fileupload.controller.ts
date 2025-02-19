import { Controller, Post, UseInterceptors, UploadedFile, BadRequestException, Body, HttpException, UseGuards } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { FileUploadService } from "./fileupload.service";
import { FileUploadDTO } from "./dto";
import { JwtGuard } from "src/guards";

@UseGuards(JwtGuard)
@Controller("file")
export class FileUploadController {
    constructor(private fileUploadService: FileUploadService) { }

    @Post("upload")
    async uploadFile(@Body() dto: FileUploadDTO) {
        const { fileType } = dto
        if (!fileType) {
            throw new HttpException("No file uploaded", 404);
        }
        return this.fileUploadService.processFileUpload(fileType);
    }
}
