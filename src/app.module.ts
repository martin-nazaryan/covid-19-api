import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';

import { CountriesModule } from './resources/countries/countries.module';
import { InfoModule } from './resources/info/info.module';
import { CountriesController } from './resources/countries/countries.controller';
import { CountriesService } from './resources/countries/countries.service';
import { InfoController } from './resources/info/info.controller';
import { InfoService } from './resources/info/info.service';

import * as process from 'process';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
    }),
    HttpModule.register({
      baseURL: process.env.API_URL,
    }),
    CountriesModule,
    InfoModule,
  ],
  controllers: [CountriesController, InfoController],
  providers: [CountriesService, InfoService],
})
export class AppModule {}
