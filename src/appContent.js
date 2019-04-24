import React from "react";
import { editDistance } from "./utils/editDistance";

export default class AppContent extends React.Component {
  constructor() {
    super();
    console.log(editDistance("sitting", "kitten"));
  }
  render() {
    return null;
  }
}
