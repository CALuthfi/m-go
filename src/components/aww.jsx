import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
const styles = {
  card: {
    Width: 500,
    height: 500
  },
  media: {
    // ⚠️ object-fit passis not supported by IE 11.

    height: 300,
    width: "100%"
  },
  pc: {
    textAlign: "center"
  }
};

function ImgMediaCard(props) {
  const { classes } = props;
  return (
    <CardActionArea tag={Link} to="/about">
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={props.gambar}
          title="Contemplative Reptile"
        />
        <CardContent className={classes.pc}>
          <Typography gutterBottom variant="h5" component="h2">
            {props.toko}
          </Typography>
          <Typography component="p">{props.jalan}</Typography>
          <Link to="/about">
            <Button size="large" color="primary" tag={Link} to="/about">
              Kunjungi
            </Button>
          </Link>
        </CardContent>
      </Card>
    </CardActionArea>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
