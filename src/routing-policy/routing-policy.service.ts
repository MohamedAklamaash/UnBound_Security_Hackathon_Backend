import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class RoutingPolicyService {
    constructor(private readonly prisma: PrismaService) { }

    async getRedirectModel(provider: string, model: string, prompt: string): Promise<string> {
        const policies = await this.prisma.routingPolicy.findMany({
            where: { provider, originalModel: model },
        });

        for (const policy of policies) {
            try {
                const regex = new RegExp(policy.regexPattern, 'i'); // Apply case-insensitive flag here
                if (regex.test(prompt)) {
                    console.log(`Matched: ${policy.regexPattern} → Redirecting to ${policy.redirectModel}`);
                    return policy.redirectModel;
                }
            } catch (error) {
                console.error(`Invalid regex pattern in DB: ${policy.regexPattern}`, error);
            }
        }

        return model;
    }

    async createPolicy(data: { provider: string; originalModel: string; regexPattern: string; redirectModel: string }) {
        return this.prisma.routingPolicy.create({ data });
    }

    async getAllPolicies() {
        return this.prisma.routingPolicy.findMany();
    }
}
