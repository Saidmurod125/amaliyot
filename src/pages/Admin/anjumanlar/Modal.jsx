import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

export default function FormDialog({
  open,
  setOpen,
  setAnjumanlar,
  anjumanlar,
  editOrDelete,
  editData,
  deleteConfirmOpen,
  handleDeleteCancel,
  setDeleteConfirmOpen,
}) {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formJson = Object.fromEntries(formData.entries());

    if (editOrDelete) {
      try {
        await fetch(
          `https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference/${editData.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );

        const updatedAnjumanlar = anjumanlar.map((anjuman) => {
          if (anjuman.id === editData.id) {
            return { ...anjuman, ...formJson };
          }
          return anjuman;
        });
        setAnjumanlar(updatedAnjumanlar);
      } catch (error) {
        console.error("Error updating item:", error);
      }
    } else {
      try {
        const response = await fetch(
          "https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formJson),
          }
        );
        const data = await response.json();
        setAnjumanlar((prevAnjumanlar) => [...prevAnjumanlar, data]);
      } catch (error) {
        console.error("Error adding item:", error);
      }
    }

    handleClose();
  };

  const handleDelete = async () => {
    try {
      await fetch(
        `https://6634d6199bb0df2359a2e7ca.mockapi.io/conference/conference/${editData.id}`,
        {
          method: "DELETE",
        }
      );

      const updatedAnjumanlar = anjumanlar.filter(
        (item) => item.id !== editData.id
      );
      setAnjumanlar(updatedAnjumanlar);
      setDeleteConfirmOpen(false);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
          {editOrDelete ? "Tahrirlash" : "Yangi Anjuman"}
        </DialogTitle>
        <DialogContent>
          <form
            style={{ display: "flex", gap: "20px", flexDirection: "column" }}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              name="name"
              label="Name"
              fullWidth
              variant="standard"
              defaultValue={editData ? editData.name : ""}
            />
            <TextField
              required
              fullWidth
              name="date"
              type="date"
              variant="standard"
              defaultValue={editData ? editData.date : "2024-05-03"}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              required
              fullWidth
              name="place"
              label="Location"
              variant="standard"
              defaultValue={editData ? editData.place : ""}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button type="submit">
                {editOrDelete ? "Save" : "Submit"}
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog open={deleteConfirmOpen} onClose={handleDeleteCancel}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <p>Are you sure you want to delete this item?</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel}>Cancel</Button>
          <Button onClick={handleDelete} color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
