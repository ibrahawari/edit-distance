import { Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <Button className="square" onClick={props.onClick}>
      {props.value}
    </Button>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({ squares: squares, xIsNext: !this.state.xIsNext });
  }
  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }
    return (
      <div>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="status"
        >
          {status}
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="board-row"
        >
          <Card>{this.renderSquare(0)}</Card>
          <Card>{this.renderSquare(1)}</Card>
          <Card>{this.renderSquare(2)}</Card>
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="board-row"
        >
          <Card>{this.renderSquare(3)}</Card>
          <Card>{this.renderSquare(4)}</Card>
          <Card>{this.renderSquare(5)}</Card>
        </Grid>
        <Grid
          container
          justify="space-around"
          alignItems="center"
          className="board-row"
        >
          <Card>{this.renderSquare(6)}</Card>
          <Card>{this.renderSquare(7)}</Card>
          <Card>{this.renderSquare(8)}</Card>
        </Grid>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function MyApp() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Game />
    </React.Fragment>
  );
}

ReactDOM.render(<MyApp />, document.getElementById("root"));
