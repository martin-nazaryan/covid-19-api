import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';

import { CountriesModule } from './resources/countries/countries.module';
import { InfoModule } from './resources/info/info.module';
import { CountriesController } from './resources/countries/countries.controller';
import { CountriesService } from './resources/countries/countries.service';
import { InfoController } from './resources/info/info.controller';
import { InfoService } from './resources/info/info.service';
import { EnvironmentModule } from './environment/environment.module';
import { HealthModule } from './resources/health/health.module';

import * as process from 'process';

@Module({
  imports: [
    HttpModule.register({
      baseURL: process.env.API_URL,
    }),
    EnvironmentModule,
    CountriesModule,
    InfoModule,
    HealthModule,
  ],
  controllers: [CountriesController, InfoController],
  providers: [CountriesService, InfoService],
})
export class AppModule {}
