import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthModel } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    @Post('register')
    async register(@Body() dto: AuthModel) {

    }

    @HttpCode(200)
    @Post('login')
    async login(@Body() dto: AuthModel) {
        
    }
}
