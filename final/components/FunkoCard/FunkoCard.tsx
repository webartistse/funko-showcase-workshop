import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { FunkoProps } from "../../types/funko";
import EditFunkoButton from "../EditFunkoButton/EditFunkoButton";

const FunkoCard: React.FC<FunkoProps> = ({ funkos }) => {

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
              <Typography gutterBottom variant="h2" component="div" sx={{ fontSize: '2em' }}>
                {funko.movie_tv_show}
              </Typography>
              <Typography gutterBottom variant="h3" component="div">
                {funko.character}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Released: {funko.year_release}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Number in Line: {funko.number}
              </Typography>
            </CardContent>
            <EditFunkoButton funko={funko} />
          </Card>
        );
      })}
    </>
  );
};

export default FunkoCard;
