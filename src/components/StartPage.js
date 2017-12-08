import React from 'react';
import Header from './Header';
import List from './List';
import PracticePage from './PracticePage';

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
  render() {
    return (
      <div>
        <Header />
        <p>Information kring vad man kan göra typ. Förklara övning och test.</p>
      </div>
    );
  }
}
