import { QuerySelectOptions } from '../../../app.types';

export class QueryCountriesDto {
  yesterday?: QuerySelectOptions;
  twoDaysAgo?: QuerySelectOptions;
  allowNull?: QuerySelectOptions;
}
