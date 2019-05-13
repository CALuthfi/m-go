import React from "react";
import Nav from "../../components/Navbar";
import Awws from "../../components/CardHome";
function Home() {
  return (
    <div className="ee" style={{ backgroundColor: "#0091ea" }}>
      <Nav judul="Go-Buy" />
      <Awws />
    </div>
  );
}

export default Home;
