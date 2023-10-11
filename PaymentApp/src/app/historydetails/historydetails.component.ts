import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HistorydetailsService } from '../historydetails.service';

@Component({
  selector: 'app-historydetails',
  templateUrl: './historydetails.component.html',
  styleUrls: ['./historydetails.component.css']
})
export class HistorydetailsComponent {
  transaction: any; 

  constructor(
    private route: ActivatedRoute,
    private historyService: HistorydetailsService
  ) {}


  
}
