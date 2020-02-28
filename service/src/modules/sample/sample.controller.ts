import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { EchoRequest } from './dto/requests';
import { EchoResponse } from './dto/responses';

@Controller()
export class SampelController {
  private readonly logger = new Logger(SampelController.name);
  private counter = 0;

  @GrpcMethod('Sample')
  echo(request: EchoRequest): EchoResponse {
    const counter = this.counter++;

    this.logger.log(`Request ${counter}: ${request.str}`);

    return new EchoResponse(request.str, counter);
  }
}
