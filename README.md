#MyApiFilms NodeJS module
This module queries myapifilms.com and allows you to retrieve infos about films and actors via IMDB or TMDB

## Overview

* [Install](#install)
* [Usage](#usage)
* [Parameters](#parameters)
	- IMDB
	* [getById](##getById)
	* [searchByTitle](#searchByTitle)
	* [getActById](#getActById)
	* [searchActByName](#searchActByName)
	- TMDB
	* [tmdbSeachByTitle](#tmdbSeachByTitle)
	* [tmdbSearchById](#tmdbSearchById)
* [License](#license)

##Install
```
npm install myapifilms
```

##Usage
```js
var MyApiFilms = require('myapifilms');

/* 	
	IMDB APIS
*/

MyApiFilms.getById(IMDBID, parameters, callback); //Get movie / tv serie / videogame by ID
MyApiFilms.searchByTitle(TITLE, parameters, callback); //Search for movie / tv serie / videogame by TITLE
MyApiFilms.getActById(ACTID, parameters, callback); //Get actor data by ID
MyApiFilms.searchActByName(ACTORNAME, parameters, callback); //Search actor by NAME

/* 	
	TMDB APIS
*/
MyApiFilms.tmdbSeachByTitle(TITLE, parameters, callback); //Search Movie by TITLE
MyApiFilms.tmdbSearchById(IMDBID, parameters, callback); // Search Movie by ID

callback = function(data)
{
	//data will be an object containing the results
}
```

##Parameters
Exhaustive list of parameters and usage is available [here][myapifilms_imdb] for IMDB and [here][myapifilms_tmdb] for TMDB

###getById
```js
parameters = {
	"actors": "N",
	"actorActress": 0,
	"actorTrivia": 0,
	"aka": 0,
	"awards": 0,
	"bornDied": 0,
	"business": 0,
	"filmography": 0,
	"lang": "en-us",
	"movieTrivia": 0,
	"seasons": 0,
	"seasonYear": 0,
	"starSign": 0,
	"technical": 0,
	"trailer": 0,
	"uniqueName": 0
};
```

###searchByTitle
```js
parameters = {
	"actors": "N",
	"actorActress": 0,
	"actorTrivia": 0,
	"aka": 0,
	"awards": 0,
	"bornDied": 0,
	"business": 0,
	"exactFilter": 0,
	"filmography": 0,
	"filter": "N",
	"lang": "en-us",
	"limit": "1",
	"movieTrivia": 0,
	"offset": 0,
	"seasons": 0,
	"seasonYear": 0,
	"starSign": 0,
	"technical": 0,
	"trailer": 0,
	"uniqueName": 0,
	"year": ""
};
```

###getActById
```js
parameters = {
	"actorActress": 0,
	"actorTrivia": 0,
	"bornDied": 0,
	"filmography": 0,
	"lang": "en-us",
	"starSign": 0,
	"uniqueName": 0
};
```

###searchActByName
```js
parameters = {
	"actorActress": 0,
	"actorTrivia": 0,
	"bornDied": 0,
	"exactFilter": 0,
	"filmography": 0,
	"lang": "en-us",
	"limit": 1,
	"offset": 0,
	"starSign": 0,
	"uniqueName": 0
};
```

###tmdbSeachByTitle
```js
parameters = {
	"year": 0,
	"language": "en",
	"includeAdult": 1,
	"page": 0
};
```

###tmdbSearchById
```js
parameters = {
	"language": "en",
	"alternativeTitles": 0,
	"casts": 0,
	"images": 0,
	"keywords": 0,
	"releases": 0,
	"trailers": 0,
	"translations": 0,
	"similarMovies": 0,
	"reviews": 0,
	"lists": 0
};
```

##License
This product is released under the [MIT License][opensource].

[myapifilms_imdb]: http://www.myapifilms.com/index.jsp
[myapifilms_tmdb]: http://www.myapifilms.com/tmdb.jsp
[opensource]: http://www.opensource.org/licenses/MIT