import {environment} from 'src/environments/environment';

export class Config {
  public static production: boolean = environment.production;
  public static apiUrl: string = environment.apiUrl;

  // @ts-ignore
  public static VERSION: string = require('package.json').version;
}
