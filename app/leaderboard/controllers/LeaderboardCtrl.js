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
})