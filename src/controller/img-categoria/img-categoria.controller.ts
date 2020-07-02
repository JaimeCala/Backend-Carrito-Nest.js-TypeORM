import { Controller, Post, UseInterceptors, Param, UploadedFile, Get, ParseIntPipe, Res } from '@nestjs/common';
import { ImgCategoriaService } from 'src/service/img-categoria/img-categoria.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import { async } from 'rxjs/internal/scheduler/async';
import { ImgCategoria } from 'src/modules/img-categoria/img-categoria.entity';
import { filetipo } from './interface.imgcategoria';
import { getany } from './interface.getcategoria';


@Controller('img-categoria')
export class ImgCategoriaController {

    constructor(private imgCategoriaService: ImgCategoriaService ){}

    

    @Post('/uploadImg')
    @UseInterceptors(FileInterceptor('file',
    {
        storage: diskStorage({
            destination: './public/uploads',

            filename:(req, file, cb)=> {
                const randomName = Array(32).fill(null).map(()=> (Math.round(Math.random()*16)).toString(16)).join('')
                return cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }
    
    
    ))
    async  uploadFiles(@UploadedFile() file: filetipo): Promise<any>{
        
     
    const guardarImg = await this.imgCategoriaService.createImgCategoria(`${file.filename }`, `${file.path }`);
    return guardarImg;
            
             
    }

   /* @Get('/:idimg')
    async getUser(@Param('idimg', ParseIntPipe) idimg: number): Promise<any>{
        const imgcate = await this.imgCategoriaService.getImgCate(idimg);
        return imgcate;
    }*/
    @Get('/:idimg')
    async getImgcategoria(@Param('idimg') idimg: number, @Res() res:getany): Promise<any>{

        res.sendFile(idimg, {root: 'public/uploads'});

    }


}
