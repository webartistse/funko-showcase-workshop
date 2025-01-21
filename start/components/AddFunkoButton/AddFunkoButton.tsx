import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Funko } from '../../types/funko';

const AddFunkoButton = ({ setFunkos }: { setFunkos: React.Dispatch<React.SetStateAction<Funko[]>> }) => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState({
    imageUrl: '',
    source: '',
    character: '',
    yearReleased: '',
    numberInLine: '',
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('/api/funkos', formValues);
      setFunkos((funkos: Funko[]) => [...funkos, response.data]);
      handleClose(); // Close the dialog after submission
    } catch (error) {
      console.error('Error adding Funko:', error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>

      <Button variant="contained" color="secondary" onClick={handleClickOpen}>
        Add Funko!
      </Button>
      
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create new Funko</DialogTitle>
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
            Create Funko
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
};

export default AddFunkoButton;
