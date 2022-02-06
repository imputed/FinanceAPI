import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Typography} from "@mui/material";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

export default function StockTable(props) {
    let ConvertToRow = function (stock) {
        return <TableRow
            key={stock.name}
            sx={{'&:last-child td, &:last-child th': {border: 0}}}
        >
            <TableCell align="center">{stock.name}</TableCell>
            <TableCell align="right">{Number(stock.price).toFixed(2).toString()+ " €"}</TableCell>
            <TableCell align="right">{Number(stock.quantity).toFixed(2)}</TableCell>
            <TableCell align="right">{Number(stock.price * stock.quantity).toFixed(2).toString()+ " €"}</TableCell>
            <TableCell align="right">{stock.institute}</TableCell>

        </TableRow>
    }

    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="stocktable">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Total</TableCell>
                            <TableCell align="right">Institut</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.stock.map((s) => {
                            return ConvertToRow(s)
                        })}

                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}