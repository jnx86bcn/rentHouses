import React from 'react';
import { DropdownFilter } from '../../models/DropdownFilter';
import { FiltersValues } from '../../models/FiltersValues';
import useStore from 'global-hook-store';
import { stateStore } from '../../globalStore';
import { getFilterHouses_DEV, getFilterHouses_PRO } from '../../services';
import { House } from '../../models';

export function Filters(): JSX.Element {

    const { state, actions } = useStore(stateStore);

    const idDdlPricesMin = "ddlPricesMin";
    const idDdlPricesMax = "ddlPricesMax";
    const idDdlSizesMin = "ddlSizesMin";
    const idDdlSizesMax = "ddlSizesMax";
    const idDdlRooms = "ddlRooms";
    
    const pricesMin = getMappedOptions(idDdlPricesMin, DropdownFilter.getPricesValues("Precio mínimo"));
    const pricesMax = getMappedOptions(idDdlPricesMax, DropdownFilter.getPricesValues("Precio máximo"));
    const sizesMin = getMappedOptions(idDdlSizesMin, DropdownFilter.getSizesValues("Tamaño mínimo"));
    const sizesMax = getMappedOptions(idDdlSizesMax, DropdownFilter.getSizesValues("Tamaño máximo"));
    const rooms = getMappedOptions(idDdlRooms, DropdownFilter.getRoomsValues());


    function getMappedOptions(idSelector: string, values: DropdownFilter[]): JSX.Element {
        const mappedOptions = values.map((ddlValue, index) => { return <option value={ddlValue.value} key={index}>{ddlValue.label}</option> });
        return (<select id={idSelector}>{mappedOptions}</select>);
    }

    function getDdlSelectedValue(idSelector: string): number {
        const e = (document.getElementById(idSelector)) as HTMLSelectElement;
        const selected = +e.options[e.selectedIndex].value;

        return selected;
    }

    function saveFilters() {

        const priceMin = getDdlSelectedValue(idDdlPricesMin);
        const priceMax = getDdlSelectedValue(idDdlPricesMax);
        const sizeMin = getDdlSelectedValue(idDdlSizesMin);
        const sizeMax = getDdlSelectedValue(idDdlSizesMax);
        const room = getDdlSelectedValue(idDdlRooms);

        const filters: FiltersValues = {
            priceMin: priceMin,
            priceMax: priceMax,
            sizeMin: sizeMin,
            sizeMax: sizeMax,
            minRoom: room,
            city: state.city
        }

        actions.passModelHouses([]);
        if(state.isPRO){
            getFilterHouses_PRO(filters).then((houses: House[]) => {
                actions.passModelHouses(houses);
            })
        }
        else{
            getFilterHouses_DEV(filters).then((houses: House[]) => {
                actions.passModelHouses(houses);
            })
        }
    }



    return (
        <>
            <div className="filterPanel">
                <div className = "filterPanelItem">
                    <span className="title">PRECIO</span>
                    <div className="selectors">
                        {pricesMin}  {pricesMax}
                    </div>
                </div>
                <div className = "filterPanelItem">
                    <span className="title">TAMAÑO</span>
                    <div className="selectors">
                        {sizesMin}   {sizesMax}
                    </div>
                </div>
                <div className = "filterPanelItem">
                    <span className = "title">HABITACIONES</span>
                    <div className="selectors">
                        {rooms}
                    </div>
                </div>
                <button onClick={() => saveFilters()}>Ver inmuebles</button>
            </div>
        </>
    )

}