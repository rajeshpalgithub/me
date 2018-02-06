import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController } from 'ionic-angular';

/**
 * Generated class for the AccountIndexPostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-index-post',
  templateUrl: 'account-index-post.html',
})
export class AccountIndexPostPage {

  constructor(public navCtrl: NavController,
    private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountIndexPostPage');
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  newAccount()
  {

  }
}
