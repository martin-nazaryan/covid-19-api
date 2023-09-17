import { Injectable, Logger } from '@nestjs/common';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';
import { HttpService } from '@nestjs/axios';

import { QueryInfoDto } from './dto/query-info.dto';
import { Info } from './entities/info.entity';

@Injectable()
export class InfoService {
  private readonly logger = new Logger(InfoService.name);
  constructor(private readonly httpService: HttpService) {}

  async findAll(query: QueryInfoDto): Promise<Info> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<Info>(`all`, {
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
}
