import jsonHouse from '../resources/Houses.json';

import { House } from '../models';
import { FiltersValues } from '../models/FiltersValues';

//DEV//
export function getAllHouses_DEV(): Promise<House[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            let data: House[] = jsonHouse;
            resolve(data);
        }, 3000);
    });

}

export function getHousesByCity_DEV(city: string): Promise<House[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            let data: any = jsonHouse;
            resolve(data.filter((house: House) => { return house.City == city }));
        }, 3000);
    });

}

export function getFilterHouses_DEV(filters: FiltersValues): Promise<House[]> {

    return new Promise((resolve) => {
        setTimeout(() => {
            let data: any = jsonHouse;
            resolve(data.filter((house: House) => {
                return (
                    (house.Price >= filters.priceMin && (house.Price <= filters.priceMax || filters.priceMax == 0)) &&
                    (house.SQM >= filters.sizeMin && (house.SQM <= filters.sizeMax || filters.sizeMax == 0)) &&
                    house.Rooms >= filters.minRoom &&
                    (house.City == filters.city || filters.city == "")
                )
            }));
        }, 3000);
    });

}

//PRO//
export function getAllHouses_PRO(): Promise<Array<House[]>> {

    return new Promise<any>((resolve,reject)=>{

        let url = "http://webserverapi.azurewebsites.net/service.svc/GetAllHouses";

        fetch(url,{

                method: 'GET',
                headers: {'Accept': 'application/json; odata=verbose','Content-type': 'application/json'}

            }).then(Response => Response.json()).then((data: any) => {
                resolve(data.GetAllHousesResult);
            }).catch(err => {
                reject(err);
        });

    });

}

export function getHousesByCity_PRO(city: string): Promise<House[]> {

    return new Promise<any>((resolve,reject)=>{

        let url = "http://webserverapi.azurewebsites.net/service.svc/GetHousesByCity";

        fetch(url,{
                method: 'POST',
                headers: {'Accept': 'application/json; odata=verbose','Content-type': 'application/json'},
                body: JSON.stringify({
                    "city":city
                })
            }).then(Response => Response.json()).then((data: any) => {
                resolve(data.GetHousesByCityResult);
            }).catch(err => {
                reject(err);
        });

    });

}

export function getFilterHouses_PRO(filters: FiltersValues): Promise<House[]> {

    return new Promise<any>((resolve,reject)=>{

        let url = "http://webserverapi.azurewebsites.net/service.svc/GetFilterHouses";

        fetch(url,{
                method: 'POST',
                headers: {'Accept': 'application/json; odata=verbose','Content-type': 'application/json'},
                body: JSON.stringify({jsonFilter:JSON.stringify(filters)})
            }).then(Response => Response.json()).then((data: any) => {
                resolve(data.GetFilterHousesResult);
            }).catch(err => {
                reject(err);
        });

    });

}