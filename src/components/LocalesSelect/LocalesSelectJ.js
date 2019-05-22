/**
 * @since 20190509
 * @description 语言设置
 */
import React, { PureComponent } from 'react';
import { List, Radio, Button, WhiteSpace } from 'antd-mobile';
import intl from 'react-intl-universal';
import PropTypes from 'prop-types';
import storage from '@utils/storageUtils';
import IconFontJ from '@components/IconFont';
import { LANG_TYPE_DEFAULT, LANG_STORAGE_DEFAULT, LANG_SUPPORT } from '@/constants/constants';
import locales from '../../locales/localeResource';
import Styled from './LocalesSelectJ.module.less';

const { RadioItem } = Radio;
class LocalesSelectJ extends PureComponent {
  static propTypes = {
    refreshHeaderFun: PropTypes.func,
  }

  static defaultProps = {
    refreshHeaderFun: null,
  }

  constructor(props) {
    super(props);
    // 获取storage中的语言常量
    const storageLangType = storage.getItem(LANG_STORAGE_DEFAULT.lang_type);
    this.state = {
      key: '1',
      currentLocale: storageLangType || LANG_TYPE_DEFAULT,
      locales_support_array: LANG_SUPPORT || [], // 所有支持的语言类型，下面可以根据实际情况显示哪些类型
    };
  }

  componentDidMount() {}

  /**
   * 点击语言切换后
   * locale重新初始化配置
   */
  loadLocales = (locale) => {
    const { currentLocale } = this.state;
    if (!locale) {
      locale = currentLocale;
    }
    intl.init({
      currentLocale: locale,
      locales,
    }).then(() => {
      this.setState({ key: Math.random() });
    });
  };

  onChangLanguage = (item) => {
    const { refreshHeaderFun } = this.props;
    storage.setItem(LANG_STORAGE_DEFAULT.lang_type, item.value);
    this.loadLocales(item.value);
    // 为了刷新title的字体改变语言
    refreshHeaderFun();
  }

  render() {
    const { locales_support_array, key } = this.state;
    const storageLangType = storage.getItem(LANG_STORAGE_DEFAULT.lang_type);
    return (
      <List
        key={key}
        className={Styled['locale-main']}
        renderHeader={() => {
          return (
            <div className={Styled['locale-header-tip']}>
              <IconFontJ type="icon-tixing2" />&nbsp;&nbsp;
              <span>{intl.get('tip.langtip')}</span>
            </div>
          );
        }}
      >
        {
          locales_support_array.map((item) => {
            // eslint-disable-next-line
            const srcPath = require(`../../assets/icons/${item.classname}.png`);
            return (
              <RadioItem
                key={item.value}
                checked={storageLangType === item.value}
                onChange={() => this.onChangLanguage(item)}
              >
                <img src={srcPath} alt=" " /> &nbsp;&nbsp;&nbsp;&nbsp;{item.name}
              </RadioItem>
            );
          })
        }
        <WhiteSpace size="lg" />
        <Button
          onClick={() => {
            window.location.reload();
          }}
        >
          <IconFontJ type="icon-shuaxin" play={IconFontJ.ALTERNATE} style={{ fontSize: '1.2rem' }} /> {intl.get('button.refresh')}
        </Button>
        <div style={{ height: '2rem', marginTop: '1rem', textAlign: 'center', color: 'red' }}>
          测试点击后显示变化：【 {storageLangType} 】 {intl.get('test', { name: 'ceshi' })}
        </div>
      </List>
    );
  }
}


export default LocalesSelectJ;
