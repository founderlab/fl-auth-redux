# Auth package for FounderLab apps

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

