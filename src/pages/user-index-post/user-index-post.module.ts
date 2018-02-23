import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserIndexPostPage } from './user-index-post';

@NgModule({
  declarations: [
    UserIndexPostPage,
  ],
  imports: [
    IonicPageModule.forChild(UserIndexPostPage),
  ],
})
export class UserIndexPostPageModule {}
