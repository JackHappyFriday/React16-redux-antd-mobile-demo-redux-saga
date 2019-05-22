/**
 * @author jack
 * @date 2019-05-13
 * @description 带右箭头的Item
 */
import React from 'react';
import { List } from 'antd-mobile';
import PropTypes from 'prop-types';
import IconFontJ from '../IconFont';
import Style from './ArrowItemaJ.module.less';

const ListItem = List.Item;
const ListItemBrief = ListItem.Brief;
const ArrowItemJ = (props) => {
  const { itemData, clickFun } = props;
  // eslint-disable-next-line
  const srcPath = itemData.icon ? require(`../../assets/icons/${itemData.icon}`) : null;
  return (
    <div className={Style['arrow-item-main']}>
      <ListItem
        arrow="horizontal"
        extra={itemData.extra ? itemData.extra : ''}
        thumb={
          itemData.classname ? (
            <IconFontJ
              type={itemData.classname}
              style={Object.assign({}, { fontSize: '1.5rem' }, itemData.style || {})}
            />
          ) : itemData.icon ? <img src={srcPath} alt="" /> : null
        }
        multipleLine={itemData.multipleLine}
        onClick={() => {
          if (clickFun && typeof clickFun === 'function') {
            clickFun();
          }
        }}
      >
        { itemData.text || ''}
        <ListItemBrief wrap>
          { itemData.description || ''}
        </ListItemBrief>
      </ListItem>
    </div>
  );
};

ArrowItemJ.propTypes = {
  itemData: PropTypes.objectOf(PropTypes.any).isRequired,
  clickFun: PropTypes.func,
};

ArrowItemJ.defaultProps = {
  clickFun: undefined,
};

export default ArrowItemJ;
