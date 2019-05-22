/**
 * Created by jack on 2019/3/19
 */

import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format, parse, getTime } from 'date-fns/esm';
import { WhiteSpace } from 'antd-mobile';
import Styled from './PageGo.module.less';
import IconFontJ from '../../components/IconFont';
import HeaderJ from '../../components/Header';
import ArrowItemJ from '../../components/ArrowItem';
import { toastInfo } from '../../utils/toastUtils';
import '../../assets/css/publiccss.css';


class PageGo extends PureComponent {
  constructor(props) {
    super(props);
    console.log('PageGo--constructor', props);
  }

  componentDidMount() {
    console.log('PageGo--componentDidMount');
    console.log('componentDidMount', this.contentNode);
    // if (this.contentNode) {
    //   this.contentNode.addEventListener('scroll', this.onScrollHandle.bind(this));
    //   this.contentNode.scrollTop = scrollTop
    // }
  }

  componentWillUnmount() {
    // if (this.contentNode) {
    //   this.contentNode.removeEventListener('scroll', this.onScrollHandle.bind(this));
    //   scrollTop = this.contentNode.scrollTop
    // }
  }

  render() {
    const { history } = this.props;
    return (
      <Fragment>
        <div className="jp-container">
          <HeaderJ {...this.props} titleId="title.component_desc" showLeft={false} />
          <div
            className="jp-content"
            ref={node => {
              this.contentNode = node;
            }}
          >
            <div className={Styled.title}>组件使用说明</div>
            <WhiteSpace />
            <div>
              <span
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
                className={Styled['back-home']}
                onClick={() => history.push('/')}
              >
                点我到首页
              </span>
            </div>
            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>1.时间格式化（date-fns）</span>
              <span className={Styled['itemWarp-span2']}>{format(new Date(), 'yyyy/MM/dd HH:mm:ss')}</span>
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>2.日期格式化成时间戳（date-fns）</span>
              <span className={Styled['itemWarp-span2']}> {getTime(parse('2016-11-05', 'yyyy-MM-dd', new Date()))}</span>
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>3.iconfont字库（html方式调用）</span>
              <span> <span className="iconfont icon-report" /> </span>
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                4.iconfont字库（IconFontJ组件方式调用）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <IconFontJ type="icon-report" />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                5.iconfont字库（组件方式调用带动画）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <div>
                <IconFontJ type="icon-loadd" play={IconFontJ.SPIN} style={{ fontSize: '1.6rem' }} />
                &nbsp;&nbsp;&nbsp;&nbsp;<IconFontJ type="icon-piliang-copy" play={IconFontJ.SPIN1} />
                &nbsp;&nbsp;&nbsp;&nbsp;<IconFontJ type="icon-piliang-copy" play={IconFontJ.SPIN2} />
              </div>
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                6.ArrowItemJ（右箭头组件）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                itemData={{ text: 'Title text',
                  classname: 'icon-info',
                  description: 'I am a description',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>7.多语言设置</span>
              <ArrowItemJ
                itemData={{ text: '多语言设置',
                  icon: 'lang.png',
                  description: '多语言设置实例,使用[react-intl-universal]，好处是在什么地方都可以随时国际化',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/locale');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>8.ArrowItemJ（页面路由）</span>
              <ArrowItemJ
                itemData={{ text: '页面路由',
                  classname: 'icon-info',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>9.登录页面（页面）</span>
              <ArrowItemJ
                itemData={{ text: '登录页面',
                  classname: 'icon-info',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/login');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>10.圆形加载样式（LoadingJRound组件）</span>
              <ArrowItemJ
                itemData={{ text: '圆形加载样式',
                  classname: 'icon-info',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/loadround');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>11.横线加载样式（LoadingJLine组件）</span>
              <ArrowItemJ
                itemData={{ text: '横线加载样式',
                  classname: 'icon-info',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/loadline');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>12.antd-mobile 加载样式</span>
              <ArrowItemJ
                itemData={{ text: 'antd-mobile 加载页面',
                  description: '个人感觉丑，可以根据实例自行扩展',
                  classname: 'icon-info',
                  multipleLine: true,
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/loadantd');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>13.带版本号 加载样式</span>
              <ArrowItemJ
                itemData={{ text: '带版本号 加载样式',
                  description: '目前可用组件[LoadingRound，LoadingLine]',
                  classname: 'icon-info',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/loadversion');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>14.Form页面（Form页面）</span>
              <ArrowItemJ
                itemData={{ text: 'Form页面',
                  classname: 'icon-info',
                  description: 'Form页面比较难，还有些问题需要处理',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/form');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>15.全局异常错误处理页面（页面）</span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: '全局异常错误处理页面',
                  classname: 'icon-info',
                  description: '',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/error');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>16.下拉刷新页面（页面）</span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: '下拉刷新页面',
                  classname: 'icon-info',
                  description: '',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/pullfresh');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                17.图片预览（页面）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: '图片预览',
                  classname: 'icon-info',
                  description: '',
                  style: { fontSize: '1.2rem', color: '##99ff0d' } }}
                clickFun={() => {
                  history.push('/imagepreview');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                18.Button（页面）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: 'Button',
                  classname: 'icon-info',
                  description: '',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/button');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                19.普通图片加载（页面）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: '普通图片加载',
                  classname: 'icon-info',
                  description: '',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/img');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                20.顶部显示多操作按钮（页面）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: '顶部显示多操作按钮',
                  classname: 'icon-info',
                  description: '顶部显示多操作按钮，由于H5在某些情况下不显示Header，所以不能将操作放到Header区域',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  toastInfo('待开发...');
                }}
              />
            </div>
            <WhiteSpace />

            <div className={Styled.itemWarp}>
              <span className={Styled['itemWarp-span1']}>
                21.Toast展示（页面）
                <IconFontJ type="icon-tuijian-copy" style={{ color: '#F00', fontSize: '1.5rem' }} />
              </span>
              <ArrowItemJ
                {...this.props}
                itemData={{ text: 'Toast展示',
                  classname: 'icon-info',
                  description: 'Toast展示',
                  style: { fontSize: '1.2rem', color: '#99ff0d' } }}
                clickFun={() => {
                  history.push('/toast');
                }}
              />
            </div>
            <WhiteSpace />

            <div>
              <span
                role="button"
                tabIndex="0"
                onKeyDown={() => {}}
                className={Styled['back-home']}
                onClick={() => history.push('/')}
              >
                点我到首页
              </span>
            </div>
          </div>
          {/* <div className="jp-footer" /> */}
        </div>
      </Fragment>
    );
  }
}

PageGo.propTypes = {
  children: PropTypes.any, // eslint-disable-line
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps() {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(PageGo);
