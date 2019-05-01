import React from "react";
import { editDistanceMatrix } from "./utils/editDistance";
import { reconstructPath } from "./utils/reconstructPath";
import * as textFields from "./components/textFields";
import * as paperGrid from "./components/paperGrid";
import * as paperSheet from "./components/paperSheet";

export default class AppContent extends React.Component {
  state = {
    firstString: "",
    secondString: "",
  };

  handleChange = stateProp => event => {
    this.setState({ [stateProp]: event.target.value });
  };

  render() {
    const TextFields = textFields.default;
    const PaperGrid = paperGrid.default;
    const PaperSheet = paperSheet.default;

    const d = editDistanceMatrix(this.state.firstString, this.state.secondString); console.log(d)
    const e = reconstructPath(d); console.log(e); // really bad
    return (
      <div>
        <TextFields onChange={this.handleChange} />
        <PaperGrid matrix={d} firstString={this.state.firstString} secondString={this.state.secondString}/>
        <PaperSheet result={d[this.state.firstString.length][this.state.secondString.length]}/>
      </div>
    );
  }
}
