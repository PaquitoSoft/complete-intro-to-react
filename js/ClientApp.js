import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match } from 'react-router';
import preload from '../public/data.json';

import '../public/normalize.css';
import '../public/style.css';

import Landing from './Landing';
import Search from './Search';
import Details from './Details';

console.log('blah blah blah');

const App = React.createClass({
  render: function () {
    return (
      <BrowserRouter>
        <div className='app'>
          <Match exactly pattern='/' component={Landing} />
          <Match
            pattern='/search'
            component={(props) => (<Search shows={preload.shows} {...props} />)}
          />
          <Match
            pattern='/details/:id'
            component={(props) => {
              const show = preload.shows.find(_show => _show.imdbID === props.params.id);
              console.log('Show details about to render:', show);
              return (<Details show={show} {...props} />);
            }}
          />
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
