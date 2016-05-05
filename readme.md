Redux actions and reducer for fl-auth-*, an package for FounderLab apps
=======================================================================

Works alongside fl-auth-server and fl-auth-react.


Actions
-------

- login(url, email, password, callback)
    * Send a login request with the given email(username) and password to url.

- register(url, user_data, callback)
    * Send a register request with the given data to url.
    * user_data should contain the fields {email, password} at minimum

- resetRequest(url, email, callback)
    * Send a password reset email to the user who registered the email `email`

- reset(url, email, password, reset_token, callback)
    * Perform the password reset for a user that has requested a reset via resetRequest
    * reset_token will be present as a query param in a link from email they receive. Make sure it's picked up and passed along

- confirmEmail(url, email, token, callback)
    * Used when the user receives their email confirmation email. Pass the token back to the server.

- logout()
    * Clear the user's session and log them out.

- updateUser(user, callback)
    * Make changes to the user model directly.


accessTokenMiddleware
---------------------

Appends an access token to each request as a query string or header.


Usage: 
------
    // add to your reducers    
    import {reducer as auth} from 'fl-auth-redux'

    reducers = {
      auth,
      ...
    }

    ...


    // use the login, register actions from your components
    import {actions} from 'fl-auth-redux'
    
    actions.login(url, email, password)
    actions.register(url, user_data, password)
    actions.reset(url, email)


Changes: 

- 0.4.0: Made public, moved requestLoggerMiddleware to fl-react-utils
- 0.3.1: Added updateUser to synchronously update the user model
- 0.3.0: Added accessTokenMiddleware and requestLoggerMiddleware
- 0.2.0: Module refactor
- 0.1.0: Initial release
