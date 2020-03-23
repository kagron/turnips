import * as React from 'react';
import { Meteor } from 'meteor/meteor';
import { Route, Redirect } from 'react-router-dom';
import { withTracker } from 'meteor/react-meteor-data';
// import { Roles } from 'meteor/alanning:roles';

const AuthenticatedRoute = (props) => (
    <>
        {props.isLoggingIn ? (
            // If user is currently logging in
            null
        ) : (
            returnRoute(props)
        )}
    </>
);

const returnRoute = (props) => {
    const { checkType, roles, user, isLoggingIn } = props;
    switch (checkType) {
        case 'checkIsLoggedIn':
            return (
                props.user !== null || isLoggingIn ? (
                    <Route {...props} />
                ) : (
                    // If user isn't signed in, redirect
                    <>
                        <Redirect to={'/login'} push={true} />
                    </>
                )
            );
        // case 'checkIsInRole':
        //     return (
        //         user &&
        //         roles &&
        //         Roles.userIsInRole(user._id, roles) ? (
        //             <Route {...props} />
        //         ) : (
        //             <Redirect to={'/login'} push={true} />
        //         )
        //     );
        default :
            return (
                <Redirect to={'/login'} push={true} />
            );
    }
};

const getMeteorData = (props) => ({
    user: Meteor.user(),
    isLoggingIn:  Meteor.loggingIn(),
    // rolesReady: Roles.subscription.ready()
});

export default withTracker(getMeteorData)(AuthenticatedRoute);
