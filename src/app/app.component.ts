import { EventModel } from './../models/event.model';
import { EventsDataStore } from './../datastores/events.datastore';
import { Component, OnInit } from '@angular/core';
import { DFService, DFResource } from 'ng2-dfservice';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  newEvent:EventModel = new EventModel();

  constructor( private dfstore:EventsDataStore, private dfservice:DFService ) {
    this.newEvent.title = "New event title";
    this.newEvent.city = "New event city";
    this.newEvent.description = "New event description";
  }

  ngOnInit() {
    this.dfstore.loadInitialData();
  }

  reload() {
    this.dfstore.reload();
  }

  create() {
    this.dfstore.create( this.newEvent );
  }

  retrieveById() {
    this.dfstore.retrieve();
  }

  delete( id:number ) {
    this.dfstore.delete( this.dfstore.getById(id) );
  }

  update( event:EventModel ) {
    this.dfstore.update(event);
  }

  refresh( ) {
    this.dfstore.reload();
  }

  /*
  Login / logout functions
   */
  login( email:string, password:string ) {
    this.dfservice.login(email, password)
      .subscribe( (next) => {
        console.log(next);
      });
  }

  logout() {
    this.dfservice.logout();
  }
}
