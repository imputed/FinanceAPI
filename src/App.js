import logo from './logo.svg';
import './App.css';
import axios from "axios";
import React, {useState, useEffect} from "react";
import Navbar from "./components/navigation/navbar";
import StockTable from "./components/stock/table";
import {Button} from "@mui/material";
import {render} from "react-dom";
import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import {Grid} from "@mui/material";
import Sum from "./components/stock/sum";

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
    const [sum, setSum] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        GetStock().then((result) => {
            setStock(result)
            let aggregate = 0;
            result.forEach(stock => aggregate += (stock.price * stock.quantity))
            setSum(aggregate.toFixed(2))
        });
    });

    let PostStock = async function () {
        const stocks = [{"name": "Siemens", "symbol": "SIE.DE", "quantity": 50, "institute":"Cortal Consors"}, {
            "name": "BMW", "symbol": "BMW.DE", "quantity": 60, "institute":"Cortal Consors"
        }, {"name": "Allianz SE", "symbol": "ALV.DE", "quantity": 10, "institute":"Cortal Consors"}, {
            "name": "AT & T Inc.", "symbol": "T", "quantity": 80, "institute":"Cortal Consors"
        }, {"name": "BASF", "symbol": "BAS.DE", "quantity": 4.78775, "institute":"Ing Diba"}, {
            "name": "DAIICHI SANKYO", "symbol": "DSNKY", "quantity": 90, "institute":"Ing Diba"
        }, {"name": "DAIMLER TRUCK", "symbol": "DTG.F", "quantity": 12.50, "institute":"Ing Diba"}, {
            "name": "MERCEDES-BENZ", "symbol": "DDAIF", "quantity": 50, "institute":"Ing Diba"
        }, {"name": "MUENCH.RUECK", "symbol": "MUV2.DE", "quantity": 11, "institute":"Ing Diba"}, {
            "name": "SAP", "symbol": "SAP.DE", "quantity": 20, "institute":"Ing Diba"
        }, {"name": "World Healthscience Fund", "symbol": "ERDU.SG", "quantity": 20, "institute":"Ing Diba"}, {
            "name": "HSBC MSCI WORLD", "symbol": "H4ZJ.DE", "quantity": 203.81289, "institute":"Ing Diba"
        }, {"name": "INVESCOM3 NASDAQ-100 A", "symbol": "EQQQ.DU", "quantity": 17, "institute":"Ing Diba"}, {
            "name": "BAUER AG", "symbol": "B5A.DE", "quantity": 50, "institute":"Ing Diba"
        }, {"name": "iShares STOXX Europe 600 Health Care", "symbol": "EXV4.DE", "quantity": 10, "institute":"Ing Diba"}, {
            "name": "IS.S.GL.SE.D.100 U.ETF A.", "symbol": "ISPA.F", "quantity": 50, "institute":"Ing Diba"
        }, {"name": "L.GE.MI.-CA.MDAX UETF D", "symbol": "MD4X.DU", "quantity": 15, "institute":"Ing Diba"}, {
            "name": "LI-L.S.E.S.D30 EOD", "symbol": "SELD.MU", "quantity": 65, "institute":"Ing Diba"
        }, {"name": "LYX.MSCI WORLD U.ETF D", "symbol": "LYYA.DE", "quantity": 10, "institute":"Ing Diba"}, {
            "name": "SPDR S+P P.AS.DIV.ARI.ETF", "symbol": "ZPRA.DE", "quantity": 25 , "institute":"Ing Diba"
        }, {"name": "XTR.MSCI EMU 1D", "symbol": "XD5E.DE", "quantity": 30, "institute":"Ing Diba"}, {
            "name": "XTR.NIKKEI 225 1D", "symbol": "XDJP.DE", "quantity": 50, "institute":"Ing Diba"
        },{"name": "Amundi Index MSCI Emerging Markets", "symbol": "AEMD.F", "quantity": 109.49246, "institute":"Cortal Consors"}, {
            "name": "Bayer Aktiengesellschaft", "symbol": "BAYN.DE", "quantity": 10, "institute":"Cortal Consors"
        }, {"name": "Deutsche Telekom AG", "symbol": "DTE.DE", "quantity": 100, "institute":"Cortal Consors"}, {
            "name": "HSBC MSCI Canada UCITS ETF", "symbol": "H4ZR.DE", "quantity": 80, "institute":"Cortal Consors"
        }, {"name": "iShares Dow Jones U.S. Select Dividend UCITS ETF", "symbol": "EXX5.DE", "quantity": 24.98417	, "institute":"Cortal Consors"}, {
            "name": "Microsoft Corporation", "symbol": "MSFT", "quantity": 43.82367	, "institute":"Cortal Consors"
        }, {"name": "SIEMENS HEALTHINEERS AG", "symbol": "SHL.DE", "quantity": 20, "institute":"Cortal Consors"}, {
            "name": "xtrackers - DAX Income UCITS ETF", "symbol": "XDDX.DE", "quantity": 66.9045, "institute":"Cortal Consors"
        }];
        await axios.post(baseurl + 'stock', stocks)
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
                <Route path="/" element={<>
                    <Grid container>

                        <Navbar/>

                    </Grid>
                    <Grid container justifyContent={"space-around"}>
                        <Grid item>
                            <StockTable stock={stock}/>
                        </Grid>
                        <Grid item>
                            <Sum sum={sum}/>
                        </Grid>
                    </Grid>
                    <Button onClick={PostStock}>Click</Button>
                </>}/>
            </Routes>
        </BrowserRouter>);
}

export default App;
