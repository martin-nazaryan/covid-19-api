import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

import { QueryCountriesDto } from './dto/query-countries.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountriesService {
  private readonly logger = new Logger(CountriesService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(query: QueryCountriesDto): Promise<Country[]> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Country[]>(`/countries`, {
          params: query,
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response?.data);
            throw 'An error happened!';
          }),
        ),
    );

    return data;
  }

  async findOne(id: string): Promise<Country> {
    const { data } = await firstValueFrom(
      this.httpService.get<Country>(`countries/${id}`).pipe(
        catchError((error: AxiosError) => {
          console.log(error);
          // this.logger.error(error.response?.data);
          throw 'An error happened!';
        }),
      ),
    );
    return data;
  }
}
