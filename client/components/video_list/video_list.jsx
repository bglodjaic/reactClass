import React from 'react';
import VideoListItem from '../video_list_item';

export default (view) => {
    const videos = view.props.videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} onSelect={video => view.props.onSelect(video)}/>
    });

    return (
        <ul>
            {videos}
        </ul>
    )
}