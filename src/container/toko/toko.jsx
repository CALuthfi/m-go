import React, { Component } from "react";
import Coba from "../../components/coba";
import Nav from "../../components/Navbar";
import Store from "../../Store/store";
import Grid from "@material-ui/core/Grid";

export default class Toko extends Component {
  render() {
    return (
      <div>
        <Nav judul="Restoran" />
        <div style={{ margin: 20 }}>
          <Grid
            container
            spacing={24}
            style={{
              alignItems: "center"
            }}
          >
            {Store.map(mall => (
              <Grid item xs={12} sm={12}>
                <Coba
                  toko={mall.name}
                  id={mall.id}
                  jalan={mall.lokasi}
                  gambar={mall.image}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
