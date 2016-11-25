import { DFDataStore, DFService } from 'ng2-dfservice';

export class EventsDataStore extends DFDataStore {
    
    constructor( private dfs: DFService ) {
        super(dfs);
    }
}