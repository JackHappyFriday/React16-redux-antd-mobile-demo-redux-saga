/**
 * @author jack
 * @date 2019-05-15
 * @description 说明
 */
import React, { PureComponent } from 'react';
import { Grid } from 'antd-mobile';
import GridItem from '@components/GridItem';
import Styled from './GridView.module.less';
import { getExpHeaderTypeGroupBy, getGridData } from '../bussiness/dataUtils';
// Grid显示几列
const GRID_NUMBER = 3;

class GridView extends PureComponent {
  constructor(props) {
    super(props);
    console.log('GridView-page', props);
  }

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className={Styled['group-main']}>
        {
          getExpHeaderTypeGroupBy().map(item => {
            return (
              <div key={item.group_name} className={Styled['item-group-main']}>
                <div className={Styled['item-group-title']}>{item.group_name}</div>
                <Grid
                  columnNum={GRID_NUMBER}
                  renderItem={dataItem => <GridItem dataItem={dataItem} />}
                  onClick={_el => console.log(_el)}
                  data={getGridData(item.group_values)}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

GridView.propTypes = {};
GridView.defaultProps = {};

export default (GridView);
