import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const styles = theme => ({
  card: {
    Width: 450,
    height: 510
  },
  button: {
    margin: theme.spacing.unit
  },
  media: {
    height: 300,
    width: "100%"
  },
  pc: {
    textAlign: "center"
  }
});

function ImgMediaCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          className={classes.media}
          image={props.gambar}
          title={props.nama}
        />
        <CardContent className={classes.pc}>
          <h1>{props.nama}</h1>
          <Typography component="p">Harga: Rp.{props.harga}</Typography>
          <h1>{props.nilai}</h1>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.button}
            onClick={props.kurang}
          >
            -
          </Button>

          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
            onClick={props.tambah}
          >
            +
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
