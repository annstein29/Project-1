$(document).foundation();
var imageBaseUrl = 'https://image.tmdb.org/t/p/';
$(document).ready(function () {
	//var apiBaseURL = 'https://api.themoviedb.org/3/movie/335983/videos?api_key='
	var apiBaseURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=';
	var apiTmdbkey = 'cf9588340d8a721412af021d7fc6ba6a';
	var imageBaseUrl = 'https://image.tmdb.org/t/p/';

	//swap 600 for ImageURL
	//var imageURL = 'https://api.themoviedb.org/3/movie/600/images?api_key=cf9588340d8a721412af021d7fc6ba6a';
	var youTubeLink = 'https://api.themoviedb.org/3/movie/335983/videos?api_key=cf9588340d8a721412af021d7fc6ba6a';

	var tmdbURL = apiBaseURL + apiTmdbkey;
	//console.log(tmdbURL);

	var settings = {
		"url": apiBaseURL + apiTmdbkey,
		"method": "GET",
	}

	$.ajax(settings).done(function (response) {
	//	console.log(response);
		//	console.log(response.results[0].overview);
		//var overview = response.results[0].overview;

		for (i = 0; i < response.results.length; i++) {
			//console.log(response.results[i].id);
			//	document.getElementById('movie-grid').innerHTML += '<iframe width="753" height="380" src="https://www.youtube.com/embed/'+ response.results[i].key+ '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

			//console.log(imageBaseUrl + 'w300' + response.results[i].poster_path);

			document.getElementById('movie-grid').innerHTML += '<img src="' + imageBaseUrl + 'w300' + response.results[i].poster_path + '" id = "' + response.results[i].id + '" onclick = "reveal(this.id)">';



			//	document.getElementById('movie-grid').innerHTML = '<img src="'+imageBaseUrl + 'w300' + response.results[i].poster_path +'"';

		//	console.log(response);
			//console.log(response.results[i].overview);

			//Youtube embed
			// var settings = {
			// 	//"url": apiBaseURL+apiTmdbkey,
			// 	"url": "https://api.themoviedb.org/3/movie/" + response.results[i].id + "/videos?api_key=cf9588340d8a721412af021d7fc6ba6a",
			// 	"method": "GET",
			// }
			// var count=0;
			// console.log(response.results[i].id);
			// $.ajax(settings).done(function (responses) {
			// 	console.log(responses);
			// 	console.log(responses.results[count].key);
			// 	//console.log(response.key);
			// 	//console.log('THIS IS' + responses.results.length);
			// 	document.getElementById('movie-grid').innerHTML += '<iframe width="753" height="380" src="https://www.youtube.com/embed/' + responses.results[count].key + '" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

			// });
			// count++;
		}
	});



});

var clickedId;

function reveal(clickedId) {
	var settings = {
		"url": "https://api.themoviedb.org/3/movie/" + clickedId + "?api_key=cf9588340d8a721412af021d7fc6ba6a",
		"method": "GET",
	}
			var exampleModal9 = document.getElementById(clickedId).value;
	$.ajax(settings).done(function (response) {
		console.log(response);
		//alert(response.overview);
		document.innerHTML = '<div class="row"><div class="row"><div class="columns"><p><a data-toggle="'+exampleModal9+'">Click me for an overlay-lacking modal</a></p><div class="reveal" id="exampleModal9" data-reveal data-overlay="false"><h2 id="firstModalTitle">This is a modal.</h2><img src="'+ imageBaseUrl + 'w300' + response.poster_path +'">;<p><a href="#" data-reveal-id="secondModal" class="secondary button">Second Modal...</a></p><button class="close-button" data-close aria-label="Close reveal" type="button"><span aria-hidden="true">&times;</span></button></div></div></div></div><script>$(document).foundation();</script>';
		//$('#movie-grid').html(a);
	});
	//document.getElementById('display-movie').style.display = 'block';
}


$(document).foundation();


window.onload = function () {
	stickyFooter();

	//you can either uncomment and allow the setInterval to auto correct the footer
	//or call stickyFooter() if you have major DOM changes
	//setInterval(checkForDOMChange, 1000);
};

//check for changes to the DOM
function checkForDOMChange() {
	stickyFooter();
}

//check for resize event if not IE 9 or greater
window.onresize = function () {
	stickyFooter();
}

//lets get the marginTop for the <footer>
function getCSS(element, property) {

	var elem = document.getElementsByTagName(element)[0];
	var css = null;

	if (elem.currentStyle) {
		css = elem.currentStyle[property];

	} else if (window.getComputedStyle) {
		css = document.defaultView.getComputedStyle(elem, null).
			getPropertyValue(property);
	}

	return css;

}

function stickyFooter() {

	if (document.getElementsByTagName("footer")[0].getAttribute("style") != null) {
		document.getElementsByTagName("footer")[0].removeAttribute("style");
	}

	if (window.innerHeight != document.body.offsetHeight) {
		var offset = window.innerHeight - document.body.offsetHeight;
		var current = getCSS("footer", "margin-top");

		if (isNaN(current) == true) {
			document.getElementsByTagName("footer")[0].setAttribute("style", "margin-top:0px;");
			current = 0;
		} else {
			current = parseInt(current);
		}

		if (current + offset > parseInt(getCSS("footer", "margin-top"))) {
			document.getElementsByTagName("footer")[0].setAttribute("style", "margin-top:" + (current + offset) + "px;");
		}
	}
}

/*
! end sticky footer
*/
