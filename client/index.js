import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';
import YTSearch from 'youtube-api-search';

const API_KEY = ''; // put your yt key here

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.search('start');

        this.search = this.search.bind(this);
    };

    search(term) {
        YTSearch({
            key: API_KEY,
            term: term
        }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        })
    }

    select(selectedVideo) {
        this.setState({selectedVideo});
    }

    render() {
        const searchDelayed = _.debounce(term => this.search(term), 300);
        return (
            <div>
                <SearchBar onSearch={searchDelayed}/>
                <VideoDetail selectedVideo={this.state.selectedVideo}/>
                <VideoList onSelect={selectedVideo => this.select(selectedVideo)} videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
