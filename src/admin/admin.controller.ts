import { Controller, Post, Body, Get, UseGuards } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { JwtGuard } from "src/guards";

@UseGuards(JwtGuard)
@Controller("admin")
export class AdminController {
    constructor(private readonly prisma: PrismaService) { }

    @Post("addFileRoute")
    async createFileRoute(
        @Body() data: { fileType: string; provider: string; model: string }
    ) {
        return this.prisma.fileUploadRoute.create({ data });
    }

    @Get("getFileRoutes")
    async getFileRoutes() {
        return this.prisma.fileUploadRoute.findMany();
    }
}
