import { Global, Module } from '@nestjs/common';
import { ResponseFactory } from './response.factory';

@Global()
@Module({
  providers: [ResponseFactory],
  exports: [ResponseFactory],
})
export class FactoryModule {}
