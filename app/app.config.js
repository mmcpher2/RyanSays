

app.constant("FIREBASE_CONFIG", {
    apiKey: "AIzaSyBrPIQf5uMki-2lPlHtUfcH0-o3YtvhTXw",
    authDomain: "ryansays-293c9.firebaseapp.com",
    databaseURL: "https://ryansays-293c9.firebaseio.com",
    projectId: "ryansays-293c9",
    storageBucket: "ryansays-293c9.appspot.com",
    messagingSenderId: "579801690095"
})

angular.module("RyanSays").run(function (FIREBASE_CONFIG) {
    firebase.initializeApp(FIREBASE_CONFIG)
})

let isAuth = AuthFactory => new Promise ((resolve, reject) => {
    if (AuthFactory.isAuthenticated()){
        console.log("User is authenticated, resolve route promise")
        resolve()
    } else {
        console.log("User is not authenticated, reject route promise")
        reject()
    }
})

angular.module("RyanSays").config(function ($routeProvider) {
    /**
     * Configure all Angular application routes here
     */
    $routeProvider.
        when ('/', {
            templateUrl: "app/auth/partials/auth.html",
            controller: "AuthCtrl"
        })
        .when('/game', {
            templateUrl: "app/game/partials/game.html",
            controller: "GameCtrl",
            resolve: { isAuth }
        })
        .when('/leaderboard', {
            templateUrl: "app/leaderboard/partials/leaderboard.html",
            controller: "LeaderboardCtrl",
            resolve: { isAuth }
        })
        .when('/chatboard', {
            templateUrl: 'app/chatboard/partials/chatboard.html',
            controller: 'ChatboardCtrl',
            resolve: { isAuth }
        })
        .when('/auth', {
            templateUrl: 'app/auth/partials/auth.html',
            controller: 'AuthCtrl'
        })
        .otherwise('/')
})

