import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { name as Socially } from '../imports/ui/components/socially/socially';

const name = 'main';
angular.module(name, [
	angularMeteor,
	Socially
]);