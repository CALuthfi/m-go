import React, { Component } from "react";
import Nav from "../../components/Navbar";
import Card from "../../components/CardBayar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class End extends Component {
  componentWillMount() {
    const get = sessionStorage.getItem("order");
    const getTotal = sessionStorage.getItem("total");
    const convert = JSON.parse(get);
    const convertTotal = JSON.parse(getTotal);
    console.log(convert);
    this.setState({
      order: convert,
      total: convertTotal
    });
  }
  state = {
    order: [],
    total: 0
  };

  render() {
    return (
      <div>
        <Nav judul="List keranjang" />
        <div style={{ margin: 20 }}>
          <Grid
            container
            spacing={24}
            style={{
              alignItems: "center"
            }}
          >
            {this.state.order.map(item => {
              return (
                <Grid item xs={12} sm={3}>
                  <Card
                    gambar={item.gambar}
                    name={item.nama}
                    harga={item.price}
                    qty={item.qty}
                  />
                </Grid>
              );
            })}
          </Grid>
        </div>
        <h1 style={{ textAlign: "center" }}>
          Total isi keranjang : Rp.{this.state.total}
        </h1>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
          onClick={this.beli}
          style={{ margin: 10 }}
        >
          Konfrim
        </Button>
      </div>
    );
  }
}
