import React from 'react';
import { SearchBar, Filters } from '../Search';
import { Dashboard } from '../Dashboard';
import useStore from "global-hook-store";
import { stateStore } from '../../globalStore/globalStore';
import { Spinner } from '../Spinner';

export function App(): JSX.Element {

  const { state } = useStore(stateStore);

  return (
    <>
      <Spinner/>
      <SearchBar />
      <div className="filter_dashboard">
        { state.showFilters ? <Filters />:null }
        <Dashboard items={state.houses} />
      </div>
    </>
  )

}