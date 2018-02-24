import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController,ModalController,ActionSheetController  } from 'ionic-angular';

import {LoginStateProvider} from '../../providers/login-state/login-state';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {ApiMenuProvider} from '../../providers/api-menu/api-menu';


import {ApiAccountProvider} from '../../providers/api-account/api-account';


import {LoginPage} from '../login/login';
import {AccountIndexPostPage} from '../account-index-post/account-index-post';
import {AccountIndexGetDetailsPage} from '../account-index-get-details/account-index-get-details';

import {account} from '../../providers/account/account'
@Component({
  selector: 'page-account-index-get',
  templateUrl: 'account-index-get.html',
})


export class AccountIndexGetPage{
/***********Comon************ */
  pageTitle:string;
  has_child_menu:number;
  menu_id:any;
  module_name:string;
  
/****************** */
  accounts:account[];
  submenus:any;
  curent_page:number = 1;
  total_page:number = 1;
  records:number=1;
  total_records:number=0;
/************ */


  constructor(private navCtrl: NavController, 
    private modalCtrl:ModalController,
    private navParams: NavParams,
    private globalLoginState:LoginStateProvider,
    private authKeyProvider:AuthKeyProvider, 
    private apiMenuProvider:ApiMenuProvider,
    private loadinControler:LoadingController, 
    private alertContol:AlertController,
    private actionSheetCtrl: ActionSheetController,

    private apiAcountProvider:ApiAccountProvider,
  ) 
  {
    
    this.pageTitle=navParams.data.pageTitle;
    this.has_child_menu = navParams.data.submenu.has_child;
    this.menu_id = navParams.data.submenu.id;
    this.module_name = navParams.data.module;
    
   

  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad AccountIndexGetPage');
    
    this.getAllAccounts();
    this.getMenus();
    
    
  }
  ionViewWillEnter()
  {
    //console.log('will enter');
    
  }
  doRefresh(refresher)
  {
    
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {"page":this.records+1,"records":this.records};
      //console.log(authkey);
      this.apiAcountProvider.getAccount(authkey,query).subscribe((val)=>{
        refresher.complete();
        let response:any  = val;
        if(!response.error){
         
          for(let account of response.result.accounts )
          {
           let new_result:account = {"id":account.id,
                                      "name":account.name,
                                      "email":account.email,
                                      "phone":account.phone,};
           this.accounts.unshift(new_result);
          }
         this.total_records = response.result.total_records;
          this.records =  this.records + response.result.records;
        }else{
          
          let alert=this.alertContol.create({
            title:"Error",
            message:response.errortext,
            buttons: ['Dismiss']
          })
          alert.present();
        }

        },(err)=>{
          refresher.complete();
          
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

  

  getAllAccounts()
  {
    let loader=this.loadinControler.create({
      content:"Loading..."
    });
    loader.present();
    this.authKeyProvider.getAuthKey().then(authkey=>{
      
      let query = {"page":this.curent_page,"records":this.records};
      //console.log(authkey);
      this.apiAcountProvider.getAccount(authkey,query).subscribe((val)=>{
        loader.dismiss();
        let response:any  = val;
        if(!response.error){
          this.accounts=response.result.accounts;
          this.total_records = response.result.total_records;
          this.records =  response.result.records;
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

  itemSelected(item:any)
  {
    this.navCtrl.push(AccountIndexGetDetailsPage,{
      name:item.name,
      id:item.id
    })
  }
  
  openNewAccountModal()
  {
    let newAccountModal =  this.modalCtrl.create(AccountIndexPostPage);
    newAccountModal.onDidDismiss(data => {
     console.log(data);
   });
   newAccountModal.present();
  }
  openModal()
  {
    /*let menuModal = this.modalCtrl.create(MenuModalPage, { parent_id:this.menu_id,module:this.module_name });
    menuModal.onDidDismiss(data => {
     console.log(data);
   });
   menuModal.present();*/

  }
  getMenus()
  {
    
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {module_name:this.module_name,parent_id:this.menu_id};
      //console.log(authkey);
      this.apiMenuProvider.getMenus(authkey,query).subscribe((val)=>{
        
        let response:any  = val;
        if(!response.error){
          this.submenus=response.result.menu_link;
         // console.log(this.submenus);
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

}
