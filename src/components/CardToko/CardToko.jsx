import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    Width: 500,
    height: 300
  },
  media: {
    height: 300,
    width: "100%"
  }
};

function ImgMediaCard(props) {
  const { classes } = props;

  return (
    <div>
      <Card className={classes.card}>
        <Grid
          container
          spacing={24}
          style={{
            alignItems: "center"
          }}
        >
          <Grid item xs={6}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              className={classes.media}
              image={props.gambar}
              title={props.toko}
            />
          </Grid>
          <Grid item xs={6}>
            <CardContent style={{ textAlign: "center" }}>
              <Typography gutterBottom variant="h5" component="h2">
                {props.toko}
              </Typography>
              <Typography component="p">{props.jalan}</Typography>
              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to={`/toko/${props.id}`}
              >
                Kunjungi
              </Button>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </div>
  );
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
