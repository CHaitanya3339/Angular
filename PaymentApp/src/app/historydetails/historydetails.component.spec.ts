import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorydetailsComponent } from './historydetails.component';

describe('HistorydetailsComponent', () => {
  let component: HistorydetailsComponent;
  let fixture: ComponentFixture<HistorydetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HistorydetailsComponent]
    });
    fixture = TestBed.createComponent(HistorydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
