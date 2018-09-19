module.exports = {
    database: 'mongodb://soweto_observer_db:123456@ds233320.mlab.com:33320/soweto_observer_db',
    port: 8080,
    cookieKey: 'joerihfwohjio3080r0f',
    google: {
        clientID: '879291965051-nen13vajotr11asgcp0gedf1d00k4kee.apps.googleusercontent.com',
        clientSecret: '9bOJ4lQ8B7vbvEMP97ZV2uEL',
        callbackURL: '/auth/google/callback'
    },
    facebook: {
        clientID: '',
        clientSecret: '',
        callbackURL: '/auth/facebook/callback'
    }
}