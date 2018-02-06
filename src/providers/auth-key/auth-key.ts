import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the AuthKeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthKeyProvider {

  constructor(public http: HttpClient,private storage:Storage) {
    
  }
  getAuthKey()
  {
   return  this.storage.get('authKey').then((val) => {
      return val;
    });
  }
  setAuthKey(authKey:string){
    this.storage.set('authKey', authKey);
  }
  deleteAuthkey()
  {
    //console.log('deleting auth key');
    this.storage.remove('authKey');
  }

}
