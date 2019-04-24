import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import ReactDOM from "react-dom";
import AppContent from "./appContent";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <AppContent />
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
