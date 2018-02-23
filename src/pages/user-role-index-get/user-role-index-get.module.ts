import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserRoleIndexGetPage } from './user-role-index-get';

@NgModule({
  declarations: [
    UserRoleIndexGetPage,
  ],
  imports: [
    IonicPageModule.forChild(UserRoleIndexGetPage),
  ],
})
export class RoleIndexGetPageModule {}
