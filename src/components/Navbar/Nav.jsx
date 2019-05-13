import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -18,
    marginRight: 10
  },
  bar: { backgroundColor: "#4fc3f7" },
  nv: {
    fontFamily: "Carter One"
  },
  avatar: {
    width: 60,
    height: 60
  }
};

function DenseAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.bar}>
        <Toolbar variant="dense">
          <IconButton
            className={classes.menuButton}
            color="inherit"
            aria-label="Menu"
            component={Link}
            to="/"
          >
            <Avatar
              alt="Remy Sharp"
              src="https://cdn6.aptoide.com/imgs/5/4/a/54a62e19cb4c2ca9510fe5fc90d90dae_icon.png?w=240"
              className={classes.avatar}
              tag={Link}
              to={"/"}
            />
          </IconButton>
          <Typography variant="h4" color="inherit" className={classes.nv}>
            {props.judul}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

DenseAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DenseAppBar);
