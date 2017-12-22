import React, { Component } from 'react';
import { Collapse } from 'reactstrap';

class ItemWeather extends Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <button className="btn-success form-control"  onClick={ this.toggle } style={{ marginBottom: '1rem' }}>{ this.props.title }</button>
        <Collapse isOpen={this.state.collapse}>
          <div className="">
            { this.props.children }
          </div>
        </Collapse>
      </div>
    );
  }
}

export default ItemWeather;