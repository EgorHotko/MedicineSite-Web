import React, { Component } from 'react';
import Header from './components/Header';
import MedicineTable from './components/MedicineTable';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MedicineTable/>
      </div>
    );
  }
}

export default App;
