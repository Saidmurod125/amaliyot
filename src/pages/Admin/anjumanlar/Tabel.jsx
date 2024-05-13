import React, { useState, useEffect } from "react";
import {
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  TablePagination,
  Box,
  TextField,
} from "@mui/material";
import FormDialog from "./Modal";
import useAxios from "../../../service/useAxios";
import Loader from "./../../../components/Loader";
import DetailsTabel from "./DetailsTabel";

export const MuiTable = () => {
  const { data, loading } = useAxios(
    "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference"
  );
  useEffect(() => {
    if (data) {
      setAnjumanlar(data);
    }
  }, [data]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [open, setOpen] = useState(false);
  const [editOrDelete, setEditOrDelete] = useState(false);
  const [selectedAnjuman, setSelectedAnjuman] = useState(null);
  const [anjumanlar, setAnjumanlar] = useState([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    if (anjumanlar.length > 0) {
      setSelected(anjumanlar[0]);
    }
  }, [anjumanlar]);

  const handleClickOpen = (e, data) => {
    setOpen(true);
    setEditOrDelete(e === "Add" ? false : true);
    setSelectedAnjuman(data);
  };

  const handleDeleteConfirm = (e, data) => {
    setSelectedAnjuman(data);
    setDeleteConfirmOpen(true);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleDeleteCancel = () => {
    setDeleteConfirmOpen(false);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    const filteredAnjumanlar = data.filter(
      (anjuman) =>
        anjuman.name.toLowerCase().includes(searchValue) ||
        anjuman.place.toLowerCase().includes(searchValue)
    );
    setAnjumanlar(filteredAnjumanlar);
  };

  return (
    <>
      <div className="container h-full mx-auto dark:bg-gray-900 dark:text-white ">
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          marginY="20px"
        >
          <TextField
            label="Search..."
            variant="standard"
            name="search"
            autoComplete="search"
            onChange={handleSearchChange}
          />

          <div className=" space-x-2">
            <Button
              color="primary"
              variant="contained"
              onClick={() => handleClickOpen("Add", null)}
            >
              Add
            </Button>
            <Button
              onClick={() => handleClickOpen("Edit", selected)}
              color="secondary"
              variant="contained"
              disabled={!selected}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDeleteConfirm("Delete", selected)}
              variant="contained"
              color="error"
              disabled={!selected}
            >
              Delete
            </Button>
          </div>
        </Box>
        <FormDialog
          open={open}
          deleteConfirmOpen={deleteConfirmOpen}
          editOrDelete={editOrDelete}
          editData={selectedAnjuman}
          setAnjumanlar={setAnjumanlar}
          setOpen={setOpen}
          anjumanlar={anjumanlar}
          setDeleteConfirmOpen={setDeleteConfirmOpen}
          handleDeleteCancel={handleDeleteCancel}
        />
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">Id</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Time</TableCell>
                <TableCell align="center">Place</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="cursor-pointer">
              {anjumanlar &&
                anjumanlar
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <TableRow
                      key={row.id}
                      onClick={() => setSelected(row)}
                      style={{
                        backgroundColor:
                          selected && selected.id === row.id
                            ? "lightblue"
                            : "transparent",
                      }}
                    >
                      <TableCell align="center">{row.id}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.date}</TableCell>
                      <TableCell align="center">{row.place}</TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4]}
          component="div"
          count={anjumanlar?.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
        {selected && <DetailsTabel id={selected.id} />}
      </div>
    </>
  );
};
