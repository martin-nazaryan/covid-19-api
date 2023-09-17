import { Controller, Get, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { QuerySelectOptions } from '../../app.types';

import { InfoService } from './info.service';
import { QueryInfoDto } from './dto/query-info.dto';

@ApiTags('Info')
@Controller('info')
export class InfoController {
  constructor(private readonly infoService: InfoService) {}

  @Get()
  @ApiQuery({
    name: 'yesterday',
    enum: QuerySelectOptions,
    required: false,
    description: 'Queries data reported a day ago',
  })
  @ApiQuery({
    name: 'twoDaysAgo',
    enum: QuerySelectOptions,
    required: false,
    description: 'Queries data reported two days ago',
  })
  @ApiQuery({
    name: 'allowNull',
    enum: QuerySelectOptions,
    required: false,
    description:
      'By default, if a value is missing, it is returned as 0. This allows nulls to be returned',
  })
  findAll(@Query() query: QueryInfoDto) {
    return this.infoService.findAll(query);
  }
}
