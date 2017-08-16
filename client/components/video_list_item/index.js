import React, { Component } from 'react';
import dom from './video_list_item.jsx';

export default class VideoListItem extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return dom(this);
    }
}