import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiRoleProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import {apiUrl} from '../apiurl/apiurl';

@Injectable()
export class ApiRoleProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ApiRoleProvider Provider');
  }

  
  getEmployee(authKey:string,params:any)
  {
    let headers = {'Auth-Token':authKey};
    let RequestOptionsArgs={headers,params};
    return this.http.get(apiUrl+'/role/employee',RequestOptionsArgs).map((res:Response)=>res);
  }
  getRoles(authKey:string,params:any)
  {
    let headers = {'Auth-Token':authKey};
    let RequestOptionsArgs={headers,params};
    return this.http.get(apiUrl+'/role',RequestOptionsArgs).map((res:Response)=>res);
  }
}
