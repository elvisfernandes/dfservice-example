import { EventsDataStore } from '../datastores/events.datastore';
import { DFService } from 'ng2-dfservice';

export const APP_DATASTORES_PROVIDERS = [
    { provide: EventsDataStore, useClass: EventsDataStore, deps: [DFService] }
];