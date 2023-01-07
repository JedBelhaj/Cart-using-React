import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Products from "./components/products";

class App extends Component {
  state = {
    counters: [],
    prods: [
      { id: 1, pName: "T-shirt" },
      { id: 2, pName: "Gloves" },
      { id: 3, pName: "Sneakers" },
      { id: 4, pName: "Coat" },
    ],
  };

  constructor() {
    super();
    //dont use setState()
    //u can directly use this.state = this.props.smthn
    //but you need to add props as arg to constructor and super
    //;)
    console.log("app constructor");
  }
  componentDidMount() {
    // ajax call & get data from a server
    // setState({})
    console.log("app mount");
  }

  handleAddToCard = (product) => {
    const products = [...this.state.prods];
    let counters = [...this.state.counters];
    const countLen = counters.length;
    let newId;
    countLen > 0 ? (newId = counters[countLen - 1].id + 1) : (newId = 1);
    if (counters.filter((c) => c.prodName === product.pName).length === 0) {
      this.setState({ counters });
      counters.push({
        id: newId,
        value: 1,
        prodName: product.pName,
      });
    } else {
      counters.filter((c) => c.prodName === product.pName)[0].value++;
      this.setState({ counters });
    }
  };

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("app render");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Products prods={this.state.prods} onAdd={this.handleAddToCard} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd={this.handleAddToCard}
          />
        </main>
      </React.Fragment>
    );
  }
}
export default App;
