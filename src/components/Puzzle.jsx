import React, { Component } from "react";
import "./Puzzle.css";
import Card from "react-bootstrap/Card";

class Puzzle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      letters: this.props.letters,
      colors: this.props.colors,
    };
  }

  render() {
    const grid = (
      <div class="Puzzle">
        <table class="Puzzle-Grid">
          {this.props.letters.map((row, index) => (
            <tr>
              {row.map((letter, i) => (
                <th
                  class="Letter"
                  style={{ backgroundColor: this.props.colors[index][i] }}
                >
                  {letter}
                </th>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
    return (
      <Card>
        <Card.Header>Puzzle Grid</Card.Header>
        <Card.Body>
          <Card.Text>
            Here's the word search puzzle! Press the start search button to
            watch the computer find a word in this puzzle.
          </Card.Text>
          <>{grid}</>
        </Card.Body>
      </Card>
    );
  }
}

export default Puzzle;
