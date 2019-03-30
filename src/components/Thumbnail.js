import React, { Component } from 'react';
import './styles/Thumbnail.css';

export class Thumbnail extends Component {
    render() {
        return (
            <div className="thumbnail">
                <b>{this.props.project.title}</b>
            </div>
        )
    }
}

export default Thumbnail
