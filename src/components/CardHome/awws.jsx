import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import Aww from "./aww";

class Awws extends Component {
  state = {
    malls: [
      {
        id: 1,
        gambar:
          "https://cdn5.f-cdn.com/contestentries/13416/1097701/5277-19-1360157166511259eea27ec/Sample%208_thumb900.jpg",
        toko: "Go-jajan",
        jalan: "Jln.Gunung Pati semarang"
      },
      {
        id: 2,
        gambar:
          "https://gerobakjuara.com/wp-content/uploads/2018/12/cropped-Logo-Gerobak-Juara-1024x1024-01.png",
        toko: "Go-grobak",
        jalan: "Jln.Ngaliyan semarang"
      },
      {
        id: 3,
        gambar:
          "https://image.freepik.com/vecteurs-libre/chef-logo_20448-9.jpg",
        toko: "Go-makan",
        jalan: "Jln.Ungaran semarang"
      },
      {
        id: 4,
        gambar:
          "https://cdn.sribu.com/assets/media/contest_detail/2017/1/desain-logo-untuk-warung-kopi-nongkrong-586d82439d68b11eff4677df/88b1b55b97.jpg",
        toko: "GO-kopi",
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
            <Grid item xs={12} sm={6}>
              <Aww gambar={mall.gambar} toko={mall.toko} jalan={mall.jalan} />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Awws;
