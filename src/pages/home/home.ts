import { Component,ViewChild } from '@angular/core';
import { NavController,LoadingController,AlertController,Nav} from 'ionic-angular';

import {LoginStateProvider} from '../../providers/login-state/login-state';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {ApiLoginProvider} from '../../providers/api-login/api-login';
import { ApiMenuProvider } from '../../providers/api-menu/api-menu';
//import {PageControllerProvider} from '../../providers/page-controller/page-controller';

import {LoginPage} from '../login/login';

import {DashboardPage} from '../dashboard/dashboard';

import {pages} from '../../providers/pages/pages';

//AccountIndexGetPage

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Nav) nav: Nav;

  rootPage = DashboardPage;
  menus:any;

  constructor(public navCtrl: NavController,private globalLoginState:LoginStateProvider,
    private authKeyProvider:AuthKeyProvider, 
    private loadinControler:LoadingController, 
    private alertContol:AlertController,
    private apiLoginProvider:ApiLoginProvider,
    private apiMenu:ApiMenuProvider,
    //private pageControl:PageControllerProvider
  ) 
  {
    
  }
  ionViewDidLoad()
  {
    this.allMenu();
  }
  
  logout()
  {
    let loader = this.loadinControler.create({
      content:"Loging out..."
    })
    loader.present();
    this.authKeyProvider.getAuthKey().then(authkey=>{
      
      this.globalLoginState.loginState = false;
      this.authKeyProvider.deleteAuthkey();
    
      this.apiLoginProvider.logout(authkey).subscribe((val)=>{
         // console.log(this.authKeyProvider.getAuthKey());
          this.navCtrl.setRoot(LoginPage);
          loader.dismiss();
      });
      // console.log('after:');
    });
  }
  dashboard()
  {
    this.nav.setRoot(DashboardPage);
  }
  allMenu()
  {
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {'parent_id':0,'menu_type':'main'};
      this.apiMenu.getMenus(authkey,query).subscribe((val)=>{
        let response:any  = val;
        
        if(!response.error){
          this.menus=response.result.menu_link;
         // console.log(this.menus);
        }else{
          let alert=this.alertContol.create({
            title:"Error",
            message:response.errortext,
            buttons: ['Dismiss']
          })
          alert.present();
        }

        },(err)=>{
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
      })
    });
  }

  openPage(module:string,submenu:any)
  {
   let viewPage:string= this.allTitleCase(module)+this.allTitleCase(submenu.api)+this.allTitleCase(submenu.type);
   
  let page: any = pages.find(function(element){
    return element.name===viewPage
  });
  ///console.log(page);
  this.nav.setRoot(page.component,{pageTitle:page.title,module:module,submenu:submenu});
   
  
  }
  allTitleCase(inStr)
  {
    return inStr.replace(/\w\S*/g, function(tStr)
    {
      return tStr.charAt(0).toUpperCase() + tStr.substr(1).toLowerCase();
    });
  } 
  

}
