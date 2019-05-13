import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";
import ListCard from "./ListCard";

class Awws extends Component {
  state = {
    malls: [
      {
        id: 1,
        gambar:
          "https://ecs7.tokopedia.net/img/cache/700/product-1/2017/2/2/797011/797011_2b7c6875-9ff6-48e7-a15d-77f885f62bad",
        toko: "Go-Send",
        jalan: "Jln.Gunung Pati semarang"
      },
      {
        id: 2,
        gambar:
          "https://gerobakjuara.com/wp-content/uploads/2018/12/cropped-Logo-Gerobak-Juara-1024x1024-01.png",
        toko: "Go-Food",
        jalan: "Jln.Ngaliyan semarang"
      },
      {
        id: 3,
        gambar:
          "https://image.freepik.com/vecteurs-libre/chef-logo_20448-9.jpg",
        toko: "GO-grab",
        jalan: "Jln.Ungaran semarang"
      },
      {
        id: 4,
        gambar:
          "https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/6/9204966/9204966_0ff949d6-8e91-46ff-b8b0-3ce3ebf3fe56_635_357.jpg",
        toko: "Go-Jek",
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
              <ListCard
                gambar={mall.gambar}
                toko={mall.toko}
                jalan={mall.jalan}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}
export default Awws;
