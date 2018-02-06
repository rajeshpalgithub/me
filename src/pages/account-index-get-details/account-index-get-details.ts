import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountIndexGetDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-index-get-details',
  templateUrl: 'account-index-get-details.html',
})
export class AccountIndexGetDetailsPage {

  pageTitle:string;
  accountId:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.pageTitle = this.navParams.data.name;
    this.accountId = this.navParams.data.id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountIndexGetDetailsPage');
  }

}
