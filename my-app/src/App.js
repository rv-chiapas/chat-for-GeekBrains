import React, { Component } from 'react';
import './styles.css';
import ChatLayout from './components/ChatLayout';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ChatLayout />
    );
  }
}