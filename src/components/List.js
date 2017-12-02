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
        showSelectedWord: false,
        correctWord: {
          word:'häst',
          type: 'substantiv'
        },
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

  handleNewWord = () => {
    console.log('handleNewWord');
    this.setState( { showResult: false });
    this.setState( { showSelectedWord: false });
    const arrayOfAllWords = [
      ...this.state.substantiv,
      ...this.state.adjektiv,
      ...this.state.verb
    ];
    const randomWord =  arrayOfAllWords[Math.floor(Math.random() * (arrayOfAllWords.length))];

    let type;
    if (this.state.substantiv.includes(randomWord)) {
      type = 'substantiv';
    } else if (this.state.adjektiv.includes(randomWord)) {
      type = 'adjektiv';
    } else if (this.state.verb.includes(randomWord)) {
      type = 'verb';
    } else { this.setState({ error, isLoading: false }) }

    this.setState({
      correctWord: {
        word: randomWord,
        type
        }
      });
    };

  handleClick = (word) => {
    console.log('clicked', word);
    this.setState({ selectedWord: word });
    this.setState( { showSelectedWord: true });
  }

  handleCorrecting = () => {
   if ( this.state.selectedWord === this.state.correctWord.type ) {
     this.setState( { result: true });
     console.log('rätt!');
   } else {
     this.setState( { result: false });
     console.log('fel!');
   }
   this.setState( { showResult: true });
  }

  render() {

     if (this.state.error) {
       return <p>{error.message}</p>;
     }
     if (this.state.isLoading) {
       return <p>Loading ...</p>;
     }
     const res = (this.state.result ? 'Rätt!' : 'Fel');

      return (
        <div>
          <h1>List item</h1>
          <div>
            <table>
              <tbody>
              <tr>
                <ListItem word={"substantiv"} onClick={() => this.handleClick("substantiv")}/>
                <ListItem word={"verb"} onClick={() => this.handleClick("verb")}/>
                <ListItem word={"adjektiv"} onClick={() => this.handleClick("adjektiv")}/>
              </tr>
              </tbody>
            </table>
            <button onClick={this.handleNewWord}>Nytt ord</button>
            <button onClick={this.handleCorrecting}>Rätta</button>
            <p>Selected word: {this.state.showSelectedWord && this.state.selectedWord} </p>
            <p>Correct word: {this.state.correctWord.word}</p>
            <p>Correct type: {this.state.correctWord.type}</p>
            <h2>Resultat: {this.state.showResult && res} </h2>
          </div>
        </div>
      );
    }
}
