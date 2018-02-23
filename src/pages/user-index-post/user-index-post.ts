import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ActionSheetController, 
  LoadingController,AlertController } from 'ionic-angular';

/**
 * Generated class for the RoleEmployeePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {LoginStateProvider} from '../../providers/login-state/login-state';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {ApiUserProvider} from '../../providers/api-user/api-user';

import {LoginPage} from '../../pages/login/login';

@IonicPage()
@Component({
  selector: 'page-user-index-post',
  templateUrl: 'user-index-post.html',
})
export class UserIndexPostPage {

  roles:any;
 
  constructor(private navCtrl: NavController, 
    private navParams: NavParams,
    private viewCtrl:ViewController,
    private actionSheetCtrl:ActionSheetController,
    private loadinControler:LoadingController,
    private alertContol:AlertController,

    private globalLoginState:LoginStateProvider,
    private authKeyProvider:AuthKeyProvider,
    private apiUserProvider:ApiUserProvider,

    ) {
  }

  ionViewDidLoad() {
    this.getRoles();
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  addEmployee()
  {

  }
  getRoles()
  {
    let loader=this.loadinControler.create({
      content:"Loading..."
    });
    loader.present();
    
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {};
      //console.log(authkey);
      this.apiUserProvider.getRoles(authkey,query).subscribe((val)=>{
        loader.dismiss();
        let response:any  = val;
        if(!response.error){
          this.roles=response.result;
          console.log( this.roles);
        }else{
          
          let alert=this.alertContol.create({
            title:"Error",
            message:response.errortext,
            buttons: ['Dismiss']
          })
          alert.present();
        }

        },(err)=>{
          
          loader.dismiss();
          if(err.status==401)
          {
            let alert=this.alertContol.create({
              title:"Error",
              message:"Your session has expired",
              buttons: [{
                  text: 'Ok',
                  role: 'cancel',
                  handler: data => {
                    this.globalLoginState.loginState = false;
                    this.navCtrl.setRoot(LoginPage);
                  }
              }]
            })
            alert.present();
            
          }
      });
      
    });
  }

  
  openActionSheet()
  {
    
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },
        {
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
 
    actionSheet.present();
  }

  
}
