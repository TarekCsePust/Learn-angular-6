import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { IEmployee } from './employee';
import { Observable } from '../../node_modules/rxjs';
import { throwError  } from 'rxjs';
import { catchError } from '../../node_modules/rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url:string = "/assets/data/employee.json"
 // private _url:string = "http://localhost:8000/api/"
 

  constructor(private http:HttpClient) { }
  getEmployees():Observable<IEmployee[]>
  {
    return this.http.get<IEmployee[]>(this._url).pipe(catchError(this.errorHandler));
  }

  errorHandler(error:HttpErrorResponse){
      return throwError(error.message || "Server problem");
  }

 
}
