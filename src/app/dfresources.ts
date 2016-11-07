import { DFResource, DFService, DFResourceListInterface } from 'ng2-dfservice';

export class DFResources implements DFResourceListInterface {

    public tables = {
        events: new DFResource('events', DFService.RESOURCE_TABLE, 'events')
    };

    public procs:any = {

    }

    public funcs:any = {

    }

    public schemas:any = {

    }
}