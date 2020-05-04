import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from '/Users/rafaeladelgado/myfirstreact/src/images/logo.png';
import ImageGallery from 'react-image-gallery';

import linkedin from '/Users/rafaeladelgado/myfirstreact/src/images/linkedin.png';
import facebook from '/Users/rafaeladelgado/myfirstreact/src/images/facebook.png';
import instagram from '/Users/rafaeladelgado/myfirstreact/src/images/instagram.png';
import youtube from '/Users/rafaeladelgado/myfirstreact/src/images/youtube.png';

import idewcare from '/Users/rafaeladelgado/myfirstreact/src/images/idewcare.jpg';
import fitbit from '/Users/rafaeladelgado/myfirstreact/src/images/fitbit.png';
import refinery29 from '/Users/rafaeladelgado/myfirstreact/src/images/refinery29.jpg';
import loreal from '/Users/rafaeladelgado/myfirstreact/src/images/loreal.jpg';
import fenty from '/Users/rafaeladelgado/myfirstreact/src/images/fenty.png';
import drjart from '/Users/rafaeladelgado/myfirstreact/src/images/drjart.png';


import stars from '/Users/rafaeladelgado/myfirstreact/src/images/stars.png';
import marilyn from '/Users/rafaeladelgado/myfirstreact/src/images/marilyn.png';
import industry from '/Users/rafaeladelgado/myfirstreact/src/images/industry.jpg';

import highlights from '/Users/rafaeladelgado/myfirstreact/src/images/highlights.jpg';

console.log(logo);
 

class Header extends React.Component {
	render() {
		return <img src={logo} alt="Logo" height = "70%" width= "100%" />;
	}
}

class Info extends React.Component {
	render() {
		return (
			<div className = "info">	
			<div className = "socialMedia">
				<a href="https://www.linkedin.com/in/marizza-delgado/">
				<img src= {linkedin} alt="LinkedIn" width="20" height="20" border="0"/></a>
				
				<a href="https://www.facebook.com/Marizzapizza/">
				<img src= {facebook} alt="Facebook" width="20" height="20" border="0" /></a>
				
				<a href="https://www.instagram.com/marizzadelgado/?hl=en">
				<img src= {instagram} alt="Instagram" width="20" height="20" border="0" /></a>
				
				<a href="https://www.youtube.com/channel/UCkisg0LuWSop4eMy7G3ZBKA">
				<img src= {youtube} alt="Youtube" width="20" height="20" border="0" /></a>
			</div>
			
			<div className = "bio">
				Greetings! I’m Marizza Delgado, a fashion model represented in SF, LA, 
				& NYC, and 3rd year Technology Information Management student at UC 
				Santa Cruz. I’m currently a Marketing and Business Intelligence intern 
				at Queenly. Come check us <a href="https://queenly.com/">out</a>!
			</div>
			</div>
		);
	}
} 

	
class Slideshow extends React.Component {
	render() {
		return (
			<div className= "slideshowContainer">
			<iframe className="mySlides" width="560" height="315" 
			src="https://www.youtube.com/embed/ECdKH_NRS7c?start=6" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen></iframe>
			
			<iframe className="mySlides" width="560" height="315" src="https://www.youtube.com/embed/vDMgfWrSYn8?start=14" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen></iframe>
			
			<iframe className="mySlides" src="https://content.jwplatform.com/players/VPxSwCd0-avTupidD.html" 
			width="320" height="260" frameborder="0" scrolling="auto"></iframe>
			
			<iframe className="mySlides" width="560" height="315" src="https://www.youtube.com/embed/dvUd91XUCu4" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen></iframe>
			
			<iframe className="mySlides" width="560" height="315" src="https://www.youtube.com/embed/DjThFqGcuKI" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen></iframe>
			
			<iframe className="mySlides" width="560" height="315" src="https://www.youtube.com/embed/HNinVGNGUR0?start=17" 
			frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; 
			picture-in-picture" allowfullscreen></iframe>
			
			<div className= "thumbnails">
				<img src={idewcare} alt="idewcare" height = "100" width= "100" />
				<img src={fitbit} alt="fitbit" height = "100" width= "100" />
				<img src={refinery29} alt="refinery29" height = "100" width= "100" />
				<img src={loreal} alt="loreal" height = "100" width= "100" />
				<img src={fenty} alt="fenty" height = "100" width= "100" />
				<img src={drjart} alt="drjart" height = "100" width= "100" />
  			</div>
			</div>
		);
	}
} 

class Agencies extends React.Component{
	render() {
		return(
			<div className = "agencies">
			Represented by:
			<a href="https://www.starsmanagement.com/portfolio/standard/Marizza_Delgado/8516/14353">
			<img src={stars} alt="stars" height = "60" width= "170" /></a>
			<a href="http://www.marilynagency.com/new-york/women/women/marizza-delgado">
			<img src={marilyn} alt="marilyn" height = "90" width= "70" /></a>
			<a href="https://www.theindustrymodelmgmt.com/model/los-angeles/management/1302-marizza-delgado/">
			<img src={industry} alt="the industry" height = "100" width= "100" /></a>
			</div>
		);
	}
}

class Highlights extends React.Component {
	render() {
		return (
			<div className = "highlights">
			<div className = "highlightsPhoto">
				<img src={highlights} alt="alt photo" height = "400" width= "400" />
			</div>
			<div className = "funFacts">
				<h1>Highlights</h1>
				<ul>
				<li>Vegan for 2+ years. Follow my vegan <a href ="https://www.instagram.com/healthy_ho/">food instagram</a>! #BeautyWithoutCruelty </li>
				<li>Crowned <a href= "https://becrownedproductions.com/miss-pacific-coast">Miss Pacific Coast Teen USA 2017</a>- a preliminary for Miss California Teen USA. </li>
				<li>Walked in NYFW <a href="https://www.preview.ph/beauty/monika-sta-maria-hye-won-jang-marizza-delgado-nyfw-2019-a00193-20190212">Proud filipino represent</a>!</li>
				<li>My school’s engineering department asked me how I was introduced to STEM for <a href ="https://www.soe.ucsc.edu/news/introduce-girl-engineering-day">Introduce a Girl to Engineering Day</a>. We love #WomenInTech! </li>
				<li>Featured in <a href ="https://medium.com/@WomenOfSiliconValley/makingfilipinxamericanhistory-16-filipinx-americans-in-tech-8169e0510837">Women of Silicon Valley</a> for Filipino American History Month! </li>
				<li>Shared my skincare journey with my favorite Korean Skincare blog- <a href = "https://theklog.co/skin-care-ingredients-for-smooth-skin-texture/">The Klog</a>!</li>
				<li>Self proclaimed book worm- let’s connect on <a href ="https://www.goodreads.com/user/show/109858824-marizza-delgado">Goodreads</a>! </li> 
				</ul>
				<h1>Booking Inquiries</h1>
				<p><a href="mailto:kristen@starsmanagement.com">kristen@starsmanagement.com</a></p>
			</div>
			</div>
		);
	}
} 
	
class App extends React.Component {
	render() {
		return (  
		<div>
		<Header />
		<Info />
		<h1>Projects & Campaigns</h1>
		<Slideshow /> 
		<Agencies />
		<Highlights />
		
		</div>
		);
	}
}
	
export default App;