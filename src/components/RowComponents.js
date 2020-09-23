import React, { Component } from 'react';
// import { Media, Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap';
import ReactPlayer from 'react-player/youtube';
import * as baseUrls from '../shared/baseUrls';
import '../assets/Row.css';

class RowComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            videoUrl: null
        };
    }

    componentDidMount() {
        fetch(this.props.fetchUrl)
        .then(result => result.json())
        .then(res => {
            this.setState({
                movies: res.results
            })
        });

    }

    onMovieSelect(movie) {
        let movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=${baseUrls.apiKey}&language=en-US`;
        fetch(movieUrl).then(response => response.json())
        .then(res => {
            let rs = res.results.filter(x => x.type === 'Trailer')
            if (rs.length !== 0) {
                this.setState({ videoUrl: rs[0].key })
            }
        });
    }

    render() {
        const companyLists = this.state.movies.map(movie => {
            return (
                <img
                    key={movie.id}
                    onClick={() => this.onMovieSelect(movie)}
                    className={`isBackgroundPoster ${this.props.isLarge ? "isLargePoster" : null}`}
                    src={`${baseUrls.IMAGES}${this.props.isLarge ? movie.poster_path : movie.backdrop_path}`}
                    alt={movie.title}
                />
            )
        })

        return (
            <div className="row p-2">
                <h3>{this.props.title}</h3>
                <div className="custom-row">
                    {companyLists}
                </div>
                { this.state.videoUrl != null ? <ReactPlayer url={`${baseUrls.YOUTUBE_MOVIES}${this.state.videoUrl}`} width="100%" /> : null}
            </div>
        );
    }
}

export default RowComponent;