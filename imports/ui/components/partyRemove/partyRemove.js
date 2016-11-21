import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Parties } from '../../../collections/parties';

import template from './templates/partyRemove.html';

class PartyRemove {
    constructor($scope, $reactive, $log){
      'ngInject';
      $reactive(this).attach($scope);

      this.remove = ()=>{
        if(this.party){
          Parties.remove(this.party._id);
        }
      }
    }
}

const name = 'partyRemove';

export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  controllerAs: 'vm',
  controller: PartyRemove,
  bindings: {
  	party: '='
  }
});