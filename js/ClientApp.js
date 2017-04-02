import React from 'react';
import { render } from 'react-dom';

import '../public/normalize.css';
import '../public/style.css';

const App = React.createClass({
  render: function () {
    return (
      <div className='app'>
        <div className='landing'>
          <h1>svideo</h1>
          <input type='text' placeholder='Search' />
          <a>or Browse all</a>
        </div>
      </div>
    );
  }
});

render(
  <App />,
  document.getElementById('app')
);

// http://akamai.redystream.com/PHpDbTKhHUXgwOd0gscCq50PyhuOS77CQ7qSaXKw2mf4yVoDLGR7X3GajD5kriquSbQLMBQvOUEacfMm0fGy01RQrCiyeCuwYS/index.m3u8
