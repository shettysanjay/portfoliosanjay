import React from "react";
import {
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table,
  Paper,
} from "@mui/material";
import "./coins.css";

function Coins({ coinsList, searchInput }) {
  const newCoinsList = coinsList.filter((coin) => {
    return coin.name.toLowerCase().includes(searchInput.toLowerCase());
  });
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead className="coins_head">
            <TableRow>
              <TableCell>Coin Name</TableCell>
              <TableCell align="right">Symbol</TableCell>
              <TableCell align="right">MarketCap</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Icon</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="coins_body">
            {newCoinsList.map((coin) => (
              <TableRow
                key={coin.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {coin.name}
                </TableCell>
                <TableCell align="right">{coin.symbol}</TableCell>
                <TableCell align="right">{coin.marketCap}</TableCell>
                <TableCell align="right">{coin.price}</TableCell>
                <TableCell align="right">
                  <img src={coin.icon} height="30px" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Coins;
