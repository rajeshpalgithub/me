import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountIndexPostPage } from './account-index-post';

@NgModule({
  declarations: [
    AccountIndexPostPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountIndexPostPage),
  ],
})
export class AccountIndexPostPageModule {}
