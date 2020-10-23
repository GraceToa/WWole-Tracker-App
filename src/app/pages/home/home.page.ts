import { Component,ViewChild } from '@angular/core';
import { IonInfiniteScroll, NavController } from '@ionic/angular';
//providers
import {EmployeesService} from "../../../providers/employees.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data = [];
  descending: boolean = false;
  order: number;
  
  constructor(public _es: EmployeesService, private navCtrl: NavController) {
  }

//InfiniteScroll
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

//Go to View DetailEmployee
  goDetailEmployee(item){
    this._es.item = {item: item};
    this.navCtrl.navigateForward(`/detail-employee`);
  }



}
