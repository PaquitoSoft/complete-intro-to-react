import React from 'react';
const { shape, string } = React.PropTypes;

const ShowCard = React.createClass({
  propTypes: {
    show: shape({
      poster: string,
      title: string,
      year: string,
      description: string
    })
  },

  render () {
    const show = this.props.show;
    return (
      <div className='show-card' key={show.imdbID}>
        <img src={`/public/img/posters/${show.poster}`} />
        <div>
          <h3>{show.title}</h3>
          <h4>({show.year})</h4>
          <p>{show.description}</p>
        </div>
      </div>
    );
  }
});

export default ShowCard;
