'use strict';

/**
 * @ngdoc function
 * @name bigHacksUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bigHacksUiApp
 */
angular.module('bigHacksUiApp')
  .controller('MainCtrl', function ($scope) {

	  // in controller
	  $scope.events = [{
	    badgeClass: 'info',
	    badgeIconClass: 'glyphicon-check',
	    title: 'First heading',
	    content: 'Some awesome content.'
	  }, 
	  {
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-credit-card',
	    title: 'Second heading',
	    content: 'More awesome content.'
	  },
	  {
	    badgeClass: 'info',
	    badgeIconClass: 'glyphicon-check',
	    title: 'First heading',
	    content: 'Some awesome content.'
	  }, 
	  {
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-credit-card',
	    title: 'Second heading',
	    content: 'More awesome content.'
	  },
	  {
	    badgeClass: 'info',
	    badgeIconClass: 'glyphicon-check',
	    title: 'First heading',
	    content: 'Some awesome content.'
	  }, 
	  {
	    badgeClass: 'warning',
	    badgeIconClass: 'glyphicon-credit-card',
	    title: 'Second heading',
	    content: 'More awesome content.'
	  }];

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
  });
