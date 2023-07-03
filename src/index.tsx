import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import {store} from './app/store';
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from '@mui/material/styles';
import "./App.css";


const theme = createTheme({
    typography: {
        fontFamily: 'Lato'
    },
    palette: {
        secondary: {
            main: "#f7c22f"
        },
    },
});

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <App/>
                </ThemeProvider>
        </Provider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
