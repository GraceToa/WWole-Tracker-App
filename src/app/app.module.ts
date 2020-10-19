import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonInfiniteScroll,IonVirtualScroll,AlertController } from '@ionic/angular';
//HttpClient
import {HttpClientModule} from "@angular/common/http";
//services
import {EmployeesService} from "../providers/employees.service";

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule, AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    EmployeesService,
     IonInfiniteScroll,
    IonVirtualScroll,
    AlertController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
