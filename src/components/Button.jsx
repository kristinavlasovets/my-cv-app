import React from "react";
import ButtonCSS from "../styles/components/button.module.css";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button className={`button ${this.props.btnClass}`}>
          {this.props.btnText}
        </button>
      </div>
    );
  }
}
