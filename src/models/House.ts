export class House {
    City: string;
    Price: number;
    Name: string;
    SQM: number;
    Rooms: number;
    Bathrooms: number;
    UrlPhoto: string;

    constructor() {
        this.City = '',
        this.Price = 0,
        this.Name = '',
        this.SQM = 0,
        this.Rooms = 0,
        this.Bathrooms = 0
        this.UrlPhoto = ''
    }
}
