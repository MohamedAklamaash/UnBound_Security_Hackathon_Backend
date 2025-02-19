import { Module } from "@nestjs/common";
import { FileUploadService } from "./fileupload.service";
import { FileUploadController } from "./fileupload.controller";
import { PrismaService } from "../prisma/prisma.service";

@Module({
    controllers: [FileUploadController],
    providers: [FileUploadService, PrismaService],
})
export class FileUploadModule { }
