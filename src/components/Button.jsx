import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div >
        <button className={`button ${this.props.btnClass}`}>{this.props.btnText}</button>
      </div>
    );
  }
}
