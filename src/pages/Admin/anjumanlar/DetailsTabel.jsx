import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import useAxios from "../../../service/useAxios";

const SimpleTable = ({ id }) => {
  const [anjumanlar, setAnjumanlar] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const { data } = useAxios(
    `https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference/${id}`
  );

  useEffect(() => {
    if (data) {
      setAnjumanlar(data);
    }
  }, [data]);

  const handleClick = (row) => {
    setSelectedRow(row);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {anjumanlar && (
            <TableRow
              onClick={() => handleClick(anjumanlar)}
              style={{
                backgroundColor:
                  selectedRow && selectedRow.id === anjumanlar.id
                    ? "lightblue"
                    : "transparent",
              }}
            >
              <TableCell align="center">{anjumanlar.id}</TableCell>
              <TableCell align="center">{anjumanlar.name}</TableCell>
              <TableCell align="center">{anjumanlar.age}</TableCell>
              <TableCell align="center">{anjumanlar.email}</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
