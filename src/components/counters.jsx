import React, { Component } from "react";
import Counter from "./counter";
import "./cart.css";
class Counters extends Component {
  render() {
    //defining the these variable to avoid the repetition of this.props
    const { onReset, counters, onDelete, onIncrement, onDecrement } =
      this.props;
    if (this.props.cart == 1) {
      return (
        <div
          id="cart"
          className="flex-column d-flex align-items-center border m-3"
          style={{
            maxWidth: 400,
            zIndex: 2,
            backgroundColor: "whitesmoke",
            position: "fixed",
            right: 0,
            borderRadius: 20,
          }}
        >
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
            <h5 className="m-3">Your cart is emtpy.</h5>
          )}
          <button className="btn btn-danger my-5" onClick={onReset}>
            Delete All
          </button>
        </div>
      );
    }
  }
}

export default Counters;
