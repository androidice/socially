import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../../../collections/parties';

import template from './templates/partyAdd.html';

class PartyAdd {
	constructor($scope, $reactive, $log){
		'ngInject';
		$reactive(this).attach($scope);
		
		this.party = {};

		this.submit = ()=>{
			Parties.insert(this.party);
			this.reset();
		}

		this.reset = ()=>{
			this.party = {}
		}
	}
}

const name = 'partyAdd';

export default angular.module(name, [
	angularMeteor
]).component(name, {
	template,
	controllerAs: 'vm',
	controller: PartyAdd
});