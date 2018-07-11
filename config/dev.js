module.exports = {
    database: 'mongodb://soweto_observer_db:123456@ds233320.mlab.com:33320/soweto_observer_db',
    port: 8080,
    cookieKey: 'joerihfwohjio3080r0f',
    google: {
        clientID: '88418002742-ok4cghd3jch12b16h81echcd2oc825cu.apps.googleusercontent.com',
        clientSecret: 'tDaAB1sGwO1ocEgX-Ag5l9iC',
        callbackURL: '/auth/google/callback'
    },
    facebook: {
        clientID: '',
        clientSecret: '',
        callbackURL: '/auth/facebook/callback'
    }
}