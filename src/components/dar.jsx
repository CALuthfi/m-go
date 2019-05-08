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

const styles = {
  card: {
    Width: 500,
    height: 550
  },
  media: {
    height: 250,
    width: "100%"
  },
  pc: {
    textAlign: "center"
  }
};

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
          <Typography component="p">Rp.{props.harga}</Typography>

          <h1>0</h1>
          <Button size="large" color="primary">
            -
          </Button>
          <Button size="large" color="primary">
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

// import React, { Component } from 'react'

// export default class Dar extends Component {
//   render() {
//     const { nama, harga, gambar } = this.props.item;
//     return (
//       <div>
//         <Card>
//           <CardMedia
//             component="img"
//             alt="Contemplative Reptile"
//             image={gambar}
//             title="Contemplative Reptile"
//             heigth="100%"
//           />
//           <CardContent style={{ textAlign: "center" }}>
//             <h1>{nama}</h1>
//             <Typography component="p">{harga}</Typography>

//             <h1>0</h1>
//             <Button size="large" color="primary">
//               -
//             </Button>
//             <Button size="large" color="primary">
//               +
//             </Button>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }
// }
