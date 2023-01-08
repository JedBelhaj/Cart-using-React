//importing all the components from their directory
import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import Products from "./components/products";

class App extends Component {
  //here added to the state of the app the props of bouth the counters and the prods
  //so we can pass eventHandlers to from to components not having parent-child relationship
  state = {
    counters: [],
    prods: [
      { id: 1, pName: "T-shirt" },
      { id: 2, pName: "Gloves" },
      { id: 3, pName: "Sneakers" },
      { id: 4, pName: "Coat" },
      { id: 5, pName: "Hat" },
      { id: 6, pName: "Boots" },
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
//eventHandlers

  handleAddToCard = (product) => {
    // adding new elemnt to the counters array in the state
    // to do that we create new array adding an element with a unique id
    // then we use the .setState() methode to override the state
    let counters = [...this.state.counters];
    const countLen = counters.length;
    let newId;
    countLen > 0 ? (newId = counters[countLen - 1].id + 1) : (newId = 1);
    //if there are no products we initiate and id of id=1
    // if we want to add a product counter that already exist that just increments the value of its counter
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
    //same as handleAddToCard we create a new array in which we increment a specific counter
    //then using .setState() we override the state
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    //same as handleIncrement but added a condition so we cant go below 1 in each counter
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value > 1 ? counters[index].value-=1 : counters[index].value=counters[index].value ;
    this.setState({ counters });
  };

  handleReset = () => {
    // resets the counters array to an empty one then overrides the state
    const counters = []
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // deletes an array element and overrides the state
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    console.log("app render");
    return (
      // here we pass all the eventHandlers as props to each child
      //the <React.Fragment> tag means it doesnt create a parent div to hold the other elements
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <Products prods={this.state.prods} onAdd={this.handleAddToCard} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
				onDecrement={this.handleDecrement}
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
