import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, catchError} from 'rxjs/operators';

//providers
import  {URL_SERVICES} from "../config/url.services";

@Injectable({
  providedIn: 'root'
})

export class EmployeesService {

  employees:any[] = [];
  item:any={};

  constructor(protected httpClient: HttpClient) {
    this.get_all_employees();
  }

   get_all_employees(){
     let promise = new Promise((resolve)=>{
       this.httpClient.get(URL_SERVICES).pipe(map(res=>res),catchError(this.handleError))
           .subscribe((data:any)=>{
             console.log(data);
             if(data){
               this.employees.push(...data);
             }else{
               console.log("unsucessfully data")
             }
             resolve();
           })
       });
       return promise;
   }

   private handleError (error: Response | any) {
      let errMsg: string;
      if (error instanceof Response) {
        const err = error || '';
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
      } else {
        errMsg = error.message ? error.message : error.toString();
      }
      console.error(errMsg);
      return errMsg;
    }

}
