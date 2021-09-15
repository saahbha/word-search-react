import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import defaultProblem from "../problems/default.txt";
import codinglanguages from "../problems/coding-languages.txt";
import famousArtists from "../problems/famous-artists.txt";
import americanRevolution from "../problems/american-revolution.txt";
import carMakes from "../problems/car-makes.txt";
import greekHistory from "../problems/greek-history.txt";
import narutoCharacters from "../problems/naruto-characters.txt";

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
            Use the select menu below to change the problem.
          </Card.Text>
          <Form.Select
            aria-label="Problem Selector"
            onChange={this.handleSelectedProblemChange}
          >
            <option value={defaultProblem}>Default (7x7)</option>
            <option value={codinglanguages}>Coding Languages (11x11)</option>
            <option value={narutoCharacters}>Naruto Characters (12x12)</option>
            <option value={carMakes}>Car Makes (15x15)</option>
            <option value={americanRevolution}>
              American Revolution (21x21)
            </option>
            <option value={greekHistory}>Greek History (22x22)</option>
            <option value={famousArtists}>Famous Artists (24x24)</option>
          </Form.Select>
        </Card.Body>
      </Card>
    );
  }
}
export default ProblemControls;
