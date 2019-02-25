import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import {
  AgmCoreModule
} from '@agm/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentsModule } from './components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NgModule } from '@angular/core';
import { NotificationsComponent } from './notifications/notifications.component';
import { RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
