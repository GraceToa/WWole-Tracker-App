import { Component, ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
import {EmployeesService} from "../../providers/employees.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page  {
@ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = [];
  user: any = {};
  limit = 10;

  constructor(public _es: EmployeesService, private navCtrl: NavController) {}

  loadData(event){
      this._es.get_all_employees().then(()=>{
         setTimeout(() => {
         console.log('Begin asyn operation');
         event.target.complete();
         // App logic to determine if all data is loaded
         // and disable the infinite scroll
             if (this.data.length == 1000) {
               event.target.disabled = true;
             }
           }, 500);
        })
  }

}
