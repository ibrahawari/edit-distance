import React from "react";
import PropTypes from "prop-types";
import { withStyles, MuiThemeProvider } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme } from "@material-ui/core/styles";

const dark = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
    width: 50,
    height: 50
  }
});

function PaperGrid(props) {
  const { classes } = props;

  return (
    <table>
      {createTable(
        classes,
        props.matrix,
        props.firstString,
        props.secondString
      )}
    </table>
  );
}

function createTable(classes, matrix, _firstString, _secondString) {
  let table = [];
  for (let i = 0; i < matrix.length; i++) {
    let children = [];
    for (let j = 0; j < matrix[0].length; j++) {
      children.push(
        <td>
          <MuiThemeProvider theme={dark}>
            <Paper className={classes.root} elevation={1}>
              <Typography variant="h6">{matrix[i][j]}</Typography>
            </Paper>
          </MuiThemeProvider>
        </td>
      );
    }
    table.push(<tr>{children}</tr>);
  }
  return table;
}

PaperGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperGrid);
