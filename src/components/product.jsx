import React, { Component } from "react";
class Product extends Component {
  render() {
    return (
      <div className="card" style={{width: "18rem"}}>
        <div className="card-body">
          <h5 className="card-title">{this.props.product.pName}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a onClick={() => this.props.onAdd(this.props.product)} className="btn btn-primary">
            Add to Cart
          </a>
        </div>
      </div>
    );
  }
}

export default Product;