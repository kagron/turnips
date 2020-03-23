import { Meteor } from 'meteor/meteor';
import { AccessTokens } from '../collections';
import moment from 'moment';
import { HTTP } from 'meteor/http';

const {
    clientId,
    secret,
    baseUrl,
    baseOauthUrl,
    myusername,
    mypassword
} = Meteor.settings.reddit;

export const getAccessToken = () => {
    const existingToken = AccessTokens.findOne();
    if (
        !existingToken || moment(existingToken.created_at)
            .add(existingToken.expires_in, 'seconds')
            .isSameOrBefore(moment(), 'minutes')
    ) {
        console.log('getting new token');
        return createAccessToken();
    }
    return existingToken;
}

export const createAccessToken = () => {
    const result = HTTP.post(
        `${baseUrl}/access_token`,
        {
            auth: `${clientId}:${secret}`,
            params: {
                grant_type: 'password',
                username: myusername,
                password: mypassword
            }
        }
    );
    if (!result.data) { 
        console.error('something went wrong in createAccessToken()');
    } else {
        // const { access_token, token_type, expires_in, scope } = result.data;
        AccessTokens.insert({
            ...result.data,
            createdAt: new Date()
        });
    }
    console.log(result);
}

export const getNewPosts = () => {
    const accessToken = getAccessToken();
    const result = HTTP.get(
        `${baseOauthUrl}/acturnips/new`,
        {
            headers: {
                'User-Agent': 'myself:turnips:v1.0.0',
                Authorization: `bearer ${accessToken.access_token}`
            },
            params: {
                limit: 10,
            }
        }
    )
}