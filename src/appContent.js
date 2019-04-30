import React from "react";
import { editDistance } from "./utils/editDistance";
import * as textFields from "./textFields";
import * as paperSheet from "./paperSheet";

export default class AppContent extends React.Component {
  state = {
    firstString: "",
    secondString: ""
  };

  handleChange = stateProp => event => {
    this.setState({ [stateProp]: event.target.value });
  };

  render() {
    const TextFields = textFields.default;
    const PaperSheet = paperSheet.default;
    return (
      <div>
        <TextFields onChange={this.handleChange} />
        <PaperSheet result={editDistance(this.state.firstString, this.state.secondString)}/>
      </div>
    );
  }
}
