import { RouterModule, Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, {
    path: '',
    component: AdminLayoutComponent,
    children: [
        {
      path: '',
      loadChildren: () => AdminLayoutModule,
     // loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    // component: AdminLayoutModule
  }]}
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    // { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
