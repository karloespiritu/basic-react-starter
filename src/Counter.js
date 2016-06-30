/*
* @Author: Karlo Espiritu
* @Date:   2016-06-30 19:30:44
* @Last Modified by:   Karlo Espiritu
* @Last Modified time: 2016-06-30 19:43:09
*/

import React from 'react';

/**
 * A counter button: tap the button to increase the count.
 */
class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <button
        onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}
      >
        Count: {this.state.count}
      </button>
    );
  }
}
export default Counter;