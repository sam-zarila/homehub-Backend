import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/Entities/user.entiy';
import { Repository } from 'typeorm';
import *as bcrypt from 'bcrypt'
import * as jwt from 'jsonwebtoken';
//import { Blacklist } from 'src/Entities/Blaclist.Entity';

@Injectable()
export class UserService {
    private readonly saltRounds=10;
    private readonly jwtSecret = 'your_jwt_secret'

    constructor(
        @InjectRepository(User) private readonly userRepository:Repository<User>,
//@InjectRepository(Blacklist) private readonly blacklistRepository:Repository<Blacklist>
     ){}

     async createUser(username:string, email:string, password:string):Promise<User>{
        const hashedPassword =await bcrypt.hash(password, this.saltRounds)
        const user =this.userRepository.create({username,email, password:hashedPassword})

        return this.userRepository.save(user);

     }
     async findUserByEmail(email:string): Promise<User | undefined>{
        return this.userRepository.findOne({where:{email}} )

     }
     //method for log in
     async Login(username:string, password:string): Promise<string>{
      const user=await this.userRepository.findOne({where:{username}});

      if(!user||!(await bcrypt.compare(password, user.password))){
         throw new UnauthorizedException('Imvalid credentials');

        
      }
      const payload ={username:user.username, sub:user.id};

      return jwt.sign(payload, this.jwtSecret,{expiresIn:'1h'})

     }
//      async Logout(token:string):Promise<void>{

//       const decoded =jwt.verify(token, this.jwtSecret) as {exp:number};

//       const expiryDate = new Date(decoded.exp*1000);

//       const BlacklistedToken = this.blacklistRepository.create({token, expiryDate});

//       await this.blacklistRepository.save(BlacklistedToken)

//      }
//      async isTokenBlacklisted(token: string): Promise<boolean> {
//       const blacklistedToken = await this.blacklistRepository.findOne({ where: { token } });
//       return !!blacklistedToken;
//   }
}
