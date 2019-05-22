/**
 * @author jack
 * @since 20190511
 * @description 全局 Toast 工具类
 */
import React from 'react';
import { toast } from 'react-toastify';
import ToastJ from '@components/Toast';
import { CloseButtonJ } from '@components/Button';
import { theme } from '../../package';

// 默认显示3秒
const AUTO_CLOSE_TIME = 3000;

/**
 * toast success
 * @param message
 * @param showTime 显示时间，默认3000ms
 */
export const toastSuccess = (message, showTime) => {
  const colorValue = theme['success-text'];
  const toastId = toast(<ToastJ message={{ text: message,
    success: true,
    classname: 'icon-chenggong',
    color: colorValue }}
  />, { autoClose: showTime || AUTO_CLOSE_TIME,
    closeButton: <CloseButtonJ color={colorValue} /> });
  return toastId;
};

/**
 * toast error
 * @param message
 * @param showTime 显示时间，默认3000ms
 */
export const toastError = (message, showTime) => {
  const colorValue = theme['error-text'];
  const toastId = toast(<ToastJ message={{ text: message,
    error: true,
    classname: 'icon-shibaiicon',
    color: colorValue,
  }}
  />, { autoClose: showTime || AUTO_CLOSE_TIME,
    closeButton: <CloseButtonJ color={colorValue} /> });
  return toastId;
};

/**
 * toast warn
 * @param message
 * @param showTime 显示时间，默认3000ms
 */
export const toastWarn = (message, showTime) => {
  const colorValue = theme['warn-text']; // "#F1C40F";
  const toastId = toast(<ToastJ message={{ text: message,
    warn: true,
    classname: 'icon-jinggao',
    color: colorValue,
  }}
  />, { autoClose: showTime || AUTO_CLOSE_TIME,
    closeButton: <CloseButtonJ color={colorValue} /> });
  return toastId;
};

/**
 * toast info
 * @param message
 * @param showTime 显示时间，默认3000ms
 */
export const toastInfo = (message, showTime) => {
  const colorValue = theme['info-text']; // "#3498DB";
  const toastId = toast(<ToastJ message={{ text: message,
    info: true,
    classname: 'icon-info',
    color: colorValue,
  }}
  />, { autoClose: showTime || AUTO_CLOSE_TIME,
    closeButton: <CloseButtonJ color={colorValue} /> });
  return toastId;
};

/**
 * toast default 白色
 * @param message
 * @param showTime 显示时间，默认3000ms
 */
export const toastDefault = (message, showTime) => {
  const colorValue = '#FFF';
  const toastId = toast(<ToastJ message={{ text: message,
    defaultFlag: true,
    classname: '',
    color: colorValue,
    fontColor: '#333',
  }}
  />, { autoClose: showTime || AUTO_CLOSE_TIME,
    closeButton: <CloseButtonJ color={colorValue} iconColor="#333" /> });
  return toastId;
};
