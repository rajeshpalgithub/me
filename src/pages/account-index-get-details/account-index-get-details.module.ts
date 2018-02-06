import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountIndexGetDetailsPage } from './account-index-get-details';

@NgModule({
  declarations: [
    AccountIndexGetDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountIndexGetDetailsPage),
  ],
})
export class AccountIndexGetDetailsPageModule {}
