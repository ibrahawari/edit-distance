import React from "react";
//import { editDistance } from "./utils/editDistance";
import * as textFields from "./textFields";

export default class AppContent extends React.Component {
  state = {
    firstString: "",
    secondString: "",
  };

  handleChange = stateProp=> event => {
    this.setState({ [stateProp]: event.target.value });
  };

  render() {
    const TextFields = textFields.default;
    return (<TextFields onChange={this.handleChange}/>);
  }
}
