import { Module } from '@nestjs/common';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';
import { ModuloModule } from './modules/modulo/modulo.module';
import { OperacionModule } from './modules/operacion/operacion.module';
import { ClienteModule } from './modules/cliente/cliente.module';
import { VendedorModule } from './modules/vendedor/vendedor.module';
import { AdminModule } from './modules/admin/admin.module';
import { VentaModule } from './modules/venta/venta.module';
import { PedidoModule } from './modules/pedido/pedido.module';
import { PedidoProduModule } from './modules/pedido-produ/pedido-produ.module';
import { ProductoModule } from './modules/producto/producto.module';
import { CategoriaModule } from './modules/categoria/categoria.module';
import { ImgCategoriaModule } from './modules/img-categoria/img-categoria.module';
import { ImgProductoModule } from './modules/img-producto/img-producto.module';
import { UnidadProducModule } from './modules/unidad-produc/unidad-produc.module';
import { RepartidorModule } from './modules/repartidor/repartidor.module';
import { RolModule } from './modules/rol/rol.module';
import { RolOperacionModule } from './modules/rol-operacion/rol-operacion.module';
import { AuthModule } from './modules/auth/auth.module';
import { ProveedorModule } from './modules/proveedor/proveedor.module';
import { CompraModule } from './modules/compra/compra.module';
import { ProveedorService } from './service/proveedor/proveedor.service';
import { CompraService } from './service/compra/compra.service';
import { ProveedorController } from './controller/proveedor/proveedor.controller';
import { CompraController } from './controller/compra/compra.controller';





@Module({
  imports: [ConfigModule, 
            DatabaseModule, 
            UserModule, 
            LoginModule, 
            ModuloModule, 
            OperacionModule, 
            ClienteModule, 
            VendedorModule, 
            AdminModule, 
            VentaModule, 
            PedidoModule, 
            PedidoProduModule, 
            ProductoModule, 
            CategoriaModule, 
            ImgCategoriaModule, 
            ImgProductoModule, 
            UnidadProducModule, 
            RepartidorModule, 
            RolModule, 
            RolOperacionModule, 
            AuthModule, ProveedorModule, CompraModule],
  controllers: [ProveedorController, CompraController],
  providers: [ProveedorService, CompraService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);

  }
}
