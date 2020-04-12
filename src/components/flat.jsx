import React, { Component } from 'react';

class Flat extends Component {
  handleClick = () => {
    const { selectFlat } = this.props;
    const { index } = this.props;
    selectFlat(index);
  }

  render() {
    const { flat } = this.props;
    const { selected } = this.props;
    const url = `${flat.imageUrl}`;
    return (
      <div className={selected ? "card active" : "card"} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2)), url('${url}')` }}>
        <div className="card-category">
          {flat.price} {flat.priceCurrency}
        </div>
        <div className="card-description">
          <h2>{flat.name}</h2>
        </div>
        <a className="card-link" href="#" onClick={this.handleClick}></a>
      </div>
    );
  }
}

export default Flat;
