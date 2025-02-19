import { Module } from '@nestjs/common';
import { RoutingPolicyService } from './routing-policy.service';
import { RoutingPolicyController } from './routing-policy.controller';

@Module({
  providers: [RoutingPolicyService],
  controllers: [RoutingPolicyController]
})
export class RoutingPolicyModule {}
