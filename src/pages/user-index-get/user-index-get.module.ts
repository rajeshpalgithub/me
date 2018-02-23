import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserIndexGetPage } from './user-index-get';

@NgModule({
  declarations: [
    UserIndexGetPage,
  ],
  imports: [
    IonicPageModule.forChild(UserIndexGetPage),
  ],
})
export class UserIndexGetPagePageModule {}
