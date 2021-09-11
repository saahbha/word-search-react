import React, { Component } from "react";
import "./Puzzle.css";

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
    return <>{grid}</>;
  }
}

export default Puzzle;
