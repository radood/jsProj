'use strict';

import React from 'react';

export default class Footer extends React.Component {
	render () {
		return(
			<p> {this.props.name} Free credit score is provided by Equifax and is only available to MogoAccount holders that have passed identity verification. The Equifax credit score is based on Equifax’s proprietary model and may not be the same score used by third parties to assess your creditworthiness. The provision of this score to you is intended for your own educational use. Third parties will take into consideration other information in addition to a credit score when evaluating your creditworthiness. </p>
			);
	}
}	