import React from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import ShowCard from './ShowCard';

const { arrayOf, shape, string } = React.PropTypes;

export const Search = React.createClass({
  propTypes: {
    shows: arrayOf(shape({
      title: string,
      description: string
    })),
    searchTerm: string
  },

  render () {
    return (
      <div className='search'>
        <Header showSearch />
        <div>
          {this.props.shows
            .filter(show => {
              return `${show.title} ${show.description}`.toUpperCase().indexOf(this.props.searchTerm.toUpperCase()) !== -1;
            })
            .map(show => {
              return (
                <ShowCard key={show.imdbID} show={show} />
              );
            })
          }
        </div>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Search);
