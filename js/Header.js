import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { setSearchTerm } from './actionCreators';

class Header extends React.Component {
  constructor (props) {
    super(props);
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange (event) {
    this.props.dispatch(setSearchTerm(event.target.value));
  }

  render () {
    let utilSpace;

    if (this.props.showSearch) {
      utilSpace = (<input
        type='text'
        value={this.props.searchTerm}
        onChange={this.handleSearchTermChange}
        placeholder='search' />
      );
    } else {
      utilSpace = (
        <h2>
          <Link to='/search'>Back</Link>
        </h2>
      );
    }

    return (
      <header>
        <h1>
          <Link to='/'>svideo</Link>
        </h1>
        {utilSpace}
      </header>
    );
  }
}

const { func, bool, string } = React.PropTypes;
Header.propTypes = {
  dispatch: func,
  showSearch: bool,
  searchTerm: string
};

function mapStateToProps (state) {
  return {
    searchTerm: state.searchTerm
  };
}

export default connect(mapStateToProps)(Header);
