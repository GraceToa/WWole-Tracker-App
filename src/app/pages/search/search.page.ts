import { Component, OnInit } from '@angular/core';
//providers
import {EmployeesService} from "../../../providers/employees.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  constructor(public _es: EmployeesService,) { }

  ngOnInit() {
  }

}
