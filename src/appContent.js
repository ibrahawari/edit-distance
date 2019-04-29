import React from "react";
import { editDistance } from "./utils/editDistance";
import * as textFields from "./textFields";

export default class AppContent extends React.Component {
  constructor() {
    super();
    console.log(editDistance("sitting", "kitten"));
  }
  render() {
    const TextFields = textFields.default;
    return (<TextFields />);
  }
}
