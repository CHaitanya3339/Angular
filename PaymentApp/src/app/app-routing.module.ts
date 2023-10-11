import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorypageComponent } from './historypage/historypage.component';
import { HistorydetailsComponent } from './historydetails/historydetails.component';

const routes: Routes = [
  { path: '', redirectTo: '/historypage', pathMatch: 'full' },
  { path: 'historypage', component: HistorypageComponent },
  { path: 'transaction/:id', component: HistorydetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
