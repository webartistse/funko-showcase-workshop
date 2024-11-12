import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { FunkoProps } from "../../types/funko";

const FunkoCard: React.FC<FunkoProps> = ({ funkos }) => {
  return (
    <>
      {funkos.map((funkos) => {
        return (
          <Card key={funko._id} sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              sx={{ height: 140 }}
              image={funko.image}
              alt={funko.name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {funko.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {funko.location}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {funko.close_encounter_level}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Species: {funko.extraterrestrial_type}
              </Typography>
            </CardContent>
            <CardActions>
              <Link
                href={funko.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {funko.name} Info
              </Link>
            </CardActions>
          </Card>
        );
      })}
    </>
  );
};

export default FunkoCard;
