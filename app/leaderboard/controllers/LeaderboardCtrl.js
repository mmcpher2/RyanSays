angular.module("RyanSays")
.controller("LeaderboardCtrl", function ($scope, $location, UserFactory, AuthFactory) {

    $scope.users = []

    UserFactory.list().then((response)=>{
        $scope.users = response
    })
    // Get current user
    $scope.user = AuthFactory.getUser()
    // Get the single current user that has the same uid and userID and get that user FB KEY
    UserFactory.single($scope.user.uid).then((user)=>{
        for (var key in user) {
            $scope.userObj = user[key]
        }
    })
    // Share the users high score on their facbook page when they click the share button
    document.getElementById('shareBtn').onclick = function() {
        FB.ui({
        display: 'popup',
        method: 'share',
        mobile_iframe: true,
        quote: `I just lasted ${$scope.userObj.highScore} weeks as the Athletic Director at the University of Tennessee!

        Play the Tennessee Athletic Director simulator and see how long you can last by clicking the link below... It's incredible.`,
        href: 'https://mmcpher2.github.io/RyanSays/',
        }, function(response){});
    }
})
