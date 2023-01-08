import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  render() {
    return (
      <div className="container-sm my-5">
        <div className="row justify-content-center">
          {this.props.prods.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAdd={this.props.onAdd}
              className="col-xl-4"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
