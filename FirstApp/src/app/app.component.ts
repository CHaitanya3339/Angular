import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <h1>Homes</h1><hr>
    <input type="text" placeholder="Search Here">&nbsp;
    <button>Search</button>
    <section class="content">
      <app-home1></app-home1>
    </section>
  `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent]
})
export class AppComponent {
  title = 'FirstApp';
}