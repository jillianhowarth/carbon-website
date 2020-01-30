import React from 'react';

import { container, sidebar, row } from './Code.module.scss';

import CodeBar from './CodeBar';

const Code = ({ children, code, path, src, links }) => (
  // eslint-disable-next-line no-unused-vars

  <div className={row}>
    <CodeBar links={links} code={code} src={src} path={path} />
    <div className={container}>
      {children}
      <div className={sidebar} />
    </div>
  </div>
);
export default Code;
