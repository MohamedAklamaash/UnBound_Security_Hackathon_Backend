import { Controller, Get, Post, Body, Query, UseGuards } from '@nestjs/common';
import { RoutingPolicyService } from './routing-policy.service';
import { JwtGuard } from 'src/guards';

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
}
