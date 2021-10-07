import React, { FC, PropsWithChildren } from 'react';

const MenuLayout: FC<PropsWithChildren<null>> = ({ children }) => {
  return (
    <div>
      <div>{children}</div>
    </div>
  );
};

export default MenuLayout;
