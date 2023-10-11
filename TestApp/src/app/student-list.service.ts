import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { employee } from './employee';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root' 
})
export class StudentListService {
  constructor(private _httpref : HttpClient) { }
  public _url = "./assets/data/emp.json";
getStudents(): Observable<employee[]>{
 return this._httpref.get<employee[]>(this._url).pipe(catchError(this.errorHandler));
}
errorHandler(error: HttpErrorResponse) {
  return throwError(error.message || "Server Error!");
}

}
