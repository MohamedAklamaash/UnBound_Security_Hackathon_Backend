import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
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
                const regex = new RegExp(policy.regexPattern, 'i');
                if (regex.test(prompt)) {
                    console.log(`Matched: ${policy.regexPattern} → Redirecting to ${policy.redirectModel}`);
                    return policy.redirectModel;
                }
            } catch (error) {
                throw new HttpException("Invalid regex pattern in DB", 400)
            }
        }

        return model;
    }

    async createPolicy(data: { provider: string; originalModel: string; regexPattern: string; redirectModel: string }) {
        return this.prisma.routingPolicy.create({ data });
    }

    async updatePolicy(
        id: string,
        data: { provider?: string; originalModel?: string; regexPattern?: string; redirectModel?: string }
    ) {
        return this.prisma.routingPolicy.update({
            where: { id },
            data,
        });
    }

    async deletePolicy(id: string) {
        return this.prisma.routingPolicy.delete({
            where: { id },
        });
    }

    async getAllPolicies() {
        return this.prisma.routingPolicy.findMany();
    }
}
