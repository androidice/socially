import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import template from './templates/partyDetails.html';

class PartyDetails {
    constructor($stateParams, $scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);

        this.partyId = $stateParams.partyId;
    }
}

function config($stateProvider) {
    'ngInject'

    $stateProvider
        .state('partyDetails', {
            url: '/parties/:partyId',
            template: '<party-details></party-details>'
        });
}

const name = 'partyDetails';


export default angular.module(name, [
    angularMeteor,
    uiRouter
]).component(name, {
    template,
    controllerAs: 'vm',
    controller: PartyDetails
}).config(config);