import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const showAllCurrencies = createAsyncThunk(
    "currencies/showALl",
    async (_, thunkApi) => {
        try {
            const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
            return response.data;
        } catch (e: any) {
            const message = (e.response && e.response.data) || e.message;
            return thunkApi.rejectWithValue(message);
        }
    }
)