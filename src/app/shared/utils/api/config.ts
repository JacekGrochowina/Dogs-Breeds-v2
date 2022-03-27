import { HttpHeaders } from '@angular/common/http';

export class ConfigAPI {

  public static readonly apiURL = 'https://api.thedogapi.com/v1';

  public static readonly headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
  };

}
