import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { setSearchTerm } from './actionCreators';
const { string, func, object } = React.PropTypes;

const Landing = React.createClass({
  /* WTF!!! */
  contextTypes: {
    router: object
  },

  propTypes: {
    searchTerm: string,
    dispatch: func
  },

  handleSearchSubmit (event) {
    event.preventDefault();
    this.context.router.transitionTo('/search');
  },

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value));
  },

  render () {
    return (
      <div className='landing'>
        <h1>svideo</h1>
        <form onSubmit={this.handleSearchSubmit}>
          <input
            type='text'
            value={this.props.searchTerm}
            onChange={this.handleSearchTermChange}
            placeholder='Search'
          />
        </form>
        <Link to='/search'>or Browse all</Link>
      </div>
    );
  }
});

function mapStateToProps (state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Landing);
