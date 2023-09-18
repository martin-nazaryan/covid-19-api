import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { InfoService } from './info.service';
import { QueryInfoDto } from './dto/query-info.dto';

@ApiTags('Info')
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  findAll(@Query() query: QueryInfoDto) {
    return this.infoService.findAll(query);
  }
}
