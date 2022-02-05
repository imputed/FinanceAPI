import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import Navbar from "./components/navigation/navbar";
import StockTable from "./components/stock/table";
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

let baseurl = "";
if (process.env.NODE_ENV === "development") {
    baseurl = "http://localhost:3000/";
} else if (process.env.NODE_ENV === "production") {
    baseurl = "https://finacare1991.azurewebsites.net";
}


async function GetStock() {
    let result = await axios.get(baseurl + 'stock')
    return (result.data)

}

function App() {
    const [stock, setStock] = useState([]);
    const [navigation, setNavigation] = useState("HOME");

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        GetStock().then((result) => {
            setStock(result)
        });
    });


    let PostStock = async function () {
        const stocks = [{"name": "Siemens", "symbol": "SIE.DE", "quantity": 50}, {
            "name": "BMW",
            "symbol": "BMW.DE",
            "quantity": 60
        },
            {"name": "Allianz SE", "symbol": "ALV.DE", "quantity": 10,}, {
                "name": "AT & T Inc.",
                "symbol": "T",
                "quantity": 80
            }];
        await axios.post(baseurl + 'stock',
            stocks
        )
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="stock" element={
                    <>
                    <Navbar/>
                    <StockTable stock={stock}/>
                    </>}/>
            </Routes>

        </BrowserRouter>

    );
}

export default App;
