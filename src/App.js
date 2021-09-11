import React, { Component } from "react";

import Puzzle from "./components/Puzzle";
import ProblemControls from "./components/ProblemControls"
import SearchControls from "./components/SearchControls";
import WordSearch from "./algorithms/WordSearch";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleStartSearch = this.handleStartSearch.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleSelectedWordChange = this.handleSelectedWordChange.bind(this);
    this.handleSelectedProblemChange = this.handleSelectedProblemChange.bind(this);

    this.state = {
      words: [],
      letters: [[]],
      colors: [[]],
      speed: 350,
      selectedWord: '',
    };
  }

  componentDidMount() {
    let initState = this.state;
    initState.words = ["Purdue", 'hey', 'yeh', 'zop', 'poz', 'don', 'nod', 'mnd', 'aor'];
    initState.letters = [
        ['D','R','L','B','V','W','R'],
        ['P','E','E','K','P','E','E'],
        ['O','U','D','K','P','S','L'],
        ['U','A','R','O','A','T','I'],
        ['L','E','Z','D','N','M','O'],
        ['Y','D','N','I','U','E','B'],
        ['I','O','P','H','H','E','Y'],
      ];
      initState.colors = Array(initState.letters.length);
      for (let row = 0; row < initState.colors.length; row++) {
        initState.colors[row] = Array(initState.letters[row].length);
        for (let col = 0; col < initState.letters[row].length; col++) {
          initState.colors[row][col] = '';
        }
      }
      initState.selectedWord = initState.words[0];
      this.setState(initState);
  }
  handleStartSearch() {
    let target = this.state.selectedWord.toUpperCase().split(" ").join("");
    const animation = WordSearch.find(this.state.letters, target);
    
    for (let i = 0; i < animation.length; i++) {
      setTimeout( () => {
        let newState = this.state;
        newState.colors = animation[i];
        this.setState(newState);
      }, (500-this.state.speed)*i);
    }
  }

  handleSpeedChange(newSpeed) {
    let newState = this.state;
    newState.speed = newSpeed;
    this.setState(newState);
  }

  handleSelectedWordChange(newWord) {
    let newState = this.state;
    newState.selectedWord = newWord;
    this.setState(newState);
  }

  handleSelectedProblemChange(newProblem) {
    let newState = this.state;
    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <ProblemControls
            onSelectedProblemChange = {this.handleSelectedProblemChange}
            />
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 0 }}>
              <Puzzle
                letters = {this.state.letters}
                colors = {this.state.colors}
              />
            </Col>
            <Col md={{ span: 3, offset: 0 }}>
              <SearchControls
                words = {this.state.words}
                speed = {this.state.speed}
                onSelectedWordChange = {this.handleSelectedWordChange}
                onSpeedChange = {this.handleSpeedChange}
                onStartSearch = {this.handleStartSearch}
              />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
