import React from 'react';
import ReactDOM from 'react-dom';

import MyTitle from './MyTitle';

const MyFirstComponent = React.createClass({
  render: function () {
    return (
      React.DOM.div(null,
        // React.DOM.h1(null, 'This is my first component')

        // React.createElement(MyTitle),
        // React.createElement(MyTitle),
        // React.createElement(MyTitle),
        // React.createElement(MyTitle)

        // MyTitleFactory({ title: 'One', color: 'peru' }),
        // MyTitleFactory({ title: 'Two', color: 'mediumaquamarine' }),
        // MyTitleFactory({ title: 'Three', color: 'rebeccapurple' }),
        // MyTitleFactory({ title: 'Four', color: 'green' })

        <div>
          <MyTitle title="One" color="peru" />
          <MyTitle title="Two" color="mediumaquamarine" />
          <MyTitle title="Three" color="rebeccapurple" />
          <MyTitle title="Four" color="green" />
        </div>
      )
    );
  }
});

ReactDOM.render(
  React.createElement(MyFirstComponent),
  document.getElementById('app')
);
