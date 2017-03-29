'use strict';

import React from 'react';


export default class Model extends React.Component {

	render() {
		return (
				<li className="model">
        			<img src={`/img/${this.props.image}`}/>
       				<p>Name: <span className="name">{this.props.name}</span></p>
        			<p>Reference: <span className="reference">{this.props.reference}</span></p>
        			<p>Case diameter: <span className="diameter">{this.props.diameter}</span></p>
        			<p>Movement type: <span className="movement">{this.props.movement}</span></p>
        			<p>Complications: <span className="complications">{this.props.complications}</span></p>
      			</li>
			);
	}

}