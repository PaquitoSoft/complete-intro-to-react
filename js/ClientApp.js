import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';

import '../public/normalize.css';
import '../public/style.css';

import Landing from './Landing';
import Search from './Search';

const App = React.createClass({
  render: function () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match pattern='/search' component={Search} />
        </div>
      </BrowserRouter>
    );
  }
});

render(
  <App />,
  document.getElementById('app')
);

// http://akamai.redystream.com/PHpDbTKhHUXgwOd0gscCq50PyhuOS77CQ7qSaXKw2mf4yVoDLGR7X3GajD5kriquSbQLMBQvOUEacfMm0fGy01RQrCiyeCuwYS/index.m3u8
