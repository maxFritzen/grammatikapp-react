import React from 'react';
import ListItem from './ListItem';

const path = require('path');
const API = path.join(__dirname, 'words.json');

export default class List extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        substantiv: [],
        adjektiv: [],
        verb: [],
        selectedWord: '',
        correctWord: 'häst',
        result: false,
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
  randomWord = () => {
    const arrayOfAllWords = [
      ...this.state.substantiv,
      ...this.state.adjektiv,
      ...this.state.verb
    ];
    const randomWord =  arrayOfAllWords[Math.floor(Math.random() * (arrayOfAllWords.length))];
    this.setState({ correctWord: randomWord });
  };
  // randomWord = (array) => {
  //   const randomWord =  array[Math.floor(Math.random() * (array.length))];
  //   this.setState({ correctWord: randomWord });
  // };
  handleClick = (word) => {
    console.log('clicked', word);
    this.setState({ selectedWord: word });
  }
  handleCorrecting = () => {
    const correctWord = this.state.correctWord;
    const selectedWord = this.state.selectedWord
    console.log('handleCorrecting');
    console.log(correctWord);
    console.log(selectedWord);

    if (correctWord === selectedWord) {
      this.setState( { result: true });
      console.log(this.state.result);
    } else {
      this.setState( { result: false });
    }
  }

  render() {

     if (this.state.error) {
       return <p>{error.message}</p>;
     }
     if (this.state.isLoading) {
       return <p>Loading ...</p>;
     }
     const res = 'resultat: ' + (this.state.result ? 'Rätt!' : 'Fel');
      return (

        <div>
          <h1>List item</h1>
          <div>
            <ListItem word={this.state.substantiv[1]} onClick={() => this.handleClick(this.state.substantiv[1])}/>
            <ListItem word={this.state.substantiv[0]} onClick={() => this.handleClick(this.state.substantiv[0])}/>
            <button onClick={this.randomWord}>Nytt ord</button>
            <button onClick={this.handleCorrecting}>Rätta</button>
            <p>Clicked word: {this.state.selectedWord} </p>
            <p>Correct word: {this.state.correctWord}</p>
            <h2>{res}</h2>
            <p>Substantiv: {this.state.substantiv.map((word => {
              return <li key={word}>{word}</li>
              }))
            }</p>

          </div>

        </div>
      );
    }
}
