import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import Fetch from 'react-fetch'
import ListItem from './components/ListItem';



const path = require('path');
const API = path.join(__dirname, 'words.json');

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: [],
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
        console.log(data.words);
        const stringifiedData = JSON.stringify(data.words);
        const notStringifiedData = data.words;
        console.log(stringifiedData);
        this.setState({ words: notStringifiedData, isLoading: false })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { words, isLoading, error } = this.state;

      console.log(words);
     if (error) {
       return <p>{error.message}</p>;
     }

     if (isLoading) {
       return <p>Loading ...</p>;
     }

      return (
        <div>
          <div>
            {
            this.state.words
            }
        </div>
        <div>
          {words.map(word =>
            <p key={word}>{word}</p>
          )}
        </div>
        </div>
      );
    }
}


ReactDOM.render(<App />, document.getElementById('app'));
