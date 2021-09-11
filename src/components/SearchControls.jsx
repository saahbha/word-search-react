import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class SearchControls extends Component {
  constructor(props) {
    super(props);

    this.handleStartSearch = this.handleStartSearch.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleSelectedWordChange = this.handleSelectedWordChange.bind(this);

    this.state = {
      speed: this.props.speed,
      words: this.props.words,
    };
  }

  handleStartSearch() {
    this.props.onStartSearch();
  }

  handleSpeedChange(event) {
    this.props.onSpeedChange(event.target.value);
  }

  handleSelectedWordChange(event) {
    this.props.onSelectedWordChange(event.target.value);
  }

  render() {
    return (
      <>
        <Form.Select
          aria-label="Word Selector"
          onChange={this.handleSelectedWordChange}
        >
          {this.props.words.map((word) => (
            <option value={word}>{word}</option>
          ))}
        </Form.Select>
        <Form.Range
          defaultValue={this.state.speed}
          min={0}
          max={500}
          step={10}
          onChange={this.handleSpeedChange}
        />
        <Button variant="primary" onClick={this.handleStartSearch}>
          Start/End Search
        </Button>
      </>
    );
  }
}
export default SearchControls;
