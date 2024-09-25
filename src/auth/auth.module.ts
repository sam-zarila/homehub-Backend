import { Module } from '@nestjs/common';
import { UserService } from './servies/user.service';
import { AuthController } from './controllers/auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entiy';
// import { AuthService } from './service/auth/auth.service';

@Module({

  imports:[TypeOrmModule.forFeature([User])],
  providers: [UserService],
  controllers: [AuthController],

})
export class AuthModule {}
