import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Aww from "./aww";

class Awws extends Component {
  state = {
    malls: [
      {
        id: 1,
        gambar:
          "http://static1.squarespace.com/static/542f26d1e4b0d66c87d2d963/t/569e8ca7df40f33e106c868b/1547761427961/?format=1500w",
        toko: "Go-jek",
        jalan: "Jln.Gunung Pati semarang"
      },
      {
        id: 2,
        gambar: "https://pbs.twimg.com/profile_images/1287550758/logo_rc.jpg",
        toko: "Go-Grab",
        jalan: "Jln.Ngaliyan semarang"
      },
      {
        id: 3,
        gambar:
          "http://1.bp.blogspot.com/-nDSusRrN9E4/Wb9KT3C0ZlI/AAAAAAAAC_E/iG6aP93M08QX1qMu9pEY600hBvfI52UPgCK4BGAYYCw/s1600/SeafoodRestaurant.png",
        toko: "Go-Food",
        jalan: "Jln.Ungaran semarang"
      },
      {
        id: 4,
        gambar:
          "https://b.zmtcdn.com/data/pictures/1/18927771/d24ff7ac258e27c9d704556b06387e6a_featured_v2.jpg",
        toko: "GO-Cafe",
        jalan: "Jln.Mijen semarang"
      }
    ]
  };

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
          {this.state.malls.map(mall => (
            <Grid item xs={6} sm={6}>
              <Aww gambar={mall.gambar} toko={mall.toko} jalan={mall.jalan} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Awws;
