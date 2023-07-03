import { configureStore } from '@reduxjs/toolkit';
import currenciesReducer from "../features/currencies/currenciesSlice";

export const store = configureStore({
    reducer: {
        currency: currenciesReducer
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch