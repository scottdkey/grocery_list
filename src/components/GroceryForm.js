import React, { Component } from "react";

export default class GroceryForm extends Component {
  state = { item: "" };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addGrocery(this.state.item);
    this.setState({ item: "" });
  };
  handleChange = e => {
    this.setState({
      item: e.target.value
    });
    console.log(e.target.value);
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.item}
          onChange={this.handleChange}
          required
          placeholder="add grocery"
        />
      </form>
    );
  }
}
