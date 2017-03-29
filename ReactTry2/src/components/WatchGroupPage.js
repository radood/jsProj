'use strict';

import React from 'react';
import { Link } from 'react-router';
import watchGroups from '../data/watchGroups';
import NotFoundPage from './NotFoundPage';
import Model from './Model';

export default class WatchGroupPage extends React.Component {
  render() {
    		const id = this.props.params.id;
    		const watchGroup = watchGroups.filter((watchGroup) => watchGroup.id === id)[0];
    		if (!watchGroup) {
      			return <NotFoundPage/>;
    		}
  	return (
    	<div className="watchGroup">
    		<div className="company">
    			<img src={`/img/${watchGroup.image}`}/>
    			<p>{watchGroup.description}</p>
    		</div>
    			<div className="model-details">
	    			<ul>{
	              	watchGroup.models.map((model, i) => 
	              		<Model key={i} {...model}/>
	            	)}</ul>
    			</div>
    	</div>
    );
  }
}