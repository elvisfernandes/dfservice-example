import { Inject } from '@angular/core';
import { DFDataStore, DFService, DFResource } from 'ng2-dfservice';

export class EventsDataStore extends DFDataStore {

    dfresource:DFResource = new DFResource('events', DFService.RESOURCE_TABLE, 'events');

    constructor( private dfs: DFService ) { super(dfs); }
}