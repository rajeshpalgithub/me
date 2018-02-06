import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';


import {apiUrl} from '../apiurl/apiurl';

/*
  Generated class for the ApiLoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()

/*interface Login {
  authKey: string;
  role:string;
  userName:string;
  clientName:string;

}*/

export class ApiLoginProvider {

  constructor(public http: HttpClient) {
  }

  login(params:any):Observable<any>
  {
    return this.http.post(apiUrl+'/login',JSON.stringify(params) ).map((res: Response) => res);
  }
  logout(authKey:string)
  {
    //console.log(authKey);
    let header = {'Auth-Token':authKey};
    return this.http.get(apiUrl+'/logout',{headers:header}).map((res:Response)=>res);
  }

}
