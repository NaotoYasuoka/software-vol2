import React from 'react';
import ReactDOM from 'react-dom';
import { Card } from 'react-onsenui';


export default class Item extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <p><strong>{this.props.text}</strong></p>
        <p>{this.props.time}</p>
      </Card>
    );
  }
}