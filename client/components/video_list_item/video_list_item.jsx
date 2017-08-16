import React from 'react';

export default (view) => {
    return (
        <li onClick={event => view.props.onSelect(view.props.video)}>
            <img src={view.props.video.snippet.thumbnails.default.url} />
        </li>
    )
}
