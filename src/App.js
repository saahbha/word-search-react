import React, { Component } from "react";

import Puzzle from "./components/Puzzle";
import ProblemControls from "./components/ProblemControls"
import SearchControls from "./components/SearchControls";
import WordSearch from "./algorithms/WordSearch";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.handleHide = this.handleHide.bind(this);
    this.handleShow = this.handleShow.bind(this);

    this.handleStartSearch = this.handleStartSearch.bind(this);
    this.handleStopSearch = this.handleStopSearch.bind(this);
    this.handleSpeedChange = this.handleSpeedChange.bind(this);
    this.handleSelectedWordChange = this.handleSelectedWordChange.bind(this);
    this.handleSelectedProblemChange = this.handleSelectedProblemChange.bind(this);

    this.state = {
      words: [],
      letters: [[]],
      colors: [[]],
      speed: 400,
      selectedWord: '',
      searching: false,
      shouldShow: false,
    };

    this.animator;
  }

  componentDidMount() {
    let initState = this.state;
    initState.words = [
      "Purdue", 
      "Eudrup",
      "Hey",
      "Yeh",
      "Zop",
      "Poz",
      "Don",
      "Nod",
      "Mnd",
      "Dnm",
      "Aor",
      "Roa"
    ];
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

  handleHide() {
    let newState = this.state;
    newState.shouldShow = false;
    this.setState(newState);
  }

  handleShow() {
    let newState = this.state;
    newState.shouldShow = true;
    this.setState(newState);
  }

  handleStartSearch() {
    let target = this.state.selectedWord.toUpperCase().split(" ").join("");
    const animation = WordSearch.find(this.state.letters, target);
    
    if (this.state.speed == 500) {
      let newState = this.state;
      newState.colors = animation[animation.length-1];
      this.setState(newState);
    } else {
      for (let i = 0; i < animation.length; i++) {
        this.animator = setTimeout( () => {
          let newState = this.state;
          newState.colors = animation[i];
          this.setState(newState);
        }, (500-this.state.speed)*i);      
      }
    }
  }

  //never called, not being used for now
  handleStopSearch() {
    clearTimeout(this.animator);
    let newState = this.state;

    let emptyColors = Array(newState.letters.length);
    for (let row = 0; row < newState.letters.length; row++) {
      emptyColors[row] = Array(newState.letters[row].length);
      for (let col = 0; col < newState.letters[row].length; col++) {
        emptyColors[row][col] = '';
      }
    }
    newState.colors = emptyColors;

    this.setState(newState);
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
    newState.letters = newProblem.letters;
    newState.words = newProblem.words;
    newState.selectedWord = newState.words[0];

    let emptyColors = Array(newState.letters.length);
    for (let row = 0; row < newState.letters.length; row++) {
      emptyColors[row] = Array(newState.letters[row].length);
      for (let col = 0; col < newState.letters[row].length; col++) {
        emptyColors[row][col] = '';
      }
    }
    newState.colors = emptyColors;

    this.setState(newState);
  }

  render() {
    return (
      <React.Fragment>
        <Button onClick={this.handleShow}>Run Word Search React App</Button>
        <Modal
          size="lg"
          show={this.state.shouldShow}
          onHide={this.handleHide}
        >
          <Modal.Header closeButton>
            <Modal.Title>
            Word Search React App
            </Modal.Title>
          </Modal.Header>
            <Modal.Body>
            <Container>
              <Row className="justify-content-center mb-3">
                <Col>
                  <ProblemControls
                  onSelectedProblemChange = {this.handleSelectedProblemChange}
                  />
                </Col>
              </Row>
              <Row className="justify-content-center">
                <Col>
                    <SearchControls
                      words = {this.state.words}
                      speed = {this.state.speed}
                      selectedWord = {this.state.selectedWord}
                      onSelectedWordChange = {this.handleSelectedWordChange}
                      onSpeedChange = {this.handleSpeedChange}
                      onStartSearch = {this.handleStartSearch}
                    />
                </Col>
                <Col>
                  <Puzzle
                    letters = {this.state.letters}
                    colors = {this.state.colors}
                  />
                </Col>
              </Row>
            </Container>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}

export default App;
