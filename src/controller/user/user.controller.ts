import { Controller, ParseIntPipe, Get, Post, Delete, Param, Body, Put,  NotFoundException, UseGuards } from '@nestjs/common';
import { UserService } from 'src/service/user/user.service';
import { User } from 'src/modules/user/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';


@Controller('user')
export class UserController {
    constructor(private service:UserService){}

    @UseGuards(AuthGuard())
    @Get('/users')
    async getUsers( ): Promise<User[]>{
        const users = await this.service.getUsers();
        return users;
        
    }

   
    

    @Get('/:id')
    async getUser(@Param('id', ParseIntPipe) id: number): Promise<User>{
        const user = await this.service.getUser( id);
        return user;
    }

    @Post('/create')
    async createUser(@Body() user: User):Promise<User>{
        const createdUser = await this.service.createUser(user);
        return createdUser;
    }

    @Delete('/:id')
    async deleteuser(@Param('id', ParseIntPipe) id: number): Promise<void>{
        const userdelete = await this.service.deleteUser(id);
        if(!userdelete) throw new NotFoundException('No hay registro con ese id para eliminar');
        return userdelete;

    }
    @Put('/:id')
    async updateuser(@Param('id', ParseIntPipe) id: number , @Body() user: User): Promise<User>{
        const updateuser = await this.service.updateUser(id, user);
        return updateuser;

    }
}
