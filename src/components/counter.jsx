import { hasSelectionSupport } from "@testing-library/user-event/dist/utils";
import React, { Component } from "react";
class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.counter.value !== this.props.counter.value) {
      // example: ajax call and get new data from the server
    }
  }

  componentWillUnmount() {
    //cleanup before an element unmounts
    //useful to avoid memory leaks
  }
  
  render() {
    return (
      <div>
        <span>{this.props.counter.prodName}</span>
        <span className={this.getBadgeClasses()}>{this.formatValue()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="mx-1 btn btn-primary btn-sm"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="mx-1 btn btn-warning btn-sm"
        >
          -
        </button>
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id) }
          className="mx-1 btn btn-danger btn-sm m-1"
        >
          Delete
        </button>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }
//this was used for learning purposes
//its unused now since the counters are limited to a minimum value of 1
// to see the result add manually a value of 0 in app.js to the counters array
  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
