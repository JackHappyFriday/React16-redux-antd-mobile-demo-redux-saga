/**
 * @author jack
 * @date 2019-05-15
 * @description GridItemJ Grid控件的单个item渲染
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'antd-mobile';
import { getExpHeaderOrLineIcon } from '@utils/iconUtils';
import Styled from './GridItemJ.module.less';

const GridItemJ = (props) => {
  const { dataItem } = props;
  const badgeValue = dataItem.badge;
  const iconName = dataItem.attachment_url;
  const typeText = dataItem.type;
  return (
    <div className={Styled['item-main']}>
      <div className={Styled['item-badge']}>{badgeValue > 0 ? <Badge text={badgeValue} /> : null}</div>
      <div className={Styled['item-content']}>
        <img className={Styled['item-img']} src={getExpHeaderOrLineIcon(iconName)} alt="" />
        <div className={Styled['item-span-div']}>
          <span className={Styled['item-span']}>{typeText}</span>
        </div>
      </div>
    </div>
  );
};

GridItemJ.propTypes = {
  dataItem: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

GridItemJ.defaultProps = {};

export default GridItemJ;
