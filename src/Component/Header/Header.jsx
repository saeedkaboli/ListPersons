import React, { Component } from "react";
import SimpleContext from './../../Context/Context';
//---Css Compoennt
import "./Header.css";


export default class Header extends Component {
  render() {
    return (
      <SimpleContext.Consumer>
        {context=>(
      <div id="header">
        <h1>{context.Title}</h1>
      </div>

        )}
      </SimpleContext.Consumer>
    );
  }
}
