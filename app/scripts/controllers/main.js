'use strict';

angular.module('bigHacksUiApp')
.controller('MainCtrl', function ($scope, $http, poller) {
    var NGROK_URL = '';

	  // in controller
	  $scope.events = [
	  ];

	  var people = [
	  {
	  	name: 'Hanwan Kong',
	  	country: 'China',
	  	img:'Hanwan'
	  },
	  {
	  	name: 'Gomez Castillo',
	  	country: 'Mexico',
	  	img:'Gomez'
	  },
	  {
	  	name: 'Leticia Evalon',
	  	country: 'Philippines',
	  	img:'Leticia'
	  },
	  {
	  	name: 'Shanti Arumugam',
	  	country: 'India',
	  	img:'Shanti'
	  },
	  {
	  	name: 'Meiling Yang',
	  	country: 'China',
	  	img: 'Meiling'
	  },
	  {
	  	name: 'Alphonse Peran',
	  	country: 'Philippines',
	  	img:'Alphonse'
	  },
	  {
	  	name: 'Tanisha Chopra',
	  	country: 'India',
	  	img:'Tanisha'
	  },
	  {
	  	name: 'Eduardo Souza',
	  	country: 'Mexico',
	  	img:'Eduardo'
	  }];

	  var randomIndex = function(){
	  	return Math.floor((Math.random() * 8));
	  };

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementIn = function($el) {
		$el.removeClass('timeline-hidden');
		$el.addClass('bounce-in');
	};

	// optional: not mandatory (uses angular-scroll-animate)
	$scope.animateElementOut = function($el) {
		$el.addClass('timeline-hidden');
		$el.removeClass('bounce-in');
	};

	var randomPeople = function(){
		return people[randomIndex()];
	};

	var resultPoller;

	var pollResults = function(response) {
		if (response.data.messageTime !== $scope.events[$scope.events.length-1].messageTime) {
			var contact = {};
			contact = angular.extend(contact, randomPeople());
			contact.message = response.data.translatedMessage;
			contact.messageTime = response.data.messageTime;
			contact.star = response.data.numStar;
			$scope.events.push(contact);
			console.log(contact);
		}
	};

	resultPoller = poller.get(NGROK_URL + '/message', {
                          delay: 1500     // delay for 5 seconds
                      });
	resultPoller.promise.then(null, null, pollResults);
	
	// profilesArr.forEach(function(entry){
	// 	var contact = randomPeople();
	// 	contact.message = entry.translatedMessage;
	// 	contact.messageTime = entry.messageTime;
	// 	contact.star = entry.star;
	// 	$scope.events.push(contact);
	// });
	function initialize() {
		$http({
			method: 'GET',
			url: NGROK_URL + '/messagelist'
		}).then(function successCallback(response) {
		     	// this callback will be called asynchronously
		     	// when the response is available

	     	console.log('response', response);
	     	angular.forEach(response.data, function(profile) {
	     		var contact = {};
	     		contact = angular.extend(contact, randomPeople());
	     		contact.message = profile.translatedMessage;
	     		contact.messageTime = profile.messageTime;
	     		contact.star = profile.numStar;
	     		$scope.events.push(contact);
	     		console.log(contact);
	     	});
	     });
	}

	initialize();
});
