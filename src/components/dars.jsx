import React, { Component } from "react";

import Dar from "../components/dar";
import restorant from "../Store/store";
class Dars extends Component {
  componentWillMount() {
    const data = restorant.length(
      item => item.id === this.props.match.params.id
    );
    console.log(data);
    const datafood = data.food;
    this.setState({
      foods: datafood
    });
  }
  state = {
    foods: []
  };

  render() {
    return (
      <div>
        {this.state.foods.map(item => {
          return <Dar item={item} />;
        })}
      </div>
    );
  }
}

export default Dars;
