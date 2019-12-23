import React from 'react';
import { House } from '../../models';
import { DashboardItem } from './DashboardItem';


export function Dashboard({ items = new Array<House>() }): JSX.Element {

    return (
        <>
        {items.length > 0 ?
            <div className="dashboard">
                {items.map((house, index) => { return <DashboardItem item={house} key={index} /> })}
            </div>
            :
            null
        }
        </>
    )

}