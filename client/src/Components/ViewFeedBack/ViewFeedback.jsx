import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Port } from '../../Port';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';



const rows = []


export default function ViewFeedback() {
  const [data, setData] = useState([])


  useEffect(() => {

    axios.get(`${Port}/api/feedback/feedbackview`).then((res) => {
      setData(res.data)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  console.log(data);

  return (
    <div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Visit</TableCell>
              <TableCell align="right">Food </TableCell>
              <TableCell align="right"> Service</TableCell>
              <TableCell align="right"> experince</TableCell>
              <TableCell align="right">recommend</TableCell>
              <TableCell align="right">suggestion</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.visit}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.visit}
                </TableCell>
                <TableCell align="right">{row.food}</TableCell>
                <TableCell align="right">{row.service}</TableCell>
                <TableCell align="right">{row.experince}</TableCell>
                <TableCell align="right">{row.recommend}</TableCell>
                <TableCell align="right">{row.suggestion}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </TableContainer>
      <Link to="/">Back</Link>
    </div>

  );
}