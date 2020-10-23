import { Component, OnInit } from '@angular/core';
//providers
import {EmployeesService} from "../../../providers/employees.service";

import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  employees:any[] = [];
  textSearch = "";

  constructor(public _es: EmployeesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.employees = this._es.employees;
  }

  searchEmployee( event){
    this.textSearch = event.detail.value;
  }

  //Go to View DetailEmployee
    goDetailEmployee(item){
      this._es.item = {item: item};
      this.navCtrl.navigateForward(`/detail-employee`);
    }


}
