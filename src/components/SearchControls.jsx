import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SearchControls extends Component {
  constructor(props) {
    super(props);

    this.handleStartSearch = this.handleStartSearch.bind(this);
    this.handleStopSearch = this.handleStopSearch.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleSelectedWordChange = this.handleSelectedWordChange.bind(this);

    this.state = {
      speed: this.props.speed,
      words: this.props.words,
      selectedWord: this.props.selectedWord,
      searching: this.props.searching,
    };
  }

  handleStartSearch() {
    let newState = this.state;
    newState.searching = true;
    this.setState(newState);

    this.props.onStartSearch();
  }

  handleStopSearch() {
    let newState = this.state;
    newState.searching = false;
    this.setState(newState);

    this.props.onStopSearch();
  }

  handleSpeedChange(event) {
    this.props.onSpeedChange(event.target.value);
  }

  handleSelectedWordChange(event) {
    this.props.onSelectedWordChange(event.target.value);
  }

  render() {
    let button;
    if (this.props.searching) {
      button = (
        <Button variant="danger" onClick={this.handleStopSearch}>
          End Search
        </Button>
      );
    } else {
      button = (
        <Button variant="primary" onClick={this.handleStartSearch}>
          Start Search
        </Button>
      );
    }

    return (
      <Card>
        <Card.Header>Search Controls</Card.Header>
        <Card.Body>
          <Card.Title>Word Selector</Card.Title>
          <Card.Text>
            Use the select menu below to pick which word to search the puzzle
            for.
          </Card.Text>
          <>
            <Form.Select
              aria-label="Word Selector"
              onChange={this.handleSelectedWordChange}
            >
              {this.props.words.map((word) => (
                <option
                  value={word}
                  selected={word === this.props.selectedWord}
                >
                  {word}
                </option>
              ))}
            </Form.Select>
          </>
          <Card.Title className="mt-3">Speed</Card.Title>
          <Card.Text>
            Pick how fast the computer should be. Move the slider all the way to
            the right to solve the problem instantly. For larger problems and/or
            smaller words, I recommend using higher speeds.
          </Card.Text>
          <>
            <Form.Range
              defaultValue={this.state.speed}
              min={0}
              max={500}
              step={5}
              onChange={this.handleSpeedChange}
            />
          </>
          <Card.Title>Search</Card.Title>
          <Card.Text>Watch how the computer solves the puzzle!</Card.Text>
          <>{button}</>
        </Card.Body>
      </Card>
    );
  }
}
export default SearchControls;
