import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ModelController } from './models/model.controller';
import { ModelModule } from './models/model.module';

// decorator adds metadata to the class or the function
// modules help us organize controllers 
@Module({
  // config module for envs
  imports: [ConfigModule.forRoot({
    isGlobal:true
  }), AuthModule, UserModule, PrismaModule,ModelModule]
})
export class AppModule {

}
