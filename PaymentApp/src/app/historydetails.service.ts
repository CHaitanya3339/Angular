import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transaction } from './transaction';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HistorydetailsService {
  urlofdata = './assets/data/transactions.json';
  constructor(private _http : HttpClient) { }

  getTransactions(): Observable<Transaction[]> {
    return this._http.get<Transaction[]>(this.urlofdata).pipe(
      catchError((error: any) => {
        console.error('Error fetching transactions:', error);
       
        return [];
      })
    );
  }
  getTransactionById(transactionId: string): Observable<any> {
    const transactionUrl = `${this.urlofdata}/${transactionId}`;
    return this._http.get<any>(transactionUrl);
  }

 
  
  
  
  
  
  
}
