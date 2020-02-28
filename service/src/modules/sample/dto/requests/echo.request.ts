import { IsDefined } from 'class-validator';

export class EchoRequest {
  @IsDefined()
  str: string;
}
