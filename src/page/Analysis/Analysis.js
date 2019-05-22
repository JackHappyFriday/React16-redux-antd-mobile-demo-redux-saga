/**
 * @description: 页面分析
 * @author jack
 * @date 2019/4/17
 * function(item, i) {

 return i

})
*/

import React, { Component } from 'react';
import ListItem from './components/ListItem';

const renderLength = 50;

function arrayGenerator(length) {
  return Array(...Array(length)).map(Number.call, Number);
}

class Analysis extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiplier: 1,
    };
  }

  componentDidMount() {

  }

  resetMultiplier() {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line
      const { whyDidYouUpdate } = require('why-did-you-update');
      whyDidYouUpdate(React);
    }
    this.setState({ multiplier: 2 });
  }

  render() {
    const { multiplier } = this.state;
    console.log('arrayGenerator(renderLength)', arrayGenerator(renderLength));
    return (
      <div className="AnalysisCss">
        <button type="button" onClick={this.resetMultiplier.bind(this)}>Click Me</button>
        <ul>
          <div><span>主列表</span>
            {
              arrayGenerator(renderLength).map((i) => {
                return <ListItem key={i} text={i} />;
              })
            }
          </div>
          <div><span>子列表</span>
            {
              arrayGenerator(renderLength).map((i) => {
                return <ListItem key={i} text={i + multiplier} />;
              })
            }
          </div>
        </ul>
      </div>
    );
  }
}

export default Analysis;
