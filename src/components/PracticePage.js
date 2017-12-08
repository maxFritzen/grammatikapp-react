import React from 'react';
import Header from './Header';
import List from './List';
import LoadingPage from './LoadingPage';


const path = require('path');
const API = path.join(__dirname, 'words.json');

export default class PracticePage extends React.Component {
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
  handleClick = (word) => {
    console.log('clicked', word);
    this.setState({ selectedWord: word });
    this.setState( { showSelectedWord: true });
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
      return <LoadingPage />;
    }
    const res = (this.state.result ? 'Rätt!' : 'Fel, försök igen');
    return (
      <div>
        <Header />
          <div className="page-header">
            <h1 className="page-header__title">{this.state.correctWord.word}</h1>
          </div>

          <List
            handleClick={this.handleClick}
            />


            <div className="actions">
              <button
                className="button"
                onClick={this.handleNewWord}
                >
                  Nytt ord
                </button>

              <button
                className="button"
                onClick={this.handleCorrecting}
                >
                  Rätta
                </button>
              </div>

              <div className="result">
                <p className="result__title">{this.state.showResult && res} </p>
              </div>
          </div>

    );
  }
}
