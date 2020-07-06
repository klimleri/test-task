import React from 'react';
import './styles.css';

export default function Comment({ data }) {
    return (
        <div className="comment">
            <div className="comment__color" style={{ background: data.color }}/>
            <div className="comment__text">{data.body}</div>
        </div>
    );
};