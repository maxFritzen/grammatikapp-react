import React from 'react';
import Header from './Header';
import List from './List';
import PracticePage from './PracticePage';

const path = require('path');
const API = path.join(__dirname, 'words.json');

export default class StartPage extends React.Component {
  constructor(props) {
    super(props);

      this.state = {
        substantiv: [],
        adjektiv: [],
        verb: [],
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

  render() {
    return (
      <div>
        <Header />
        <p>Information kring vad man kan göra typ. </p>
      </div>
    );
  }
}
