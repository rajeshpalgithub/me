import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoginStateProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
import {AuthKeyProvider} from '../auth-key/auth-key';

@Injectable()
export class LoginStateProvider {

  constructor(public http: HttpClient,private authKey:AuthKeyProvider) {
    
      this.authKey.getAuthKey().then(authKey=>{
        if(authKey){
          this.loginState = true;
        }
      // console.log('authkey:');
      //  console.log(authKey);
      });
      
   
  }
  
  loginState:boolean = false;
}
