import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RoleIndexGetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-role-index-get',
  templateUrl: 'role-index-get.html',
})
export class RoleIndexGetPage {

  pageTitle:string;
  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.pageTitle = this.navParams.data.pageTitle;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoleIndexGetPage');
  }

}
