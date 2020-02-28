import { Module } from '@nestjs/common';
import { SampelController } from './sample.controller';

@Module({ controllers: [SampelController] })
export class SampleModule {}
