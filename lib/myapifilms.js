var request = require('request');
var util = require('util');

module.exports = MyApiFilms;

function MyApiFilms()
{
	this._apiUrl = "http://www.myapifilms.com/imdb";
	this._TMDBUrl = "http://www.myapifilms.com/tmdb";
}

MyApiFilms.getById = function(imdbid, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if (!imdbid.match(/^tt\d{7}$/))
	{
		throw new Error("imdbid is invalid");
	}
	var options = util._extend(
	{
		"idIMDB": "",
		"actors": "N",
		"actorActress": 0,
		"actorTrivia": 0,
		"aka": 0,
		"awards": 0,
		"bornDied": 0,
		"business": 0,
		"filmography": 0,
		"format": "json",
		"lang": "en-us",
		"movieTrivia": 0,
		"seasons": 0,
		"seasonYear": 0,
		"starSign": 0,
		"technical": 0,
		"trailer": 0,
		"uniqueName": 0,
		"callback": "apifilms"
	}, parameters);
	options.format = "json";
	options.idIMDB = imdbid;

	request(
	{
		"uri": myapifilms._apiUrl,
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		callback(JSON.parse(body));
	});
};

MyApiFilms.searchByTitle = function(title, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if(title == "")
	{
		throw new Error("Title couldn't be empty!");
	}

	var options = util._extend(
	{
		"title": "",
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
		"format": "json",
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
		"year": "",
		"callback": "apifilms"
	}, parameters);
	options.format = "json";
	options.title = title;

	if(options.year != "")
	{
		if(options.year.match(/^\d{4}$/))
		{
			throw new Error("Year is invalid!");
		}
	}

	request(
	{
		"uri": myapifilms._apiUrl,
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		callback(JSON.parse(body));
	});
};

MyApiFilms.getActById = function(actid, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if(!actid.match(/^nm\d{7}$/))
	{
		throw new Error("Actor id is invalid!");
	}

	var options = util._extend(
	{
		"idName": "",
		"actorActress": 0,
		"actorTrivia": 0,
		"bornDied": 0,
		"filmography": 0,
		"format": "json",
		"lang": "en-us",
		"starSign": 0,
		"uniqueName": 0,
		"callback": "apifilms"
	}, parameters);
	options.format = "json";
	options.idName = actid;

	request(
	{
		"uri": myapifilms._apiUrl,
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		callback(JSON.parse(body));
	});
};

MyApiFilms.searchActByName = function(actname, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if(actname == "")
	{
		throw new Error("Actor name couldn't be empty!");
	}

	var options = util._extend(
	{
		"name": "",
		"actorActress": 0,
		"actorTrivia": 0,
		"bornDied": 0,
		"exactFilter": 0,
		"filmography": 0,
		"format": "json",
		"lang": "en-us",
		"limit": 1,
		"offset": 0,
		"starSign": 0,
		"uniqueName": 0,
		"callback": "apifilms"
	}, parameters);
	options.format = "json";
	options.name = actname;

	request(
	{
		"uri": myapifilms._apiUrl,
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		callback(JSON.parse(body));
	});
};

MyApiFilms.tmdbSeachByTitle = function(title, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if(title == "")
	{
		throw new Error("Title couldn't be empty!");
	}

	var options = util._extend(
	{
		"title": "",
		"format": "json",
		"year": 0,
		"language": "en",
		"includeAdult": 1,
		"page": 0
	}, parameters);
	options.format = "json";
	options.title = title;

	request(
	{
		"uri": myapifilms._TMDBUrl + "/searchMovie",
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		callback(JSON.parse(body));
	});
};

MyApiFilms.tmdbSearchById = function(imdbid, parameters, callback)
{
	var myapifilms = new MyApiFilms();

	if (!imdbid.match(/^tt\d{7}$/))
	{
		throw new Error("imdbid is invalid");
	}

	var options = util._extend(
	{
		"idIMDB": "",
		"format": "json",
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
	}, parameters);
	options.format = "json";
	options.idIMDB = imdbid;

	request(
	{
		"uri": myapifilms._TMDBUrl + "/movieInfoImdb",
		"qs": options,
		"method": "GET"
	}, function(err, res, body) {
		var json = JSON.parse(body);
		if(typeof(json.images) != "undefined")
		{
			for(i in json.images)
			{
				json.images[i].url = "https://image.tmdb.org/t/p/w1000" + json.images[i].file_path;
			}
		}
		callback(json);
	});
};