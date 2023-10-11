import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HistorypageComponent } from './historypage/historypage.component';
import { HttpClientModule } from '@angular/common/http';
import { HistorydetailsService } from './historydetails.service';
import { HistorydetailsComponent } from './historydetails/historydetails.component';


@NgModule({
  declarations: [
    AppComponent,
    HistorypageComponent,
    HistorydetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HistorydetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
