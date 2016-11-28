import { DFModel } from 'ng2-dfservice';

export class EventModel extends DFModel {

    // Object's properties
    id:number;
    title:string = '';
    city:string = '';
    description:string = '';

    fromJSON( jsonmodel:any ):void {
        this.id = jsonmodel.id;
        this.title = jsonmodel.title;
        this.city = jsonmodel.city;
        this.description = jsonmodel.description;
    }

    toJSON():any {
        let jsonmodel = {
            id: this.id,
            title: this.title,
            city: this.city,
            description: this.description
        };

        return jsonmodel;
    }

    factory():EventModel {
        return new EventModel();
    }
}