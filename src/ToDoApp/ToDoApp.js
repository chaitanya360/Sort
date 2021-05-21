import React, { Component } from "react";
import ListItem from "./ListItem";
import "./ToDoApp.css";
class ToDoApp extends Component {
  state = {
    items: [],
    currentInput: "",
  };

  handleChange = (e) => {
    this.setState({ currentInput: e.target.value.toUpperCase() });
  };

  handleadd = () => {
    if (this.state.currentInput.length !== 0) {
      const tempName = this.state.currentInput;
      const size = this.state.items.length + 1;
      let itemsClone = [...this.state.items];
      itemsClone.push({
        value: tempName,
        id: size,
        isCompleted: false,
        dateTime: getDate() + " " + getTime(),
      });
      this.setState({
        items: itemsClone,
        currentInput: "",
      });
    } else alert("Enter Something");
  };

  heandleDelete = (name) => {
    let itemsClone = this.state.items.filter((n) => n !== name);
    let i;
    for (i = 0; i < itemsClone.length; i++) itemsClone[i].id = i + 1;
    this.setState({ items: itemsClone });
  };

  increaseCount = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const tempCount = this.state.counters[index].count + 1;
    const countersCopy = [...this.state.counters];
    countersCopy[index].count = tempCount;
    this.setState({ countersCopy });
  };

  resetCount = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const tempCount = 0;
    const countersCopy = [...this.state.counters];
    countersCopy[index].count = tempCount;
    this.setState({ countersCopy });
  };

  decreaseCount = (counter) => {
    const index = this.state.counters.indexOf(counter);
    const tempCount =
      this.state.counters[index].count === 0
        ? 0
        : this.state.counters[index].count - 1;
    const countersCopy = [...this.state.counters];
    countersCopy[index].count = tempCount;
    this.setState({ countersCopy });
  };

  resetAll = () => {
    const countersCopy = [...this.state.counters];
    countersCopy.map((c) => (c.count = 0));
    this.setState(countersCopy);
  };

  getTotalCount() {
    let totalCount = 0;
    this.state.counters.map((e) => (totalCount += e.count));
    return totalCount;
  }

  handleListItemClick = (item) => {
    let itemListCopy = [...this.state.items];
    itemListCopy.map((i) => {
      if (i === item) i.isCompleted = !i.isCompleted;
    });
    this.setState({ item: itemListCopy });
  };

  render() {
    return (
      <div className="main_container p-4">
        <div className="row m-2 mb-4">
          <label className="input_label w-100 ">
            <textarea
              type="text"
              className="input_text w-100"
              value={this.state.currentInput}
              onChange={this.handleChange}
            />
          </label>

          <button className="btn btn-sm btn-success" onClick={this.handleadd}>
            Add
          </button>
        </div>

        {this.state.items.reverse().map((n) => (
          <ListItem
            Name={n}
            key={n.id}
            id={n.id}
            onListItemClick={this.handleListItemClick}
            className="row w-100"
            onDelete={this.heandleDelete}
            listItemClass={this.state.listItemClass}
          ></ListItem>
        ))}
      </div>
    );
  }
}

export default ToDoApp;

function getDate() {
  var today = new Date();
  var current_date = today.getDate();
  var current_month = today.getMonth(); //Month starts from 0
  // var current_year = today.getFullYear();
  const Months = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUNE",
    "JULY",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  return current_date + " " + Months[current_month];
}

function getTime() {
  Date.prototype.getCurrentTime = function () {
    return (
      (this.getHours() < 10 ? "0" : "") +
      (this.getHours() > 12 ? this.getHours() - 12 : this.getHours()) +
      ":" +
      (this.getMinutes() < 10 ? "0" : "") +
      this.getMinutes() +
      ":" +
      (this.getSeconds() < 10 ? "0" : "") +
      this.getSeconds() +
      (this.getHours() > 12 ? " PM" : " AM")
    );
  };

  var today = new Date(); //date object

  var current_time = today.getCurrentTime();
  return current_time;
}
