import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController,ModalController,ActionSheetController  } from 'ionic-angular';

import {LoginStateProvider} from '../../providers/login-state/login-state';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {ApiMenuProvider} from '../../providers/api-menu/api-menu';

import {ApiUserProvider} from '../../providers/api-user/api-user';

import {LoginPage} from '../../pages/login/login';
import {RoleEmployeeGetDetailsPage} from '../../pages/role-employee-get-details/role-employee-get-details';
import {UserIndexPostPage} from '../../pages/user-index-post/user-index-post';

@IonicPage()
@Component({
  selector: 'page-user-index-get',
  templateUrl: 'user-index-get.html',
})
export class UserIndexGetPage {

  /***********Comon************ */
  pageTitle:string;
  has_child_menu:number;
  menu_id:any;
  module_name:string;
/****************** */
  submenus:any;
  employees:any;

  constructor(
    private navCtrl: NavController, 
    private modalCtrl:ModalController,
    private navParams: NavParams,
    private globalLoginState:LoginStateProvider,
    private authKeyProvider:AuthKeyProvider, 
    private apiMenuProvider:ApiMenuProvider,
    private loadinControler:LoadingController, 
    private alertContol:AlertController,
    private actionSheetCtrl: ActionSheetController,

    private apiUserProvider: ApiUserProvider
  ) {
    this.pageTitle=navParams.data.pageTitle;
    this.has_child_menu = navParams.data.submenu.has_child;
    this.menu_id = navParams.data.submenu.id;
    this.module_name = navParams.data.module;
  }

  ionViewDidLoad() {
    this.getAllEmployees();
    this.getMenus();
  }
  getAllEmployees()
  {
    let loader=this.loadinControler.create({
      content:"Loading..."
    });
    loader.present();
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {};
      //console.log(authkey);
      this.apiUserProvider.getEmployee(authkey,query).subscribe((val)=>{
        loader.dismiss();
        let response:any  = val;
        if(!response.error){
          this.employees=response.result.users;
          
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
  getMenus()
  {
    
    this.authKeyProvider.getAuthKey().then(authkey=>{
      let query = {module_name:this.module_name,parent_id:this.menu_id};
      //console.log(authkey);
      this.apiMenuProvider.getMenus(authkey,query).subscribe((val)=>{
        
        let response:any  = val;
        if(!response.error){
          this.submenus=response.result.menu_link;
          //console.log(this.submenus);
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

  itemSelected(employee:any)
  {
    this.navCtrl.push(RoleEmployeeGetDetailsPage,{
      
    })

  }
  openNewEmployeeModal()
  {
    let newEmployeeModal = this.modalCtrl.create(UserIndexPostPage);
    newEmployeeModal.onDidDismiss(data => {
      console.log(data);
    });
    newEmployeeModal.present();
  }
  openActionSheet(employee:any)
  {
    let actionSheet = this.actionSheetCtrl.create({
      title: employee.name,
      buttons: this.createButtons()
    });
    actionSheet.present();
  }
  createButtons() {
    let buttons = [];
    for (let submenu of this.submenus)
    {
      for (let item of submenu.method_list)
      {
        if(item.type !='POST' && item.menu_type !='main'){
          let button = {
            text: item.display_name,
            handler: () => {
              switch(item.type)
              {
                case 'GET':
                  //this.navCtrl.push();
                  console.log('push');
                break;
                case 'PUT':
                console.log('put');
                  this.modalCtrl.create({

                  })
                break;
                default :
                    // all delete case
                    console.log('delete');
                break;

              }
              return true;
            }
          }
          buttons.push(button);
        }
      }
    }
  
    return buttons;
  }
}
