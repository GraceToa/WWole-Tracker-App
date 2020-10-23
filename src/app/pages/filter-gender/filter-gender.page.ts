import { Component, OnInit } from '@angular/core';
import {  NavController } from '@ionic/angular';
import {EmployeesService} from "../../../providers/employees.service";


@Component({
  selector: 'app-filter-gender',
  templateUrl: './filter-gender.page.html',
  styleUrls: ['./filter-gender.page.scss'],
})
export class FilterGenderPage implements OnInit {

  employeesFemale:any[] = [];
  employeesMale:any[] = [];
  type: string;

  constructor(public _es: EmployeesService, private navCtrl: NavController) {
    this.filterFemale();
    this.filterMale();
   }

  ngOnInit() {
    this.type = 'woman';
  }

  segmentChanged(ev: any) {
     console.log('Segment changed', ev);
   }

   filterFemale (){
     this.employeesFemale = this._es.employees.filter(function(v,i) {
           if(v.gender === 'F' ) {
               return true;
           } else false;
       });
   }

   filterMale (){
     this.employeesMale = this._es.employees.filter(function(v,i) {
           if(v.gender === 'M' ) {
               return true;
           } else false;
       });
   }

   //Go to View DetailEmployee
     goDetailEmployee(item){
       this._es.item = {item: item};
       this.navCtrl.navigateForward(`/detail-employee`);
     }
}
