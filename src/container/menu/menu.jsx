import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Dar from "../../components/dar";
import Nav from "../../components/Navbar";
import Store from "../../Store/store";
export default class Toko extends Component {
  state = {
    makanan: []
  };

  componentWillMount() {
    console.log(this.props.match.params.id);
    const isi = Store.find(itu => itu.id === this.props.match.params.id);
    const convert = isi.food;
    this.setState({
      makanan: convert
    });
  }

  render() {
    return (
      <div>
        <Nav judul="Ordering" />
        <h1 style={{ textAlign: "center" }}>Menu makanan</h1>
        <div style={{ margin: 20 }}>
          <Grid
            container
            spacing={24}
            style={{
              alignItems: "center"
            }}
          >
            {this.state.makanan.map(mall => (
              <Grid item xs={6} sm={3}>
                <Dar gambar={mall.gambar} nama={mall.nama} harga={mall.harga} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}
