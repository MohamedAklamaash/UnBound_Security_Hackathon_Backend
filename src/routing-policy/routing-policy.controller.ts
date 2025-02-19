import { Controller, Get, Post, Body, Query, UseGuards, Patch, ForbiddenException, HttpException, HttpCode, Delete } from '@nestjs/common';
import { RoutingPolicyService } from './routing-policy.service';
import { JwtGuard } from 'src/guards';
import { UserDecorator } from 'src/decorator';
import { User } from '@prisma/client';
import { Role } from 'src/auth/interfaces/enum';

@UseGuards(JwtGuard)
@Controller('routing-policy')
export class RoutingPolicyController {
    constructor(private readonly routingPolicyService: RoutingPolicyService) { }

    @Post('create')
    async createPolicy(
        @Body() data: { provider: string; originalModel: string; regexPattern: string; redirectModel: string },
    ) {
        return this.routingPolicyService.createPolicy(data);
    }

    @Get()
    async getAllPolicies() {
        return this.routingPolicyService.getAllPolicies();
    }

    @Get('route')
    async getRoutedModel(
        @Query('provider') provider: string,
        @Query('model') model: string,
        @Query('prompt') prompt: string,
    ) {
        const finalModel = await this.routingPolicyService.getRedirectModel(provider, model, prompt);
        return { provider, originalModel: model, finalModel };
    }

    @Patch("updatepolicy")
    @HttpCode(200)
    async updatePolicy(@UserDecorator() user: User, @Body() dto: any) {
        // if (user.role !== Role.ADMIN) {
        //     throw new ForbiddenException('Only admins can update routing policies.');
        // }
        if (!dto.id) {
            throw new HttpException("Policy id is not given", 401)
        }
        return this.routingPolicyService.updatePolicy(dto.id, dto)
    }

    @Delete("deletepolicy")
    @HttpCode(200)
    async deletePolicy(@UserDecorator() user: User, @Body() dto: any) {
        // if (user.role !== Role.ADMIN) {
        //     throw new ForbiddenException('Only admins can update routing policies.');
        // }
        if (!dto.id) {
            throw new HttpException("Policy is not found", 401)
        }
        return this.routingPolicyService.deletePolicy(dto.id)
    }
}
