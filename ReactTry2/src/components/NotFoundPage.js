'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class NotFoundPage extends React.Component {
  render() {
    return (
      <div className="not-found">
        <img className="404" src="/img/404.jpg"/>
        <h1>404</h1>
        <h2>Page not found!</h2>
        <p>
          <Link to="/">Go back to the main page</Link>
        </p>
      </div>
    );
  }
}