import React, { Component } from 'react';
import dom from './video_list.jsx';

export default class VideoList extends Component {
    constructor (props) {
        super(props);
    }

    render () {
        return dom(this);
    }

}