import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from "./pages/home/Home";
import CurrencyDetails from "./pages/currencyDetails/CurrencyDetails";
import Header from "./components/header/header";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Header/>}>
                    <Route index element={<Home/>}/>
                    <Route path="/:currencyId" element={<CurrencyDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
