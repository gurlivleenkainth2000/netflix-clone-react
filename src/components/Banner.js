import React, { Component } from 'react';
import * as baseUrls from '../shared/baseUrls';
import '../assets/Banner.css';

class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: null
        };
    }

    componentDidMount() {
        fetch(baseUrls.requests.netflixOriginals)
        .then(response => response.json())
        .then(res => this.setState({ movie: res.results[Math.floor(Math.random() * res.results.length)] }))
    }

    render() {
        return (
            <header className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${this.state.movie?.backdrop_path || this.state.movie?.poster_path})`,
            }}>
                <div className="banner__contents">
                    <h1 className="banner__title">
                        {this.state.movie?.title || this.state.movie?.name || this.state.movie?.original_name}
                    </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                    <h1 className="banner__description">
                        {this.state.movie?.overview}
                    </h1>
                </div>
            </header>
        );
    }
}

export default Banner;