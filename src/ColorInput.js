import React, { Component } from 'react'

export default class ColorInput extends Component {
  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      console.log(evt)
      this.props.updateColor(evt.target.value)
    }
  }

  handleOnChange(evt) {
    return false
  }

  render() {
    return (
      <input type="text"
        onKeyDown={this.handleKeyDown.bind(this)}/>
    )
  }
}
