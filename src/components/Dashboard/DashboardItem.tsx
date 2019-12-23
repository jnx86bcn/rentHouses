import React, { useState, useEffect } from 'react';
import { House } from '../../models';


export function DashboardItem({item=new House()}): JSX.Element {

    return(
        <>
            <div className="dashboard-item">
                <img src={item.UrlPhoto}/>
                <div className="dashboard-item-panel">
                    <p className="dashboard-item-panel-price">{item.Price + " €"}</p>
                    <p className="dashboard-item-panel-city">{item.City}</p>
                </div>
                <div className="dashboard-item-info">
                    <p className="dashboard-item-info-center">{item.Name}</p>
                    <div className="dashboard-item-info-bottom">
                        <div className="dashboard-item-info-bottom-SQM">
                            <img src="https://png.pngtree.com/svg/20160421/square_meter_500969.png"/>
                            <p>{" "+item.SQM}</p>
                        </div>
                        <div className="dashboard-item-info-bottom-rooms">
                            <img src="https://img.icons8.com/ios-filled/50/000000/empty-bed.png"/>
                            <p>{" "+item.Rooms}</p>
                        </div>
                        <div className="dashboard-item-info-bottom-bathsrooms">
                            <img src="https://img.icons8.com/cotton/64/000000/shower-and-tub.png"/>
                            <p>{" "+item.Bathrooms}</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}