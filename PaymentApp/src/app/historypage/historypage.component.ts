import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HistorydetailsService } from '../historydetails.service';

@Component({
  selector: 'app-historypage',
  templateUrl: './historypage.component.html',
  styleUrls: ['./historypage.component.css']
})
export class HistorypageComponent {
  transactions: any[] = [];

  constructor(private _historyservice: HistorydetailsService, private router: Router) {}

  ngOnInit() {
    this._historyservice.getTransactions().subscribe(data => {
      this.transactions = data;
    });
  }

  showTransactionDetails(transaction: any) {
    const transactionId = transaction.id;
    this.router.navigate(['transaction', transactionId]);
  }
}
