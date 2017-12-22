import React, { Component } from 'react';

class Test extends Component {

  componentWillMount(){
    console.log(this.props);
  }
  render() {
    return (
      <div>
          Component Test
      </div>
    );
  }
}

export default Test;