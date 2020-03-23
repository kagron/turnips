import { Meteor } from 'meteor/meteor';

export const checkIfLoggedIn = (message) => {
    if (!Meteor.userId()) {
        throw new Meteor.Error('not-logged-in', message);
    }
}