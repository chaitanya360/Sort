import React, { Component } from "react";
import "./home.css";
class Test extends Component {
  state = {
    bars: [
      { pos: 1, width: "10px" },
      { pos: 3, width: "20px" },
      { pos: 4, width: "20px" },
      { pos: 3, width: "20px" },
      { pos: 4, width: "20px" },
      { pos: 3, width: "20px" },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <div className="bars_container">
          <center>
            {this.state.bars.map((e) => (
              <div className={"div" + e.pos}>-</div>
            ))}
          </center>
        </div>
      </React.Fragment>
    );
  }
}

export default Test;
