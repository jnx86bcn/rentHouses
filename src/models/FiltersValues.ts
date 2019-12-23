export class FiltersValues {
    priceMin: number;
    priceMax: number;
    sizeMin: number;
    sizeMax: number;
    minRoom: number;
    city: string;

    constructor() {
        this.priceMin = 0;
        this.priceMax = 0;
        this.sizeMin = 0;
        this.sizeMax = 0;
        this.minRoom = 0;
        this.city = "";
    }
}
