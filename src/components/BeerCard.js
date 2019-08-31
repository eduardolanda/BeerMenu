import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  card: {
    width: "320px" /* Or whatever */,
    height: "max-content" /* Or whatever */,
    margin: "10px" /* Magic! */,
    textAlign: "center",
    opacity: ".9"
  },
  media: {
    height: 140
  },
  bottom: {
    display: "flex",
    justifyContent: "space-around",
    margin: "0 auto"
  }
});

export default function BeerCard({ title, country, state, url, city }) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        {/* <CardMedia
          className={classes.media}
          image="https://vignette.wikia.nocookie.net/ac945b05-6f4a-4fc0-ade6-d2d1058a024e/scale-to-width-down/800"
          title="Contemplative Reptile"
        /> */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Country: {country}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            State: {state}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            City: {city}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.bottom}>
        <Button
          size="small"
          style={{ color: "black" }}
          target="_blank"
          href={url}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
}
