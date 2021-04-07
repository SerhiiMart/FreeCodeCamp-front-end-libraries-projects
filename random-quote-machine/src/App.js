
import React, { Component } from 'react';
import './App.css';
import {random} from 'lodash';
import Button from './components/Button';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      selectedQuoteIndex: null
    }
  }
  componentDidMount = () => {
    fetch( 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json').then(data => data.json())
    .then(quotes => this.setState({quotes}, () =>{
      this.setState({ selectedQuoteIndex : this.selectedQuoteIndex})
    } ))
  }

  selectQuoteIndex = () =>{
    if (!this.quotes.length) { return };
    return random(0, this.quotes.length - 1);
  }
  
    render() {
      return (
        <div className="App" id="quote-box">
        <Button  buttonDispName='Next Quote' clickHandler={this.nextQuoteClick} />               
        </div>
      );
    }
}
export default App;
