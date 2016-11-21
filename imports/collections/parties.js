import { Mongo } from 'meteor/mongo';
export const Parties = new Mongo.Collection('parties');

if(Meteor.isServer){
	Meteor.publish('parties', ()=>{
		return Parties.find();
	});
}