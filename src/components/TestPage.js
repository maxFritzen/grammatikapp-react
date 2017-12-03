import React from 'react';
import List from './List';
import Header from './Header';

const path = require('path');
const API = path.join(__dirname, 'words.json');

export default class TestPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      substantiv: [],
      adjektiv: [],
      verb: [],
      selectedWord: [],
      showSelectedWord: false,
      correctWords: {
        words: [],
        type: []
      },
      question: [],
      result: false,
      showResult: false,
      isLoading: false,
      error: null
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch(API)
    .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        this.setState({
          substantiv: data.substantiv,
          adjektiv: data.adjektiv,
          verb: data.verb,
          isLoading: false
          })
        })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  handleClick = (word) => {
    console.log('clicked', word);
    this.setState({ selectedWord: [...this.state.selectedWord, word] });
    this.setState( { showSelectedWord: true });
  }

  handleNewWord = () => {
    console.log('handleNewWord');
    this.setState( { showResult: false });
    const arrayOfAllWords = [
      ...this.state.substantiv,
      ...this.state.adjektiv,
      ...this.state.verb
    ];

    let randomWord =  arrayOfAllWords[Math.floor(Math.random() * (arrayOfAllWords.length))];

    let type;
    if (this.state.substantiv.includes(randomWord)) {
      type = 'substantiv';
    } else if (this.state.adjektiv.includes(randomWord)) {
      type = 'adjektiv';
    } else if (this.state.verb.includes(randomWord)) {
      type = 'verb';
    } else { this.setState({ error, isLoading: false }) }

    this.setState({
      correctWords: {
        words: [...this.state.correctWords.words, randomWord],
        type: [...this.state.correctWords.type, type]
        }
      });
    };

    handleCorrecting = () => {
      let result = [];
      for (let i = 0; i < this.state.selectedWord.length; i++) {
        if (this.state.selectedWord[i] === this.state.correctWords.type[i]) {
          result[i] = 'Rätt';
          console.log('rätt!');
        } else {
          result[i] = 'Fel';
          console.log('fel!');
        }
        this.setState({ question: [...this.state.question, ...result] });
      }
    }
  render() {
    if (this.state.error) {
      return <p>{error.message}</p>;
    }
    if (this.state.isLoading) {
      return <p>Loading ...</p>;
    }
    return (
      <div>
        <Header />
        <h1>Test</h1>
        <button onClick={this.handleNewWord}>Nytt ord</button>
        <button onClick={this.handleCorrecting}>Rätta!</button>
        <p>Selected type: {this.state.showSelectedWord && this.state.selectedWord} </p>
        <p>word:{this.state.correctWords.words +  ", "}</p>
        <p>type:{this.state.correctWords.type +  ", "}</p>
        <p>{this.state.question.map((number, index) =>
             <li key={index}>Fråga {index} : {number}</li>
        )}</p>
        <List
          handleClick={this.handleClick}
          />
      </div>
    );
  }
}
