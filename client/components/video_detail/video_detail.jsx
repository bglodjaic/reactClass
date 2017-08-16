import React from 'react';

export default (view) => {
    if (!view.props.selectedVideo) {
        return <div>Loading...</div>;
    }

    const url = `https://www.youtube.com/embed/${view.props.selectedVideo.id.videoId}`;

    return (
        <div>
            <iframe width="420"
                    height="315"
                    src={url}>
            </iframe>
        </div>
    );
}
