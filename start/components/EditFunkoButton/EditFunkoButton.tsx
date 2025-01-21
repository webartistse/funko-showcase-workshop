import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { Funko, FunkoProps } from '../../types/funko';
import { EditFunkoProps } from '../../types/funko';
import axios from 'axios';

const EditFunkoButton = ({ setFunkos, funko }: { setFunkos: React.Dispatch<React.SetStateAction<Funko[]>>, funko: Funko }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    _id: funko._id,
    imageUrl: funko.imageUrl,
    source: funko.source,
    character: funko.character,
    yearReleased: funko.yearReleased,
    numberInLine: funko.numberInLine,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/update_funkos', formValues);
      setFunkos((funkos: Funko[]) => {
        return funkos.map((funko) => {
          if (funko._id === response.data._id) {
            return response.data;
          }
          return funko;
        })
      });
      handleClose(); // Close the dialog after submission
    } catch (error) {
      console.error('Error adding Funko:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter Details</DialogTitle>
        <DialogContent>
          <TextField
            margin="normal"
            name="imageUrl"
            label="imageUrl"
            type="text"
            fullWidth
            value={formValues.imageUrl}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            name="source"
            label="source"
            type="text"
            fullWidth
            value={formValues.source}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            name="character"
            label="character"
            type="text"
            fullWidth
            value={formValues.character}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            name="yearReleased"
            label="yearReleased"
            type="text"
            fullWidth
            value={formValues.yearReleased}
            onChange={handleInputChange}
          />
          <TextField
            margin="normal"
            name="numberInLine"
            label="numberInLine"
            type="text"
            fullWidth
            value={formValues.numberInLine}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="warning">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="success">
              Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditFunkoButton;
