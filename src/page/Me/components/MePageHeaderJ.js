/**
 * @author jack
 * @date 2019-05-21
 * @description 我页面，图像显示部分
 */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconImage from '@components/IconImage';
import { postAttachmentApi } from '@api';
import storageUtils from '@utils/storageUtils';
import { httpResponseError } from '@utils/httpErrorUtils';
import { STORAGE_KEY_PREFIX } from '@/constants/constants';
import Styled from './MePageHeaderJ.module.less';

class MePageHeaderJ extends PureComponent {
  constructor(props) {
    super(props);
    const header_img_url = storageUtils.getItem(STORAGE_KEY_PREFIX.header_img_url) || '';
    this.state = {
      header_img_url,
    };
  }

  componentDidMount() {
    const { userData } = this.props;
    const { header_img_url } = this.state;
    const attachment_url = userData.attachment_url || '';
    if (attachment_url && !header_img_url) {
      const param = {
        attachment: [attachment_url],
      };
      postAttachmentApi(param).then(response => {
        // console.log('attachment_url', response);
        const response_img_obj = response && response.data;
        const response_img_url = response_img_obj && response_img_obj[attachment_url];
        storageUtils.setItem(STORAGE_KEY_PREFIX.header_img_url, response_img_url);
        this.setState({
          header_img_url: response_img_url,
        });
      }).catch(error => {
        httpResponseError(error);
      });
    }
  }

  render() {
    const { userData } = this.props;
    const { header_img_url } = this.state;
    // attachment_url
    return (
      <div className={Styled['mePageHeader-j-main']}>
        <div className={Styled['left']}>
          <div>{userData && userData.full_name}</div>
          <div>{process.env.ENV === 'wx' || process.env.ENV === 'wxqa'
            ? userData && userData.company.company_name
            : userData && userData.user_name}
          </div>
        </div>
        <div className={Styled['right']}>
          { header_img_url ? <IconImage src={header_img_url} classname={Styled['icon-img']} /> : null}
          <span className={Styled['right-span']}>{userData && userData.full_name && userData.full_name.substring(0, 1)}</span>
        </div>
      </div>
    );
  }
}

MePageHeaderJ.propTypes = {
  userData: PropTypes.objectOf(PropTypes.any).isRequired,
};

MePageHeaderJ.defaultProps = {};

export default MePageHeaderJ;
