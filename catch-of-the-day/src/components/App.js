import React from 'react';
import Header from './Header';
import Order from './Order.js';
import Inventory from './Inventory';

class App extends React.Component {
  render() {
    return (
      <div classname="catch-of-the-day">
        <div classname="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;
