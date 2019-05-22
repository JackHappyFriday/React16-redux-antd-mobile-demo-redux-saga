/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import HeaderJ from '../../../components/Header';
import ErrorBoundary from '../../../components/ErrorBoundary';
import '../../../assets/css/publiccss.css';
import PullToRefreshJ from '../../../components/PullToRefresh';
import ArrowItem from '../../../components/ArrowItem';

const dataAllArray = [];
for (let i = 1; i <= 30; i += 1) {
  dataAllArray.push(`jack${i}`);
}

// eslint-disable-next-line
function ItemComponent(props) {
  console.log('itemComponent', props);
  // eslint-disable-next-line
  const { itemData } = props;
  return (
    <div>
      {itemData}
    </div>
  );
}

function ItemComponent2(props) {
  console.log('itemComponent', props);
  // eslint-disable-next-line
  const { itemData } = props;
  return (
    <div>
      <ArrowItem itemData={{ text: itemData }} />
    </div>
  );
}

class PullFreshPage extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PullFreshPage--constructor', props);
  }

  componentDidMount() {
    // console.log('PullFreshPage--componentDidMount')
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <Fragment>
        <ErrorBoundary>
          <div className="jp-container">
            <HeaderJ {...this.props} titleText="Pull Fresh Page" />
            <div className="jp-content">
              <PullToRefreshJ
                ItemComponent={ItemComponent2}
                dataAllArray={dataAllArray}
              />
            </div>

            {/* <div className="jp-footer" /> */}
          </div>
        </ErrorBoundary>
      </Fragment>
    );
  }
}


PullFreshPage.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PullFreshPage);
