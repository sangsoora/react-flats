import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import FlatList from './flat_list';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flats,
      selectedFlat: flats[0]
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  render() {
    const { flats } = this.state;
    const { selectedFlat } = this.state;
    return (
      <div>
        <FlatList
          flats={flats}
          selectedFlat={selectedFlat}
          selectFlat={this.selectFlat}
        />
        <div className="map-container"></div>
      </div>
    );
  }
}


export default App;
