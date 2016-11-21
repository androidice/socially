import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import { name as PartyList } from '../partyList/partyList'
import { name as PartyDetails } from '../partyDetails/partyDetails'

import template from './templates/socially.html';


class Socially{
	constructor($scope, $reactive, $log){
		'ngInject';
		$reactive(this).attach($scope);
	}
}

function config($locationProvider, $urlRouterProvider){
	'ngInject';
  $locationProvider.html5Mode(true);
 
  $urlRouterProvider.otherwise('/parties');
}

const name = 'socially';

export default angular.module(name, [
	angularMeteor,
	uiRouter,
	PartyList,
	PartyDetails
]).component(name, {
	template,
	controllerAs: 'vm',
	controller: Socially
})
.config(config);