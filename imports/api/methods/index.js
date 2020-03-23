import { Meteor } from 'meteor/meteor';
import { checkIfLoggedIn } from '../utils';
import { getAccessToken, getNewPosts } from './utils';

Meteor.methods({
    'getAccessToken'() {
        // checkIfLoggedIn('You must be logged in to retrieve the access token');
        return getAccessToken();
    },
    'getRecentPosts'() {
        return getNewPosts();
    }
});