import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import event2 from "./assets/event2.jpg";
import logoImg from "./assets/logo.png";

export default function IndexStudent() {
  return (
    <div className="h-screen w-full bg-orange-100">
      <nav className="flex justify-between items-center bg-teal-950 p-4">
        <img className="h-12" src={logoImg} alt="logo" />
        <Button variant="text">Create Event</Button>
        <Button variant="contained">Log Out</Button>
      </nav>

      <h1 className="text-3xl font-bold text-center mt-4">
        Available Events
      </h1>

    

      <div className="flex justify-center items-center">
        <Card sx={{ maxWidth: 345, margin: "0 10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="345"
              image={event2}
              alt="Event 1"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Christmas Party
              </Typography>
              <Typography variant="body2" color="text.secondary">
                An awesome party.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Join Event
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345, margin: "0 10px" }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              width="345"
              image={event2}
              alt="Event 2"
              sx={{ objectFit: 'cover' }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Another Christmas Party
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Events = more fun (am I right?)
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Join Event
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}
