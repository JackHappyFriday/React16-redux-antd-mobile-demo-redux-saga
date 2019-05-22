/**
 * 20190510
 * 判断是什么平台 工具类
 * @returns {boolean}
 */

/**
 * 判断是否是钉钉
 * @returns {boolean}
 */
export function isDD() {
  if (process.env.ENV === 'dd') {
    return true;
  }
  return false;
}

/**
 * 判断是否微信登陆
 * @returns {boolean}
 */
export function isWeiXin() {
  const ua = window.navigator.userAgent.toLowerCase();
  if ((ua && ua.match(/MicroMessenger/i) === 'micromessenger')) {
    return true;
  }
  return false;
}

/**
 * 平台是否显示Header，可以在这里增加，返回 true 隐藏
 * @returns {boolean}
 */
export function isHiddenHeader() {
  // 暂时 钉钉/微信 隐藏
  if (isDD() || isWeiXin()) {
    return true;
  }
  return false;
}

export function setWXTitleTest(title) {
  document.title = title;
  // 针对微信中的处理
  const iframe = document.createElement('iframe');
  iframe.src = '';
  iframe.style.display = 'none';
  iframe.onload = () => {
    setTimeout(() => {
      iframe.remove();
    }, 9);
  };
  document.body.appendChild(iframe);
}

/**
 * 设置微信环境/钉钉环境设置标题
 * @param title
 */
export function setWXTitle(title) {
  if (isWeiXin()) {
    document.title = title;
    const mobile = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(mobile)) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      // 替换成站标favicon路径或者任意存在的较小的图片即可
      iframe.setAttribute('src', '../favicon.ico');
      const iframeCallback = function () {
        setTimeout(function () {
          iframe.removeEventListener('load', iframeCallback);
          document.body.removeChild(iframe);
        }, 0);
      };
      iframe.addEventListener('load', iframeCallback);
      document.body.appendChild(iframe);
    }
  } else {
    try {
      if (window.dd && window.dd.biz) {
        window.dd.biz.navigation.setTitle({
          title, // 控制标题文本，空字符串表示显示默认文本
          onSuccess(result) {
            console.log('setWXTitle:onSuccess', result);
          },
          onFail(error) {
            console.log('setWXTitle:onFail', error);
          },
        });
      } else {
        console.error('没有加载到钉钉环境');
      }
    } catch (errCatch) {
      console.log('设置钉钉Title异常', errCatch);
    }
  }
}
