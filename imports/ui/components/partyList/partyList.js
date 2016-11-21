import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';

import {
    name as PartyAdd
} from '../partyAdd/partyAdd';
import {
    name as PartyRemove
} from '../partyRemove/partyRemove';

import {
    Parties
} from '../../../collections/parties';

import template from './templates/partyList.html'

class PartyList {
    constructor($scope, $reactive, $log) {
        'ngInject';
        $reactive(this).attach($scope);

        Meteor.subscribe('parties');

        this.helpers({
            parties: () => {
                return Parties.find({});
            }
        });
    }
}

function config($stateProvider) {
    'ngInject';
    $stateProvider
        .state('parties', {
            url: '/parties',
            template: '<party-list></party-list>'
        });
}

const name = 'partyList';

export default angular.module(name, [
        angularMeteor,
        uiRouter,
        PartyAdd,
        PartyRemove
    ]).component(name, {
        template,
        controllerAs: 'vm',
        controller: PartyList
    })
    .config(config);