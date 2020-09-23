import React, { Component } from 'react';
import RowComponent from './components/RowComponents';
import * as baseUrls from './shared/baseUrls';
import Banner from './components/Banner';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container-fluid custom">
        <Banner />
        <RowComponent title={"Netflix Originals"} fetchUrl={baseUrls.requests.netflixOriginals} isLarge={true} />
        <RowComponent title={"Trending"} fetchUrl={baseUrls.requests.trending} isLarge={true} />
        <RowComponent title={"Actions"} fetchUrl={baseUrls.requests.action} />
        <RowComponent title={"Adventure"} fetchUrl={baseUrls.requests.adventure} />
        <RowComponent title={"Family"} fetchUrl={baseUrls.requests.family} />
        <RowComponent title={"Fantasy"} fetchUrl={baseUrls.requests.fantasy} />
        <RowComponent title={"History"} fetchUrl={baseUrls.requests.history} />
        <RowComponent title={"Horror"} fetchUrl={baseUrls.requests.horror} />
        <RowComponent title={"Music"} fetchUrl={baseUrls.requests.music} />
        <RowComponent title={"Mystery"} fetchUrl={baseUrls.requests.mystery} />
        <RowComponent title={"Romance"} fetchUrl={baseUrls.requests.romance} />
        <RowComponent title={"Science Fiction"} fetchUrl={baseUrls.requests.scienceFiction} />
        <RowComponent title={"Thriller"} fetchUrl={baseUrls.requests.thriller} />
        <RowComponent title={"War"} fetchUrl={baseUrls.requests.war} />
      </div>
    );
  }
}

export default App;
