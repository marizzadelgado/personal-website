import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './App.css';
import App from './App.js';
import './fonts/Raleway-Regular.ttf'


ReactDOM.render(
		<div>
      	<Favicon url="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/237/female-technologist-type-1-2_1f469-1f3fb-200d-1f4bb.png" />
      	<App />
    	</div>
		, document.getElementById('root'));


