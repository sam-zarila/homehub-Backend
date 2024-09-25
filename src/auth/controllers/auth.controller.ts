import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserService } from '../servies/user.service';
import { User } from 'src/Entities/user.entiy';
import { LoginDto } from 'src/DTOs/Login.DTO';
import { Request, Response } from 'express';

@ApiTags('Agent Registration')
@Controller('auth')
export class AuthController {

    constructor (private readonly userService: UserService) {}

    @Post('register')
    @ApiBody({ type: User })
    async register(
        @Body('username') username: string,
        @Body('email') email: string,
        @Body('password') password: string,
    ) {
        const user = await this.userService.createUser(username, email, password);
        return { user };
    }

    @Post('login')
    @ApiOperation({ summary: 'Login a user' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({ status: 200, description: 'Login successful', schema: { example: { access_token: 'jwt_token' } } })
    async login(@Body() loginDto: LoginDto) {
        const accessToken = await this.userService.Login(loginDto.username, loginDto.password);
        return { access_token: accessToken };
    }

    // @Post('logout')
    // @ApiOperation({ summary: 'Logout a user' })
    // async logout(@Req() req: Request, @Res() res: Response) {
    //     const token = req.headers.authorization?.split(' ')[1]; // Assuming the token is sent in the Authorization header
    //     if (!token) {
    //         return res.status(400).json({ message: 'No token provided' });
    //     }

    //     await this.userService.Logout(token);
    //     return res.status(200).json({ message: 'Logout successful' });
    // }
}
