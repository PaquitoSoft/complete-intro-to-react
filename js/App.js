import React from 'react';
import { Match } from 'react-router';
import { Provider } from 'react-redux';

import preload from '../public/data.json';
import store from './store';
import AsyncRoute from './AsyncRoute';

// import Landing from './Landing';
// import Search from './Search';
// import Details from './Details';

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
          component={props => {
            return (
              <AsyncRoute
                props={Object.assign({shows: preload.shows}, props)}
                loadingPromise={System.import('./Search')}
              />
            );
          }
      }
        />
        <Match
          pattern='/details/:id'
          component={(props) => {
            const show = preload.shows.find(_show => _show.imdbID === props.params.id);
            const _props = Object.assign({show}, props);
            return (
              <AsyncRoute
                props={_props}
                loadingPromise={System.import('./Details')}
              />
            );
          }}
        />
      </div>
    </Provider>
  );
};

export default App;
