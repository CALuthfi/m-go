import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import CardMenu from "../../components/CardMenu/CardMenu";
import Nav from "../../components/Navbar";
import { Table } from "reactstrap";
import Store from "../../Store/store";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

export default class Toko extends Component {
  state = {
    makanan: [],
    orderan: [],
    total: 0
  };

  componentWillMount() {
    const data = Store.find(item => item.id === this.props.match.params.id);
    const dataFood = data.food;
    this.setState({
      makanan: dataFood
    });
    console.log(dataFood);
    const addQty = dataFood.forEach(o => {
      o.qty = 0;
    });
    console.log(addQty);

    console.log(this.state.fillfood);
  }

  componentDidMount() {
    // console.log(this.state.fillfood);
  }

  plus = id => {
    const { orderan, makanan } = this.state;
    const findIdFood = makanan.find(o => o.id === id);
    const findIdOrder = orderan.find(o => o.id === id);
    this.addPrice(findIdFood.harga);
    makanan.map(o => {
      if (o.id === findIdFood.id) {
        const updateIntern = (o.qty = findIdFood.qty + 1);
      }
    });
    if (findIdOrder === undefined) {
      const update = {
        ...findIdFood,
        qty: 1,
        price: findIdFood.harga
      };
      this.setState({
        orderan: [...orderan, update]
      });
      return;
    }
    if (findIdFood.id === findIdOrder.id) {
      const update = {
        ...findIdOrder,
        qty: findIdOrder.qty + 1,
        price: findIdOrder.price + findIdOrder.harga
      };
      this.setState({
        orderan: orderan.map(o => (o.id === findIdOrder.id ? update : o))
      });
      return;
    }
  };

  minus = id => {
    const { orderan, makanan } = this.state;
    const findIdFood = makanan.find(i => i.id === id);
    const findIdOrder = orderan.find(i => i.id === id);

    if (findIdFood.qty === 0) {
      return;
    } else {
      if (findIdOrder.qty === 1) {
        const updateFoods = { ...findIdFood, qty: findIdFood.qty - 1 };
        this.setState({
          makanan: makanan.map(o => (o.id === findIdFood.id ? updateFoods : o))
        });
        const updateorder = orderan.filter(o => o.id !== id);
        this.setState({
          orderan: updateorder
        });
      } else {
        const updateOrders = {
          ...findIdOrder,
          qty: findIdOrder.qty - 1,
          price: findIdOrder.price - findIdOrder.harga
        };
        const updateFoods = { ...findIdFood, qty: findIdFood.qty - 1 };
        this.setState({
          makanan: makanan.map(o => (o.id === findIdFood.id ? updateFoods : o)),
          orderan: orderan.map(o =>
            o.id === findIdOrder.id ? updateOrders : o
          )
        });
      }
    }
    this.minusPrice(findIdFood.harga);
  };

  addPrice = harga => {
    this.setState({
      total: this.state.total + harga
    });
  };

  minusPrice = harga => {
    this.setState({
      total: this.state.total - harga
    });
  };

  beli = () => {
    const { orderan, total } = this.state;
    sessionStorage.setItem("order", JSON.stringify(orderan));
    sessionStorage.setItem("total", JSON.parse(total));
  };

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
              <Grid item xs={12} sm={3}>
                <CardMenu
                  gambar={mall.gambar}
                  nama={mall.nama}
                  harga={mall.harga}
                  nilai={mall.qty}
                  kurang={() => this.minus(mall.id)}
                  tambah={() => this.plus(mall.id)}
                />
              </Grid>
            ))}
          </Grid>
          <div style={{ margin: 20 }}>
            <ExpansionPanel style={{ backgroundColor: "yellow" }}>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <h3>Orderan Kamu</h3>
              </ExpansionPanelSummary>
              <Table>
                <thead>
                  <tr>
                    <th>Nama Pesanan</th>
                    <th>Barang</th>
                    <th>Total Harga/Produk</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.orderan.map(orders => (
                    <tr>
                      <td>{orders.nama}</td>
                      <td>{orders.qty} X</td>
                      <td>Rp {orders.price}</td>
                    </tr>
                  ))}
                </tbody>
                <thead>
                  <tr>
                    <th />
                    <th />

                    <th>Total :</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td />
                    <td />

                    <td style={{ color: "#cf2a42ff", fontWeight: "bold" }}>
                      Rp. {this.state.total}
                    </td>
                  </tr>
                </tbody>
              </Table>

              <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/bayar"
                onClick={this.beli}
                style={{ margin: 10 }}
              >
                Bayar
              </Button>
            </ExpansionPanel>
          </div>
        </div>
      </div>
    );
  }
}
