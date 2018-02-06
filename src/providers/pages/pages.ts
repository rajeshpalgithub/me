import {AccountIndexGetPage} from '../../pages/account-index-get/account-index-get';
import {RoleEmployeeGetPage} from '../../pages/role-employee-get/role-employee-get';
import {RoleIndexGetPage} from '../../pages/role-index-get/role-index-get';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}
export const pages: any = [
 /* { title: 'Tab 1', name: 'TabsPage', component: TabsPage, tabComponent: Tab1Page, index: 0, icon: 'home' },
  { title: 'Tab 2', name: 'TabsPage', component: TabsPage, tabComponent: Tab2Page, index: 1, icon: 'contacts' },*/
  { title: 'Accounts', name: 'AccountIndexGet', component: AccountIndexGetPage },
  { title: 'Employees', name: 'RoleEmployeeGet', component: RoleEmployeeGetPage },
  { title: 'Roles', name: 'RoleIndexGet', component: RoleIndexGetPage },
];