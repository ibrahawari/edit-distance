import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
});

class TextFields extends React.Component {
  state = {
    firstString: "",
    secondString: "",
  };

  handleChange = stateProp=> event => {
    this.setState({ [stateProp]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="First String"
          className={classes.textField}
          value={this.state.firstString}
          onChange={this.handleChange("firstString")}
          margin="normal"
        />

        <TextField
          id="standard-name"
          label="Second String"
          className={classes.textField}
          value={this.state.secondString}
          onChange={this.handleChange("secondString")}
          margin="normal"
        />
      </form>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextFields);
