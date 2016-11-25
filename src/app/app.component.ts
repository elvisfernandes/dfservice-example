import { EventsDataStore } from './../datastores/events.datastore';
import { Component } from '@angular/core';
import { DFService, DFResource } from 'ng2-dfservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listEvents = [];
  txt = '';
  private dfstore:EventsDataStore;

  constructor( private dfservice:DFService ) {
    this.dfstore = new EventsDataStore(this.dfservice);
    this.dfstore.items.subscribe( (next) => {
      console.log(next);
    });
  }

  testecarregar() {
    this.dfstore.load();
  }
}
