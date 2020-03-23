import { Meteor } from 'meteor/meteor';
import '/imports/api/collections';
import '/imports/api/methods';
import '/imports/api/publications';
import '/imports/api/JsonRoutes/';
import '/imports/jobs/SyncedCron';

Meteor.startup(() => {
  SyncedCron.start();
});