import React from 'react';
import { Link } from 'react-router';

const { shape, string } = React.PropTypes;

const ShowCard = React.createClass({
  propTypes: {
    show: shape({
      imdbID: string.isRequired,
      poster: string.isRequired,
      title: string.isRequired,
      year: string.isRequired,
      description: string.isRequired
    })
  },

  render () {
    const show = this.props.show;
    return (
      <Link to={`/details/${show.imdbID}`}>
        <div className='show-card' key={show.imdbID}>
          <img src={`/public/img/posters/${show.poster}`} />
          <div>
            <h3>{show.title}</h3>
            <h4>({show.year})</h4>
            <p>{show.description}</p>
          </div>
        </div>
      </Link>
    );
  }
});

export default ShowCard;
