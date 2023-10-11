import { TestBed } from '@angular/core/testing';

import { HistorydetailsService } from './historydetails.service';

describe('HistorydetailsService', () => {
  let service: HistorydetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistorydetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
