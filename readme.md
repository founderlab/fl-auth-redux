# Auth package for FounderLab apps

Contains redux actions and a reducer to go with fl-auth-server and fl-auth-react.

Also contains:

####accessTokenMiddleware
Appends an access token to each request as a query string or header.

###requestLoggerMiddleware
Auto logs all rewuests to the console.

Usage: 

    // add to your reducers    
    import {reducer as auth} from 'fl-auth-redux'

    reducers = {
      auth,
      ...
    }

    ...


    // send login / register actions
    import {actions as auth_actions} from 'fl-auth-redux'
    
    actions.login(url, email, password)
    actions.register(url, email, password)
    actions.reset(url, email)


Changes: 

- 0.3.1: Added updateUser to synchronously update the user model
- 0.3.0: Added accessTokenMiddleware and requestLoggerMiddleware
- 0.2.0: Module refactor
- 0.1.0: Initial release
