import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Dar from "./dar";
import restorant from "../Store/store";

class Cobes extends Component {
  state = {
    menu: []
  };
  componentWillMount() {
    const data = restorant;

    this.setState({
      menu: data.find(r => r.id === "1").food
    });
  }

  render() {
    return (
      <div style={{ margin: 20 }}>
        <Grid
          container
          spacing={24}
          style={{
            alignItems: "center"
          }}
        >
          {this.state.menu.map(mall => (
            <Grid item xs={3} sm={4}>
              <Dar item={mall} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Cobes;
