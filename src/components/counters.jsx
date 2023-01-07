import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    return (
      <div className="container flex-column d-flex align-items-center">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            counter={counter}
          />
        ))}
        <button className="btn btn-primary my-5" onClick={onReset}>
          Delete All
        </button>
      </div>
    );
  }
}

export default Counters;
