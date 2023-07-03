import {ICurrency} from "./currency";

export interface IStore {
    loading: boolean,
    currenciesData: ICurrency[],
    searchedCurrencies: ICurrency[],
    searchValue: string,
    error: boolean,
    message: string,
    page: number
}