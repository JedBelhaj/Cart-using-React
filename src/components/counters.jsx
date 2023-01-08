import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div className="container flex-column d-flex align-items-center">
        <h2>Your Cart</h2>
        {counters.length > 0 ? (
          counters.map((counter) => (
            <Counter
              key={counter.id}
              onDelete={onDelete}
              onIncrement={onIncrement}
              onDecrement={onDecrement}
              counter={counter}
            />
          ))
        ) : (
            <h5>Your cart is emtpy.</h5>
        )}
        <button className="btn btn-danger my-5" onClick={onReset}>
          Delete All
        </button>
      </div>
    );
  }
}

export default Counters;
