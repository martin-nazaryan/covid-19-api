import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

import { CountriesService } from './countries.service';
import { QueryCountriesDto } from './dto/query-countries.dto';
import { CountryYesterdayEnum } from './countries.type';

@ApiTags('Countries')
@Controller('countries')
export class CountriesController {
  constructor(private readonly countriesService: CountriesService) {}

  @Get()
  @ApiQuery({ name: 'yesterday', enum: CountryYesterdayEnum, required: false })
  findAll(@Query() query: QueryCountriesDto) {
    return this.countriesService.findAll(query);
  }

  @Get(':country')
  findOne(@Param('country') country: string) {
    return this.countriesService.findOne(country);
  }
}
