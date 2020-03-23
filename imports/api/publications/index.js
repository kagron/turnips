import { Meteor } from 'meteor/meteor';
import { Settings, AccessTokens } from '../collections';
import { checkIfLoggedIn } from '../utils';

Meteor.publish({
    'settings'() {
        checkIfLoggedIn('You must be logged in to subscribe to the settings');
        return Settings.find();
    }
});