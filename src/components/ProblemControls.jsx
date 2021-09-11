import React, { Component } from "react";
import Form from "react-bootstrap/Form";

class ProblemControls extends Component {
  constructor(props) {
    super(props);

    this.handleSelectedProblemChange =
      this.handleSelectedProblemChange.bind(this);

    this.state = {};
  }

  handleSelectedProblemChange(event) {
    const file = event.target.value;

    let request = new XMLHttpRequest();
    request.open("GET", file, true);
    request.send(null);
    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        let type = request.getResponseHeader("Content-Type");
        if (type.indexOf("text") !== 1) {
          let text = request.responseText;
          console.log(text);
        }
      }
    };

    this.props.onSelectedProblemChange(event);
  }

  render() {
    return (
      <Form.Select
        aria-label="Problem Selector"
        onChange={this.handleSelectedProblemChange}
      >
        <option value="">Default</option>
        <option value="">Coding Languages</option>
        <option value="">Famous Artists</option>
        <option value="">Famous Books</option>
      </Form.Select>
    );
  }
}
export default ProblemControls;
