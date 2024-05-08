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
import Loader from './../../../components/Loader';

export const MuiTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [open, setOpen] = useState(false);
  const [editOrDelete, setEditOrDelete] = useState(false);
  const [selectedAnjuman, setSelectedAnjuman] = useState(null);
  const [anjumanlar, setAnjumanlar] = useState([]);
  const [deleteConfirmOpen, setDeleteConfirmOpen] = useState(false);

  const { data, loading } = useAxios(
    "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference"
  );
 
  useEffect(() => {
    if (data) {
      setAnjumanlar(data);
    }
  }, [data]);

  const handleClickOpen = (e, data) => {
    setOpen(true);
    setEditOrDelete(e === "Add" ? false : true);
    setSelectedAnjuman(data);
  };

  const handleDeleteConfirm = (e) => {
    setSelectedAnjuman(e);
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

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <div className="container h-full mx-auto dark:bg-gray-900 dark:text-white ">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
           
            <TextField
            label="Email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      
            
            
            className="block px-2 text-gray-900 bg-white border-2 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6"
            />
            
            <button
            className="flex  h-[50px] justify-center rounded-md bg-indigo-900 px-4 py-1.2 pt-3  text-lg font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 m-4"
            
              variant="contained"
              onClick={() => handleClickOpen("Add", null)}
            >
              Add
            </button>
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
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {anjumanlar &&
                  anjumanlar
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
                      <TableRow key={row.id}>
                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.date}</TableCell>
                        <TableCell align="center">{row.place}</TableCell>
                        <TableCell
                          sx={{
                            display: "flex",
                            gap: "8px",
                            justifyContent: "center",
                          }}
                          align="center"
                        >
                          <Button
                            onClick={() => {
                              setSelectedAnjuman(row);
                              handleClickOpen("Edit", row);
                            }}
                            variant="contained"
                          >
                            Edit
                          </Button>
                          <Button
                            onClick={() => handleDeleteConfirm(row)}
                            variant="contained"
                            color="error"
                          >
                            Delete
                          </Button>
                        </TableCell>
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
        </div>
      )}
    </>
  );
};