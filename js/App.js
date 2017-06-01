import React from 'react';
import { Match } from 'react-router';
import { Provider } from 'react-redux';

import preload from '../public/data.json';
import store from './store';
import AsyncRoute from './AsyncRoute';

// import Landing from './Landing';
import Search from './Search';
import Details from './Details';

if (global) {
  // Fake async System.import in node env
  global.System = { import () {} };
}

const App = () => {
  // <Match exactly pattern='/' component={Landing} />
  return (
    <Provider store={store}>
      <div className='app'>

        <Match
          exactly
          pattern='/'
          component={props => {
            return (
              <AsyncRoute
                props={props}
                loadingPromise={System.import('./Landing')}
              />
            );
          }}
        />

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
    </Provider>
  );
};

export default App;
