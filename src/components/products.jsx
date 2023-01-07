import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  render() {
    return (
      <div className="container flex-row d-flex align-items-center justify-content-center my-5">
        {this.props.prods.map((product) => (
          <Product key={product.id} product={product} onAdd={this.props.onAdd} />
        ))}
      </div>
    );
  }
}

export default Products;
