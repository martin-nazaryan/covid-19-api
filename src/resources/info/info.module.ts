import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { InfoService } from './info.service';
import { InfoController } from './info.controller';

@Module({
  imports: [HttpModule],
  controllers: [InfoController],
  providers: [InfoService],
})
export class InfoModule {}
