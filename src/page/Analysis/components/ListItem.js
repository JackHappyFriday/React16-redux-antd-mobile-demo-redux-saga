import React, { PureComponent } from 'react';

export default class ListItem extends PureComponent {
  render() {
    // eslint-disable-next-line
    const { text } = this.props;
    return <li>{text}</li>;
  }
}
