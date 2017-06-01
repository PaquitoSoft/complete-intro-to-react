import React from 'react';
import Header from './Header';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getOmdbDetails } from './actionCreators';

const { shape, string, func } = React.PropTypes;

const Details = React.createClass({
  propTypes: {
    show: shape({
      title: string,
      description: string,
      year: string,
      poster: string,
      trailer: string,
      omdbID: string
    }),
    omdbData: shape({
      imdbID: string
    }),
    dispatch: func
  },

  // getInitialState () {
  //   return { omdbData: {} };
  // },

  componentDidMount () {
    // axios.get(`https://www.omdbapi.com/?i=${this.props.show.imdbID}`)
    //   .then(response => {
    //     this.setState({
    //       omdbData: response.data
    //     });
    //   })
    //   .catch(error => console.error('Axios error', error));
    if (!this.props.omdbData.imdbRating) {
      this.props.dispatch(getOmdbDetails(this.props.show.imdbID));
    }
  },

  render () {
    const { title, description, year, poster, trailer } = this.props.show;
    let rating;

    if (this.props.omdbData.imdbRating) {
      rating = (<h3>{this.props.omdbData.imdbRating}</h3>);
    } else {
      rating = (<img src='/public/img/loading.png' />);
    }

    return (
      <div className='details'>
        <Header />

        <section>
          <h1>{title}</h1>
          <h2>({year})</h2>
          {rating}
          <img src={`/public/img/posters/${poster}`} />
          <p>{description}</p>
        </section>

        <div>
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
            frameBorder='0'
            allowFullScreen
          />
        </div>
      </div>
    );
  }
});

function mapStateToProps (state, ownProps) {
  return {
    omdbData: state.omdbData[ownProps.show.imdbID] || {}
  };
}

export default connect(mapStateToProps)(Details);
