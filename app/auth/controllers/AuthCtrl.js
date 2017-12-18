angular.module("RyanSays")
.controller("AuthCtrl", function($scope, $location, AuthFactory, UserFactory) {

      // Init slider
      $('.slider').slider();
      // Pause slider
      $('.slider').slider('pause');
      // Start slider
      $('.slider').slider('start');
      // Next slide
      $('.slider').slider('next');
      // Previous slide
      $('.slider').slider('prev');

    $scope.loginauth = {}
    $scope.registerauth = {}


    $scope.logoutUser = function(){
        AuthFactory.logout()
        $location.url("/auth")
    }

    $scope.logMeIn = function (credentials) {
        AuthFactory.authenticate(credentials).then(function (didLogin) {
            // $scope.login = {}
            // $scope.register = {}
            // Send user to game page (Log them in...)
            $location.url("/game")
        })
    }

    $scope.registerUser = function(registerNewUser) {
      AuthFactory.registerWithEmail(registerNewUser).then(function (didRegister) {
        $scope.logMeIn(registerNewUser)

        // didRegister is the FB object which has the unique FB user id in it, which I will need to add to the user DB
        userObj =   {
            "userId": didRegister.uid,
            "firstName": registerNewUser.firstName,
            "lastName": registerNewUser.lastName,
            "highScore": 0,
            "payout": 0
        }
        // Adding new user object to FB through UserFactory add "POST" function
        UserFactory.add(userObj)

      })
    }
})