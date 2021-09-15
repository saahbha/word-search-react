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

    this.setColor = this.setColor.bind(this);

    this.state = this.initState();
  }

  componentDidMount() {
    this.setState(this.initState());
  }

  initState() {
    let initState = {
      words: [],
      letters: [[]],
      colors: [[]],
      selectedWord: '',
      speed: 0,
      selectedWord: '',
      shouldShow: false,
      animator: [],
      searching: false,
    };
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
    initState.colors = this.emptyColors(initState.letters);
    initState.selectedWord = initState.words[0];
    initState.speed = 400;
    initState.shouldShow = false;
    initState.animator = [];
    initState.searching = false;
    return initState;
  }

  handleHide() {
    this.handleStopSearch();
    let newState = this.initState();
    newState.shouldShow = false;
    this.setState(newState);
  }

  handleShow() {
    let newState = this.state;
    newState.shouldShow = true;
    this.setState(newState);
  }

  handleStartSearch() {
    this.handleStopSearch();
    let target = this.state.selectedWord.toUpperCase().split(" ").join("");
    const animation = WordSearch.find(this.state.letters, target);
    
    if (this.state.speed == 500) {
      this.setColor(animation[animation.length-1]);
    } else {
      let newState = this.state;
      newState.searching = true;
      for (let i = 0; i < animation.length; i++) {
        newState.animator.push(setTimeout( () => {
          this.setColor(animation[i]);
          if (i == animation.length-1) {
            let finishedSearchingState = this.state;
            finishedSearchingState.searching = false;
            this.setState(finishedSearchingState)
          }
        }, (500-this.state.speed)*i));      
      }
      this.setState(newState);
    }
  }

  setColor(frame) {
    let newState = this.state;
    newState.colors = frame;
    this.setState(newState);
  }

  handleStopSearch() {
    let newState = this.state;
    newState.searching = false;
    for (let frame = 0; frame < newState.animator.length; frame++) {
      clearTimeout(newState.animator[frame]);
    }
    newState.colors = this.emptyColors(newState.letters);

    this.setState(newState);
  }

  emptyColors(letters) {
    let emptyColors = Array(letters.length);
    for (let row = 0; row < letters.length; row++) {
      emptyColors[row] = Array(letters[row].length);
      for (let col = 0; col < letters[row].length; col++) {
        emptyColors[row][col] = '';
      }
    }
    return emptyColors;
  }

  handleSpeedChange(newSpeed) {
    this.handleStopSearch();
    let newState = this.state;
    newState.speed = newSpeed;
    this.setState(newState);
  }

  handleSelectedWordChange(newWord) {
    this.handleStopSearch();
    let newState = this.state;
    newState.selectedWord = newWord;
    this.setState(newState);
  }

  handleSelectedProblemChange(newProblem) {
    this.handleStopSearch();
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
        <Button onClick={this.handleShow}>Launch Word Search React App</Button>
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
                      searching = {this.state.searching}
                      selectedWord = {this.state.selectedWord}
                      onSelectedWordChange = {this.handleSelectedWordChange}
                      onSpeedChange = {this.handleSpeedChange}
                      onStartSearch = {this.handleStartSearch}
                      onStopSearch = {this.handleStopSearch}
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
