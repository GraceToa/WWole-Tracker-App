import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

import  {URL_SERVICES} from "../config/url.services";

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  employees:any[] = [];

  constructor(protected httpClient: HttpClient) {
    this.get_all_employees();
  }

 get_all_employees(){
   let promise = new Promise((resolve)=>{
     this.httpClient.get(URL_SERVICES).pipe(map(res=>res))
         .subscribe((data:any)=>{
           console.log(data);
           if(data){
             this.employees.push(...data);
           }else{
             
           }
           resolve();
         })
     });
     return promise;
 }
}
