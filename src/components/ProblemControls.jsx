import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import defaultProblem from "../problems/default.txt";
import codinglanguages from "../problems/coding-languages.txt";
import famousArtists from "../problems/famous-artists.txt";
import famousBooks from "../problems/famous-books.txt";

class ProblemControls extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedProblemChange =
      this.handleSelectedProblemChange.bind(this);
  }

  async handleSelectedProblemChange(event) {
    let problem = await this.getTextFrom(event.target.value);
    problem = this.parseTextToProblem(problem);
    this.props.onSelectedProblemChange(problem);
  }

  async getTextFrom(location) {
    let response = await fetch(location)
      .then((response) => response.text())
      .catch((err) => console.log(err));
    return response;
  }

  parseTextToProblem(text) {
    let lines = text.split("\n");

    let letterGrid = [];
    let i = 0;
    do {
      let letters = lines[i].trim().split("");
      letterGrid.push(letters);
      i++;
    } while (!/^\s*$/.test(lines[i]));
    i++;
    let words = [];
    do {
      let word = lines[i].trim();
      words.push(word);
      i++;
    } while (lines[i] && lines[i].trim());
    let problem = {};
    problem.letters = letterGrid;
    problem.words = words;
    return problem;
  }

  render() {
    return (
      <Card>
        <Card.Header>Problem Controls</Card.Header>
        <Card.Body>
          <Card.Title>Problem Selector</Card.Title>
          <Card.Text>
            Use the select menu below to change the problem. Right now there are
            only 4 problems to choose from. But soon you'll be able to create
            your own!
          </Card.Text>
          <Form.Select
            aria-label="Problem Selector"
            onChange={this.handleSelectedProblemChange}
          >
            <option value={defaultProblem}>Default</option>
            <option value={codinglanguages}>Coding Languages</option>
            <option value={famousArtists}>Famous Artists</option>
            <option value={famousBooks}>Famous Books</option>
          </Form.Select>
        </Card.Body>
      </Card>
    );
  }
}
export default ProblemControls;
