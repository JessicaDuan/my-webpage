/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Spin, Input, InputNumber, Select, Table, TreeSelect } from 'antd';
import { InputProps, TextAreaProps } from 'antd/lib/input';
import Loading from '@/components/loading';

// 自定义全局Spin图标
Spin.setDefaultIndicator(<Loading />);

// 全局设置place holder
(Input.defaultProps as InputProps).placeholder = '请输入';
(Input.defaultProps as InputProps).autoComplete = 'off';
Input.TextArea.defaultProps = {
  ...Input.TextArea.defaultProps,
  placeholder: '请输入',
} as TextAreaProps;
if (Input.Search.defaultProps) {
  Input.Search.defaultProps.allowClear = true;
} else {
  Input.Search.defaultProps = {
    allowClear: true,
  };
}

// @ts-ignore
if (!InputNumber.defaultProps) {
  // @ts-ignore
  InputNumber.defaultProps = {
    placeholder: '请输入数字',
  };
}

// @ts-ignore
if (!Select.defaultProps) {
  // @ts-ignore
  Select.defaultProps = {
    placeholder: '请选择',
    optionFilterProp: 'children',
    showSearch: true,
    showArrow: true,
    getPopupContainer: (triggerNode: HTMLElement) => {
      if (triggerNode) {
        return (triggerNode.parentNode as HTMLElement) ?? document.body;
      }
      return document.body;
    },
  };
}

// @ts-ignore
if (!TreeSelect.defaultProps) {
  // @ts-ignore
  TreeSelect.defaultProps = {
    placeholder: '请选择',
    getPopupContainer: (triggerNode: HTMLElement) => {
      if (triggerNode) {
        return (triggerNode.parentNode as HTMLElement) ?? document.body;
      }
      return document.body;
    },
  };
}

Table.defaultProps.rowKey = 'id';
