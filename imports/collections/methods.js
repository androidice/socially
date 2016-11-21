import { Meteor } from 'meteor/meteor';
import { Parties } from './parties';
export function addParty(party){

}

export function getParties(){
  return Parties.find({}).fetch();
}

Meteor.methods({
  'socially.addParty': addParty,
  'socially.getParties': getParties
});