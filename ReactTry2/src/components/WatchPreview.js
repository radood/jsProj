'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class WatchPreview extends React.Component {
  render() {
    return (
      <Link to={`/watchGroup/${this.props.id}`}>
        <div className="watch-preview">
          <img src={`img/${this.props.image}`}/>
        </div>
      </Link>
    );
  }
}