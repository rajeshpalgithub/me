import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';



import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {LoginPage} from '../pages/login/login';
import {AccountIndexGetPage} from '../pages/account-index-get/account-index-get';
import {AccountIndexGetDetailsPage} from '../pages/account-index-get-details/account-index-get-details';
import {AccountIndexPutPage} from '../pages/account-index-put/account-index-put';
import {AccountIndexPostPage} from '../pages/account-index-post/account-index-post';
import {DashboardPage} from '../pages/dashboard/dashboard';
import {MenuModalPage} from '../pages/menu-modal/menu-modal';
import {UserIndexGetPage} from '../pages/user-index-get/user-index-get';
import {UserRoleIndexGetPage} from '../pages/user-role-index-get/user-role-index-get';
import {RoleEmployeeGetDetailsPage} from '../pages/role-employee-get-details/role-employee-get-details';
import {UserIndexPostPage} from '../pages/user-index-post/user-index-post'


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




import { ApiLoginProvider } from '../providers/api-login/api-login';
import { AuthKeyProvider } from '../providers/auth-key/auth-key';
import {LoginStateProvider} from '../providers/login-state/login-state';
import { ApiMenuProvider } from '../providers/api-menu/api-menu';
import { ApiAccountProvider } from '../providers/api-account/api-account';
import { ApiUserProvider } from '../providers/api-user/api-user';
import { UsersProvider } from '../providers/users/users';






@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    AccountIndexGetPage,
    AccountIndexGetDetailsPage,
    AccountIndexPutPage,
    MenuModalPage,
    AccountIndexPostPage,
    UserIndexGetPage,
    UserRoleIndexGetPage,
    RoleEmployeeGetDetailsPage,
    UserIndexPostPage,
   
  ],
 
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage,
    AccountIndexGetPage,
    AccountIndexGetDetailsPage,
    AccountIndexPutPage,
    MenuModalPage,
    AccountIndexPostPage,
    UserIndexGetPage,
    UserRoleIndexGetPage,
    RoleEmployeeGetDetailsPage,
    UserIndexPostPage,
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiLoginProvider,
    AuthKeyProvider,
    LoginStateProvider,
    ApiMenuProvider,
    ApiAccountProvider,
    ApiUserProvider,
    UsersProvider,
    
    
  ]
})
export class AppModule {}
