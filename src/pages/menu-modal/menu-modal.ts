import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController,AlertController } from 'ionic-angular';

/**
 * Generated class for the MenuModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
import {LoginStateProvider} from '../../providers/login-state/login-state';
import {AuthKeyProvider} from '../../providers/auth-key/auth-key';
import {ApiMenuProvider} from '../../providers/api-menu/api-menu';

import {LoginPage} from '../login/login';
@IonicPage()
@Component({
  selector: 'page-menu-modal',
  templateUrl: 'menu-modal.html',
})
export class MenuModalPage {

  submenus:any;
  module:string;
  parent_id:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private globalLoginState:LoginStateProvider,
    private authKeyProvider:AuthKeyProvider, 
    private apiMenuProvider:ApiMenuProvider,
    private loadinControler:LoadingController, 
    private alertContol:AlertController,
    private viewCtrl: ViewController) {

      console.log(this.navParams.data);
      this.module = this.navParams.data.module;
      this.parent_id = this.navParams.data.parent_id;
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad MenuModalPage');
    
  }

  dismiss()
  {
    //let data = { 'foo': 'bar' };
    this.viewCtrl.dismiss(this.submenus);
  }
  
}
