import React, { Component } from "react";
import "./Editor.css";

class Editor extends Component {
  constructor(props) {
    super(props);

    this.handleWordsChange = this.handleWordsChange.bind(this);
    this.handleLettersChange = this.handleLettersChange.bind(this);
  }

  handleWordsChange(event) {
    let input = event.target.value;
    input = input.split("\n");
    this.props.onWordsChange(input);
  }

  handleLettersChange(event) {
    let input = event.target.value;
    input = input.split("\n");
    let grid = new Array(input.length);
    for (let row = 0; row < grid.length; row++) {
      grid[row] = Array(input[row].length);
      for (let col = 0; col < grid[row].length; col++) {
        grid[row][col] = input[row].charAt(col);
      }
    }
    this.props.onLettersChange(grid);
  }

  render() {
    let formattedWords = this.props.words[0];
    for (let i = 1; i < this.props.words.length; i++) {
      formattedWords += "\n";
      formattedWords += this.props.words[i];
    }
    let formattedLetters = "";
    for (let row = 0; row < this.props.letters.length; row++) {
      for (let col = 0; col < this.props.letters[row].length; col++) {
        formattedLetters += this.props.letters[row][col];
      }
      if (row < this.props.letters.length - 1) formattedLetters += "\n";
    }

    const gridInput = (
      <form>
        <h3>Edit Letters</h3>
        <textarea
          value={formattedLetters}
          onChange={this.handleLettersChange}
        />
      </form>
    );
    const wordInput = (
      <form>
        <h3>Edit Words</h3>
        <textarea value={formattedWords} onChange={this.handleWordsChange} />
      </form>
    );
    return (
      <div class="Editor">
        {gridInput}
        {wordInput}
      </div>
    );
  }
}

export default Editor;
