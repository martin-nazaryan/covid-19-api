import { QuerySelectOptions } from '../../../app.types';

export class QueryInfoDto {
  yesterday?: QuerySelectOptions;
  twoDaysAgo?: QuerySelectOptions;
  allowNull?: QuerySelectOptions;
}
