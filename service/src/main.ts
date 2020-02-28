import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { RpcException, Transport } from '@nestjs/microservices';
import { status as GrpcStatus } from 'grpc';
import * as path from 'path';
import 'reflect-metadata';
import { ApplicationModule } from './modules/app.module';

async function bootstrap() {
  const microservice = await NestFactory.createMicroservice(ApplicationModule, {
    transport: Transport.GRPC,
    options: {
      package: 'service',
      protoPath: path.join(path.dirname(__dirname), 'proto', 'service.proto'),
      url: `0.0.0.0:${parseInt(process.env.PORT, 10) || 90}`
    }
  });

  microservice.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      validationError: { target: false, value: false },
      exceptionFactory: errors =>
        new RpcException({
          code: GrpcStatus.INVALID_ARGUMENT,
          details: JSON.stringify(errors)
        })
    })
  );

  await microservice.listenAsync();
}
bootstrap();
