import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular8-table-search';
  public searchString: string;
  employees=[{
    "name":"John",
    "city":"Bengaluru"
  },
  {
    "name":"Ganesh",
    "city":"Bengaluru"
  },
  {
    "name":"Larry",
    "city":"Bengaluru"
  },
  {
    "name":"Rama",
    "city":"Bengaluru"
  },
  {
    "name":"Ravi",
    "city":"Bengaluru"
  },
  {
    "name":"Suresh",
    "city":"Bengaluru"
  },
  {
    "name":"Babu",
    "city":"Bengaluru"
  },{
    "name":"Ajay",
    "city":"Bengaluru"
  },
  {
    "name":"Deepak",
    "city":"Bengaluru"
  },
  {
    "name":"Prashanth",
    "city":"Bengaluru"
  },{
    "name":"Nikhil",
    "city":"Bengaluru"
  },
  {
    "name":"Sushma",
    "city":"Bengaluru"
  },
  {
    "name":"Sowmya",
    "city":"Bengaluru"
  }];
  
}
