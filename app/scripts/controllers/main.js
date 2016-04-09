'use strict';

/**
 * @ngdoc function
 * @name bigHacksUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bigHacksUiApp
 */
/*JSONprop - name, message, country, time, star,*/

var people = [
{
	name: 'Hanwan Kong',
	country: 'China'
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

// var profilesArr = [{
// 	'orignalMessage': 'Je  m\'appelle Vinod',
// 	'translatedMessage': 'My business has been blooming ever since I got funded by donors from KIVA to buy my shop. I couldn\'t have done it without their support',
// 	'messageTime': '2016-04-09T12:30:23.000Z',
// 	'sender': '+16506031106',
// 	'star' : '3'
// }, {
// 	'orignalMessage': 'Serious ah bro',
// 	'translatedMessage': 'Thank you for the opportunity given by KIVA\'s donors. The financial opportunity has given me the power to give back to my society.',
// 	'messageTime': '2016-04-09T09:14:11.000Z',
// 	'sender': '+16506031106',
// 	'star' :'2.5'
// }, {
// 	'orignalMessage': 'Hi',
// 	'translatedMessage': 'I bought 20 hens for my small egg farm with the money provided. My children now learns to rear them for me too.',
// 	'messageTime': '2016-04-09T09:04:20.000Z',
// 	'sender': '+16506031106',
// 	'star': '4'
// }, {
// 	'orignalMessage': 'Voulez vous couchez avec moi',
// 	'translatedMessage': 'It was a tough time for me because the typhoon destroyed the crops. Thanks to the money I received, I managed to build a decent business today.',
// 	'messageTime': '2016-04-09T12:32:45.000Z',
// 	'sender': '+16506031106',
// 	'star':'3.5'
// },{
// 	'orignalMessage': 'Sweet',
// 	'translatedMessage': 'The money has provided me with a great relief after I lost everything to the natural disaster.',
// 	'messageTime': '2016-04-09T10:33:42.000Z',
// 	'sender': '+16506031106',
// 	'star': '3'
// }, {
// 	'orignalMessage': 'Bonjour',
// 	'translatedMessage': 'I have opened a school with the money to help my village\'s children get education which can help them tremendously in their future.',
// 	'messageTime': '2016-04-09T15:20:29.000Z',
// 	'sender': '+16506031106',
// 	'star': '4.5'
// }];

var randomIndex = function(){
	// var index = Math.floor((Math.random() * 8));
	// console.log('index', index);
	// return index;
	return Math.floor((Math.random() * 8));
};

var randomPeople = function(){
	return people[randomIndex()];
};

angular.module('bigHacksUiApp')
  .controller('MainCtrl', function ($scope, $http) {
	  // in controller
	$scope.events = [
	];
	
	// profilesArr.forEach(function(entry){
	// 	var contact = randomPeople();
	// 	contact.message = entry.translatedMessage;
	// 	contact.messageTime = entry.messageTime;
	// 	contact.star = entry.star;
	// 	$scope.events.push(contact);
	// });
	$http({
   		method: 'GET',
   		url: 'http://a183674a.ngrok.io/messagelist'
	 }).then(function successCallback(response) {
     	// this callback will be called asynchronously
     	// when the response is available

     	//console.log(response);
     	angular.forEach(response, function(profile) {
     		var contact = {};
     		contact = angular.extend(contact, randomPeople());
	     	contact.message = profile.translatedMessage;
	     	contact.messageTime = profile.messageTime;
	     	contact.star = profile.progress;
	     	$scope.events.push(contact);
	     	console.log(contact);
     	});
   	});//, //function errorCallback(response) {
    	// called asynchronously if an error occurs
    	// or server returns response with an error status.
  	//});
  });