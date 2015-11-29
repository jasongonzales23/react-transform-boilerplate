import React, { Component } from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import Counter from './Counter'
import ColorInput from './ColorInput'
import {updateColor} from './ColorActions'
import {SUPER_NICE} from './colors';

function mapStateToProps(state) {
  return {
    color: state.color,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateColor: bindActionCreators(updateColor, dispatch),
  }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <Counter increment={1} color={this.props.color} />
        <ColorInput
          color={this.props.color}
          updateColor={this.props.updateColor}
        />
        <Counter increment={5} color={SUPER_NICE} />
      </div>
    );
  }
}
