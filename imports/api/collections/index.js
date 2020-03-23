const Settings = new Mongo.Collection('settings');
const AccessTokens = new Mongo.Collection('access-tokens');

export {
    Settings,
    AccessTokens
}