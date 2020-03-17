import React, { Component } from "react";
import PropTypes from "prop-types";

export class Nabar extends Component {
  static defaultProps = {
    title: "Finder",
    icon: "fab fa-github"
  };
  render() {
    return (
      <nav className='navbar bg-primary'>
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    );
  }
}

export default Nabar;
