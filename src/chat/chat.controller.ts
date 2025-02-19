import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ChatService } from "./chat.service";
import { ChatDTO } from "./dto";
import { JwtGuard } from "src/guards";

@UseGuards(JwtGuard)
@Controller("v1/chat")
export class ChatController {
    constructor(private chatService: ChatService) { }
    @Post("completions")
    async ChatCompletions(@Body() dto: ChatDTO) {
        return this.chatService.chatCompletion(dto)
    }
}