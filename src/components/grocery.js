import React from "react";

const Grocery = ({ item, isDone, groceryClick }) => (
  <div
    onClick={groceryClick}
    style={isDone ? { ...styles.todo, ...styles.complete } : styles.todo}
  >
    {item}
  </div>
);

const styles = {
  todo: { cursor: "pointer" },
  complete: { color: "grey", textDecoration: "line-through" }
};

export default Grocery;
