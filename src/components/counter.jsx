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
          className="btn btn-primary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={ () => this.props.onDelete(this.props.counter.id) }
          className="btn btn-danger btn-sm m-1"
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

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
