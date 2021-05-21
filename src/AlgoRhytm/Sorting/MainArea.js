import "./sorting.css";
import React, { Component } from "react";
import BarsContainer from "./BarsContainer.jsx";
import { cloneDeep } from "lodash";

class MainArea extends Component {
  state = {
    bars: [],
    totalBars: 80,
    barsHeight: 5, //if you want to change this then also change in .css
    sortButtonIsPressed: false,
    sortingSpeed: 1, //decreasing this will increase the speed
    isUniform: false, //steady slop
    barsPosition: "center", //"center","flex-start","flex-end"
  };

  bubbleSortIntervalId = 0;

  barsClone = [];
  i = 0;
  j = 0;
  n = 0;
  tempBars = [];

  clone(obj) {
    return cloneDeep(obj);
  }

  resetEverything = () => {
    this.i = 0;
    this.j = 0;
    this.barsClone = [];
  };

  handleOnGenerateButtonPressed = () => {
    if (this.state.sortButtonIsPressed) {
      this.setState({ sortButtonIsPressed: false });
    }

    clearInterval(this.bubbleSortIntervalId);

    this.resetEverything();

    //generating random widths
    let barsWidths = [];
    let barsCopy = [];

    while (barsWidths.length < this.state.totalBars) {
      var r = Math.floor(Math.random() * this.state.totalBars) + 1;
      if (
        barsWidths.indexOf(r * this.state.barsHeight) === -1 ||
        !this.state.isUniform
      )
        barsWidths.push(r * this.state.barsHeight);
    }

    let i;
    for (i = 0; i < this.state.totalBars; i++) {
      barsCopy.push({
        pos: i,
        width: barsWidths[i],
        barsCustomClass: "",
      });
    }
    this.setState({ bars: barsCopy });

    //initialising the barsClone

    this.barsClone = this.clone(barsCopy);
  };

  handleOnSortButtonPressed = () => {
    if (!this.state.sortButtonIsPressed && this.state.bars.length > 0) {
      this.setState({ sortButtonIsPressed: true });
      this.BubbleSort();
    }
  };

  BubbleSort = () => {
    this.n = this.barsClone.length;
    this.j = -1;
    this.i = 0;
    this.bubbleSortIntervalId = setInterval(
      this.BubbleSortInnerDriven,
      this.state.sortingSpeed
    );
  };

  BubbleSortInnerDriven = () => {
    console.log("this is called");
    //for n passses

    if (this.i > this.n - 1) {
      clearInterval(this.bubbleSortIntervalId);
    }
    if (++this.j < this.n - this.i - 1) {
      if (this.barsClone[this.j].width > this.barsClone[this.j + 1].width) {
        // swap
        let temp = this.barsClone[this.j].width;
        this.barsClone[this.j].width = this.barsClone[this.j + 1].width;
        this.barsClone[this.j + 1].width = temp;
        const tempBars = cloneDeep(this.barsClone);
        tempBars[this.j].barsCustomClass = "current_bar";
        tempBars[this.j + 1].barsCustomClass = "current_bar";
        this.setState({ bars: tempBars });
      }
    } else {
      this.i++;
      if (this.i <= this.n)
        this.barsClone[this.n - this.i].barsCustomClass = "sorted_bar";
      this.setState({ bars: this.barsClone });
      this.j = -1;
      return;
    }
  };

  render() {
    return (
      <React.Fragment>
        <BarsContainer
          bars={this.state.bars}
          OnGenerateButtonPressed={this.handleOnGenerateButtonPressed}
          OnSortButtonPressed={this.handleOnSortButtonPressed}
          barsPosition={this.state.barsPosition}
        />
      </React.Fragment>
    );
  }
}

export default MainArea;
