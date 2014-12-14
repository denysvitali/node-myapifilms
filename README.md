#MyApiFilms NodeJS module
This module queries myapifilms.com and allows you to retrieve infos about films and actors via IMDB or TMDB

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
```

##Parameters
Exhaustive list of parameters is available [here][myapifilms_imdb] for IMDB and [here][myapifilms_tmdb] for TMDB

##License
This product is released under the [MIT License][opensource].

[myapifilms_imdb]: http://www.myapifilms.com/index.jsp
[myapifilms_tmdb]: http://www.myapifilms.com/tmdb.jsp
[opensource]: http://www.opensource.org/licenses/MIT