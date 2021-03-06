import React from 'react';

import './page.css';

const Page: React.FC = ({ children }) => {
  return <div className='page'>{children}</div>;
};

export default Page;
