import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './modules/user/user.module';
import { LoginModule } from './modules/login/login.module';
import { ModuloModule } from './modules/modulo/modulo.module';
import { OperacionModule } from './modules/operacion/operacion.module';
import { UserOperacionModule } from './modules/user-operacion/user-operacion.module';
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

@Module({
  imports: [ConfigModule, DatabaseModule, UserModule, LoginModule, ModuloModule, OperacionModule, UserOperacionModule, ClienteModule, VendedorModule, AdminModule, VentaModule, PedidoModule, PedidoProduModule, ProductoModule, CategoriaModule, ImgCategoriaModule, ImgProductoModule, UnidadProducModule, RepartidorModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService){
    AppModule.port = this._configService.get(Configuration.PORT);

  }
}
