import React, { Component } from "react";
import Store from "../Store/store";
import Grid from "@material-ui/core/Grid";
import Cobe from "./cobe";

class Coba extends Component {
  state = {
    file: []
  };

  componentDidMount() {
    this.setState({
      file: Store
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
          {this.state.file.map(mall => (
            <Grid item xs={12} sm={12}>
              <Cobe gambar={mall.gambar} toko={mall.toko} jalan={mall.lokasi} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Coba;
