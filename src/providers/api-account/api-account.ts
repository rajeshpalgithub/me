import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiAccountProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import {apiUrl} from '../apiurl/apiurl';
@Injectable()
export class ApiAccountProvider {

  constructor(public http: HttpClient) {
    
  }
  getAccount(authKey:string,params:any)
  {
    let headers = {'Auth-Token':authKey};
    let RequestOptionsArgs={headers,params};
    return this.http.get(apiUrl+'/account',RequestOptionsArgs).map((res:Response)=>res);
  }

}
