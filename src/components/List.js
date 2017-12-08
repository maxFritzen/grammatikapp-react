import React from 'react';

export default class List extends React.Component {
  constructor() {
    super();
    this.state = {
      isSelected: null
    }
  }
  handleSelectedClass = (id) => {
    this.setState({ isSelected: id });
    console.log(id);
  }


  render() {
    return (
      <div className="list">
        <button id="substantiv" onClick={() => {this.props.handleClick("substantiv"); this.handleSelectedClass("substantiv")}} className={this.state.isSelected === "substantiv" ? 'list__item list__item--selected' : 'list__item'}>Substantiv</button>
        <button id="verb" onClick={() => {this.props.handleClick("verb"); this.handleSelectedClass("verb")}} className={this.state.isSelected === "verb" ? 'list__item list__item--selected' : 'list__item'}>Verb</button>
        <button id="adjektiv" onClick={() => {this.props.handleClick("adjektiv"); this.handleSelectedClass("adjektiv")}} className={this.state.isSelected === "adjektiv" ? 'list__item list__item--selected' : 'list__item'}>Adjektiv</button>
      </div>
    );
  }
}

// const List = (props) => (
//   <div className="list">
//     <button onClick={() => {props.handleClick("substantiv")}} className="list__item">Substantiv</button>
//     <button onClick={() => {props.handleClick("verb")}} className="list__item">Verb</button>
//     <button onClick={() => {props.handleClick("adjektiv")}} className="list__item">Adjektiv</button>
//   </div>
// );
//
// export default List;
