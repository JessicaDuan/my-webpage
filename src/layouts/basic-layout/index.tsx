import React, { FC, PropsWithChildren } from 'react';

const BasicLayout: FC<PropsWithChildren<null>> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default BasicLayout;
