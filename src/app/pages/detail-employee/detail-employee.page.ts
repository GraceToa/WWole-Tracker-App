import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
//providers
import {EmployeesService} from "../../../providers/employees.service";


@Component({
  selector: 'app-detail-employee',
  templateUrl: './detail-employee.page.html',
  styleUrls: ['./detail-employee.page.scss'],
})
export class DetailEmployeePage implements OnInit {

  item:any={};
  employee:any;

    constructor(public _es:EmployeesService, private navCtrl:NavController) {
      }

    ngOnInit() {
      for (let key in this._es.item) {
        this.employee = this._es.item[key];
      }
    }

    goBack(){
      this.navCtrl.pop();
    }

}
