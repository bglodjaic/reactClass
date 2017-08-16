import React from 'react';

export default function (view) {
    return (
        <div>
            <input onChange={view.onSearch} />
        </div>
    );
}
