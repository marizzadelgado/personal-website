import React from 'react';
import ReactDOM from 'react-dom';
import Favicon from 'react-favicon';
import './App.css';
import logo from './../src/images/logo.png';
import ImageGallery from 'react-image-gallery';

import linkedin from './../src/images/linkedin.png';
import facebook from './../src/images/facebook.png';
import instagram from './../src/images/instagram.png';
import youtube from './../src/images/youtube.png';

import stars from './../src/images/stars.png';
import marilyn from './../src/images/marilyn.png';
import industry from './../src/images/industry.png';

import highlights from './../src/images/highlights.jpg';

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
				<img src= {linkedin} alt="LinkedIn" width="30" height="30" /></a>
				
				<a href="https://www.facebook.com/Marizzapizza/">
				<img src= {facebook} alt="Facebook" width="30" height="30" /></a>
				
				<a href="https://www.instagram.com/marizzadelgado/?hl=en">
				<img src= {instagram} alt="Instagram" width="30" height="30"  /></a>
				
				<a href="https://www.youtube.com/channel/UCkisg0LuWSop4eMy7G3ZBKA">
				<img src= {youtube} alt="Youtube" width="30" height="30"  /></a>
			</div>
			
			<div className = "bio">
				Greetings! I’m Marizza Delgado, a fashion model represented in SF, LA, 
				& NYC, and an incoming senior at UC Santa Cruz studing Technology 
				Information Management. I’m currently a Marketing and Business Intelligence 
				intern at Queenly. Come check us <a href="https://queenly.com/">out</a>!
			</div>
			</div>
		);
	}
} 


 
class Slideshow extends React.Component {
  render() {
  	const images = [
  		{
			original: 'https://i.ytimg.com/vi/ECdKH_NRS7c/maxresdefault.jpg',
			thumbnail: 'https://static.wayup.com/company_logo/ojTomB0qG4_20150310.png'
  		},
  		{
			original: 'https://pbs.twimg.com/media/EEM2jNzXsAA9_mT.jpg',
			thumbnail: 'https://brandslogo.net/wp-content/uploads/2016/01/fitbit-logo-vector-download-400x400.jpg',
  		},
  		{
			original: 'https://mediaslide-us.storage.googleapis.com/industry/pictures/1302/3678/large-1551202982-dd57fa1ed474d79a1dcca944308f0c0d.jpg',
			thumbnail: 'https://i.vippng.com/png/small/139-1392591_the-cut-logo-new-york-magazine-the-cut.png',
  		},
  		{
			original: 'https://hips.hearstapps.com/vidthumb/0b4afd89-a826-4baf-a524-fa516b6048ec/thumb_1920x1080_00001_1559872562_21729.jpg',
			thumbnail: 'https://www.handelgroup.com/wp-content/uploads/2015/10/cosmopolitan-square.jpg',
  		},
  		{
			original: 'https://www.art-for-hair-davos.ch/wp-content/uploads/2018/05/Color-Addict-Shimmer-by-LOreal-Professionnel.jpg',
			thumbnail: 'https://cdn.worldvectorlogo.com/logos/l-oreal-professionnel.svg',
  		},
  		{
			original: 'https://images.summitmedia-digital.com/preview/images/2019/02/12/ALICEOLIVIA-nm.jpg',
			thumbnail: 'https://yt3.ggpht.com/a/AGF-l79_4RMz4be2o8ipOXnypIwyn-sZsrMlqpzVmg=s900-c-k-c0xffffffff-no-rj-mo',
  		},
  		{
			original: 'https://i.ytimg.com/vi/HNinVGNGUR0/maxresdefault.jpg',
			thumbnail: 'https://www.signedbybeauty.com/images/dr_jart_squareimage.jpg',
  		},
  		{
			original: 'https://www.fentybeauty.com/on/demandware.static/-/Sites-FENTY-Library/default/dw64098b45/pdp-content/day-to-night-model.jpg',
			thumbnail: 'https://cdn.clipart.email/8c2d203776cd0a56e7a501d068609a74_fenty-beauty-logos_768-768.jpeg',
  		},
	];
    return (
    	<div className = "slideshowContainer">
    	<ImageGallery items={images} />
    	</div>
    );
  }
}



/* class Slideshow extends React.Component {
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
*/

class Agencies extends React.Component{
	render() {
		return(
			<div className = "agencies" >
			<h2>Represented by:</h2>
			<a href="https://www.starsmanagement.com/portfolio/standard/Marizza_Delgado/8516/14353">
			<img src={stars} alt="stars" height = "60" width= "170"   /></a>
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
			<div className = "funFactsContainer">
				<h1>Highlights</h1>
				<div className = "funFacts">
				<ul>
				<li>Vegan for 2+ years. Follow my vegan <a href ="https://www.instagram.com/healthy_ho/">food instagram</a>! #BeautyWithoutCruelty </li>
				<li>Crowned <a href= "https://becrownedproductions.com/miss-pacific-coast">Miss Pacific Coast Teen USA 2017</a>- a preliminary for Miss California Teen USA. </li>
				<li>Walked in NYFW <a href="https://www.preview.ph/beauty/monika-sta-maria-hye-won-jang-marizza-delgado-nyfw-2019-a00193-20190212">Proud filipino represent</a>!</li>
				<li>My school’s engineering department asked me how I was introduced to STEM for <a href ="https://www.soe.ucsc.edu/news/introduce-girl-engineering-day">Introduce a Girl to Engineering Day</a>. We love #WomenInTech! </li>
				<li>Featured in <a href ="https://medium.com/@WomenOfSiliconValley/makingfilipinxamericanhistory-16-filipinx-americans-in-tech-8169e0510837">Women of Silicon Valley</a> for Filipino American History Month! </li>
				<li>Shared my skincare journey with my favorite Korean Skincare blog- <a href = "https://theklog.co/skin-care-ingredients-for-smooth-skin-texture/">The Klog</a>!</li>
				<li>Self proclaimed book worm- let’s connect on <a href ="https://www.goodreads.com/user/show/109858824-marizza-delgado">Goodreads</a>! </li> 
				</ul>
				<h2>Booking Inquiries</h2>
				<p><a href="mailto:kristen@starsmanagement.com">kristen@starsmanagement.com</a></p>
				</div>
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