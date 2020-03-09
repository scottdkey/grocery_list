import React, { Component } from "react";
import GroceryForm from "./GroceryForm";
import Grocery from "./grocery";

export default class GroceryList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groceries: [{ item: "Eggs", isDone: false, id: "blah" }]
    };
  }
  addGrocery = grocery => {
    const newGrocery = {
      item: grocery,
      isDone: false
    };
    this.setState({
      groceries: [newGrocery, ...this.state.groceries]
    });
  };
  handleGroceryClick(index) {
    const { groceries } = this.state;

    const newGrocery = groceries.map((grocery, i) => {
      if (i === index) {
        return {
          ...grocery,
          isDone: !grocery.isDone
        };
      }
      return grocery;
    });
    this.setState({
      groceries: newGrocery
    });
    console.log(newGrocery);
  }
  renderGroceries() {
    return this.state.groceries.map((grocery, index) => {
      return (
        <Grocery
          key={`groceryitem-${index}`}
          item={grocery.item}
          isDone={grocery.isDone}
          groceryClick={() => this.handleGroceryClick(index)}
        />
      );
    });
  }
  render() {
    return (
      <div>
        <GroceryForm addGrocery={this.addGrocery} />
        {this.renderGroceries()}
      </div>
    );
  }
}
