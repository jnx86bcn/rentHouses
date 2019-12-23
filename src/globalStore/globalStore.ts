import { createStore } from "global-hook-store";
import { House } from "../models";

export const stateStore = createStore(
  {
    houses: new Array<House>(),
    city: "",
    showDashboard: false,
    showFilters: false,
    showLoading: false,
    isPRO: false
  },
  {
    passModelHouses: (_state, newHouses: House[]) => {
      _state.houses = newHouses;
      _state.showLoading == true ? _state.showLoading = false : _state.showLoading = true; 
      return _state;
    },
    setCity: (_state, newCity: string) => {
      _state.city = newCity;
      return _state;
    },
    setShowFilters: (_state, newShowFilters: boolean) => {
      _state.showFilters = newShowFilters;
      return _state;
    },
    setShowDashboard: (_state, newShowDashboard: boolean) => {
        _state.showDashboard = newShowDashboard;
        return _state;
    },
    setIsPro: (_state, newSetIsPro: boolean) => {
      _state.isPRO = newSetIsPro;
      return _state;
  }
  }
);