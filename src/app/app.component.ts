import { EventsDataStore } from './../datastores/events.datastore';
import { Component, OnInit } from '@angular/core';
import { DFService, DFResource } from 'ng2-dfservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor( private dfstore:EventsDataStore ) {}

  ngOnInit() {
    this.dfstore.loadInitialData();
  }
}
