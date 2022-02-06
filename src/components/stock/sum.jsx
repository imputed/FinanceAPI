import React, {useState, useEffect} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Card, CardContent, Typography} from "@mui/material";
import {calculateNewValue} from "@testing-library/user-event/dist/utils";

export default function Sum(props) {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography component={"h3"}>
                        Sum: {props.sum}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}