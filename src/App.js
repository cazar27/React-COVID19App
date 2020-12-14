import React, {Component} from 'react';
import Data from './Data'
import Contador from './contador'
import './App.css';
class App extends Component {

  state = {
    death: null,
    confirmed: null,
    recovered: null,
    last_update: null,
    countries: null,
    loadding: true
  };

  async componentDidMount() {
    try {
      const response = await fetch('https://enrichman.github.io/covid19/world/full.json');
      const data = await response.json();
      this.setState({
        death: data.deaths,
        confirmed: data.confirmed,
        recovered: data.recovered,
        last_update: data.last_update,
        countries: data.countries,
        loadding: false
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    console.log('Will unMount');
  }

  render(){
    if(this.state.loadding) {
      return (
        <div> Cargando los datos actualizados</div>
      )
    } else {
      return (
        <>
          <Contador />
          <Data death= {this.state.death} confirmed={this.state.confirmed} recovered={this.state.recovered} last_update={this.state.last_update} />
        </>
      )
    }
  }
}

export default App;