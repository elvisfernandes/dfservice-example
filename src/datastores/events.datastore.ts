import { Inject } from '@angular/core';
import { DFDataStore, DFService, DFResource } from 'ng2-dfservice';
import { EventModel } from './../models/event.model';

export class EventsDataStore extends DFDataStore {

    dfresource:DFResource = new DFResource('events', DFService.RESOURCE_TABLE, 'events');
    modelclass:any = EventModel;

    constructor( private dfs: DFService ) { 
        super(dfs);

        this.dfresource.params.include_count = true;
    }
}