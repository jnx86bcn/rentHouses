export class DropdownFilter {
    value: number;
    label: string;

    constructor() {
        this.value = 0;
        this.label = '';
    }


    ///Prices
    public static getPricesValues(defaultLabel: string): DropdownFilter[] {

        var prices = new Array<DropdownFilter>();

        prices.push({ value: 0, label: defaultLabel });

        for (var actPrice = 30000; actPrice <= 400000; actPrice += 20000) {
            prices.push(DropdownFilter.toPrice(actPrice));
        }

        var nextValue = prices[prices.length - 1].value + 50000;
        for (var actPrice = nextValue; actPrice <= 1000000; actPrice += 50000) {
            prices.push(DropdownFilter.toPrice(actPrice));
        }

        prices.push({ value: Infinity, label: "Sin límite" });


        return prices;
    }

    private static toPrice(value: number): DropdownFilter {
        return { value: value, label: value.toLocaleString() }
    }


    ///Sizes
    public static getSizesValues(defaultLabel: string): DropdownFilter[] {

        var sizes = new Array<DropdownFilter>();

        sizes.push({ value: 0, label: defaultLabel });

        for (var actSize = 30; actSize <= 200; actSize += 20) {
            sizes.push(DropdownFilter.toSize(actSize));
        }

        var nextValue = sizes[sizes.length - 1].value + 50;
        for (var actSize = nextValue; actSize <= 900; actSize += 50) {
            sizes.push(DropdownFilter.toSize(actSize));
        }

        sizes.push({ value: Infinity, label: "Sin límite" });


        return sizes;
    }

    private static toSize(value: number): DropdownFilter {
        return { value: value, label: `${value} m2` };
    }


    ///Rooms
    public static getRoomsValues(): DropdownFilter[] {

        var rooms = new Array<DropdownFilter>();

        rooms.push({ value: 0, label: "Todos" });

        for (var actSize = 1; actSize <= 5; actSize++) {
            rooms.push(DropdownFilter.toRoom(actSize));
        }


        return rooms;
    }

    private static toRoom(value: number): DropdownFilter {
        return { value: value, label: `${value}+` };
    }
}
