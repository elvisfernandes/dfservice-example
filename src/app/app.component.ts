import { Component } from '@angular/core';

import { DFService, DFResource } from 'ng2-dfservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listEvents = [];

  constructor( private dfservice:DFService ) {
    this.dfservice.get( this.dfservice.tables.events )
      .forEach( next => {
        this.listEvents = next.json().resource;
      });
  }
}
