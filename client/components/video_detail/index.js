import React, { Component } from 'react';
import dom from './video_detail.jsx';

export default class VideoDetail extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return dom(this);
    }
}