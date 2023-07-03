import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {showAllCurrencies} from "./currenciesAction";
import {IStore} from "../../models/store";
import {ICurrency} from "../../models/currency";

const initialState: IStore = {
    loading: false,
    currenciesData: [],
    searchedCurrencies: [],
    searchValue: "",
    error: false,
    message: "",
    page: 1
}

export const currenciesSlice = createSlice({
    name: 'currencies',
    initialState: initialState,
    reducers: {
        searchCurrencies: (state, action: PayloadAction<string>) => {
            state.page = 1;
            state.searchValue = action.payload;
            if (!action.payload || action.payload === '')
                state.searchedCurrencies = state.currenciesData
            else
                state.searchedCurrencies = state.currenciesData.filter(currency => {
                    return currency.name.toLowerCase().includes(action.payload.toLowerCase()) ||
                        currency.symbol.toLowerCase().includes(action.payload.toLowerCase())
                })
        },
        changePage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(showAllCurrencies.pending, (state) => {
                state.loading = true;
            })
            .addCase(showAllCurrencies.fulfilled, (state, action) => {
                    state.loading = false;
                    state.currenciesData = action.payload;
                    state.searchedCurrencies = action.payload;
                }
            )
            .addCase(showAllCurrencies.rejected, (state, action) => {
                state.loading = false;
                state.error = true;
                state.message = action.payload as string;
                state.currenciesData = [];
                state.searchedCurrencies = [];
            })
    }
})

export const {searchCurrencies, changePage} = currenciesSlice.actions
export default currenciesSlice.reducer;