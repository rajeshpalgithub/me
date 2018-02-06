import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the RoleEmployeePostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-role-employee-post',
  templateUrl: 'role-employee-post.html',
})
export class RoleEmployeePostPage {

  constructor(private navCtrl: NavController, private navParams: NavParams,private viewCtrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RoleEmployeePostPage');
  }
  dismiss()
  {
    this.viewCtrl.dismiss();
  }
  newEmployee()
  {
    
  }

}
