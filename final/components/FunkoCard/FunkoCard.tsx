import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FunkoProps } from "../../types/funko";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

const FunkoCard: React.FC<FunkoProps> = ({ funkos }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {funkos.map((funko) => {
        return (
          <Card key={funko._id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={funko.image}
              alt={funko.character}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {funko.movie_tv_show}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                {funko.character}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Released: {funko.year_release}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number in Line: {funko.number}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={handleClickOpen}>
                Edit
              </Button>
            </CardActions>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>Edit Funko</DialogTitle>
              <DialogContent>
                <TextField
                  autoFocus
                  margin="dense"
                  label="Movie/TV Show"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={funko.movie_tv_show}
                />
                <TextField
                  margin="dense"
                  label="Character"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={funko.character}
                />
                <TextField
                  margin="dense"
                  label="Year Released"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={funko.year_release}
                />
                <TextField
                  margin="dense"
                  label="Number in Line"
                  type="text"
                  fullWidth
                  variant="standard"
                  defaultValue={funko.number}
                />
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={handleClose} color="primary">
                  Save
                </Button>
              </DialogActions>
            </Dialog>
          </Card>
        );
      })}
    </>
  );
};

export default FunkoCard;
