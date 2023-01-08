import React, { Component } from "react";
import Product from "./product";
class Products extends Component {
  render() {
    // the .map() methode is used to set the values of each product child from the prods array prop
    return (
      <div className="container-sm my-5">
        <div className="row justify-content-center">
          {this.props.prods.map((product) => (
            <Product
              key={product.id}
              product={product}
              // here we passed on add to the child prop
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
