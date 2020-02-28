import { Module } from '@nestjs/common';
import { SampleModule } from './sample';

@Module({ imports: [SampleModule] })
export class ApplicationModule {}
