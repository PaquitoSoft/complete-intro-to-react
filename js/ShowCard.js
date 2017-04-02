import React from 'react';

const ShowCard = React.createClass({
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
