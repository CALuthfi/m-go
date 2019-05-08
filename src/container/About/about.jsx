import React, { Component } from "react";
import Nav from "../../components/Navbar";
import Cards from "../../components/cobas";

class About extends Component {
  render() {
    return (
      <div>
        <Nav judul="Restorant" />
        <Cards />
      </div>
    );
  }
}
export default About;
