import React, { Suspense, PureComponent } from 'react';
import { Button, Result, Spin } from 'antd';
import { toString } from '@/utils';

class SuspenseWrapper extends PureComponent {
  state = {
    errorInfo: undefined,
  };

  static getDerivedStateFromError(error: Error) {
    const errorInfo = toString(error);
    // 版本更新导致加载资源错误时自动刷新
    if (errorInfo.startsWith('ChunkLoadError')) {
      window.location.reload();
    }
    // 更新 state 使下一次渲染能够显示降级后的 UI
    return { errorInfo };
  }

  render() {
    const { children } = this.props;
    const { errorInfo } = this.state;

    if (errorInfo) {
      const subTitle = (
        <div>
          <p>请尝试刷新</p>
          <Button type="primary" onClick={() => window.location.reload()}>
            刷新
          </Button>
        </div>
      );

      return (
        <div className="flexbox">
          <Result status="error" title="客户端错误" subTitle={subTitle} extra={errorInfo} />
        </div>
      );
    }

    return <Suspense fallback={<Spin size="large" tip="资源加载中" />}>{children}</Suspense>;
  }
}

export default SuspenseWrapper;
