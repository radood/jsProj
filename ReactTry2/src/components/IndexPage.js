'use strict';

import React from 'react';
import WatchPreview from './WatchPreview';
import watchGroups from '../data/watchGroups';

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="watchgroup-selector">
         {watchGroups.map(watchGroupsData =>  <WatchPreview key={watchGroupsData.id} {...watchGroupsData} /> )}
         </div>
      </div>  
      );
  }
}