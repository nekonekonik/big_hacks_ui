'use strict';

/**
 * @ngdoc function
 * @name bigHacksUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bigHacksUiApp
 */
/*JSONprop - name, message, country, time*/

var people = [{
	name: 'Nadia Gomeza',
	country: 'Russia'
},
{
	name: 'Hanwan Kong',
	country: 'China'
},
{
	name: 'Yakob Dermalitzki',
	country: 'Russia'
},
{
	name: 'Gomez Castillo',
	country: 'Mexico'
},
{
	name: 'Leticia Evalon',
	country: 'Philippines'
},
{
	name: 'Shanti Arumugam',
	country: 'India'
},
{
	name: 'Meiling Yang',
	country: 'China'
},
{
	name: 'Alphonse Peran',
	country: 'Philippines'
},
{
	name: 'Tanisha Chopra',
	country: 'India'
},
{
	name: 'Eduardo Souza',
	country: 'Mexico'
}];

var json = [{"orignalMessage":"Je  m'appelle Vinod","translatedMessage":"My name is Vinod","messageTime":"2016-04-09T12:30:23.000Z","sender":"+16506031106"},{"orignalMessage":"Serious ah bro","translatedMessage":"Serious ah bro","messageTime":"2016-04-09T09:14:11.000Z","sender":"+16506031106"},{"orignalMessage":"Hi","translatedMessage":"Hi","messageTime":"2016-04-09T09:04:20.000Z","sender":"+16506031106"}];

var randomIndex = function(){
	return Math.floor((Math.random() * 10));
};

var randomPeople = function(){
	return people[randomIndex()];
};

angular.module('bigHacksUiApp')
  .controller('MainCtrl', function ($scope) {
	  // in controller
	$scope.events = [
	];
	
	json.forEach(function(entry){
		var contact = randomPeople();
		contact.message = entry.translatedMessage;
		contact.messageTime = entry.messageTime;
		$scope.events.push(contact);
	});
	// $http({
 //  		method: 'GET',
 //  		url: 'http://big-hacks.herokuapp.com/messagelist'
	// }).then(function successCallback(response) {
 //    	// this callback will be called asynchronously
 //    	// when the response is available
 //    	console.log(response[0]);
 //    	var contact = randomPeople();
 //    	contact.message = response[0].translatedMessage;
 //    	contact.messageTime = response[0].messageTime;
 //    	$scope.events.push(contact);
 //    	console.log(contact);
 //  	});//, //function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	//});
  });