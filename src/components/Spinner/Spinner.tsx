import React from 'react';
import useStore from 'global-hook-store';
import { stateStore } from '../../globalStore';

export function Spinner(): JSX.Element {

    const { state } = useStore(stateStore);

    return (
        <>
            {state.showLoading ?
                <div className="spinner">
                    <div className="eye" />
                </div>
                :
                null
            }
        </>
    )

}