angular.module("RyanSays")
.controller("LeaderboardCtrl", function ($scope, $location, UserFactory) {
    $scope.users = []

    UserFactory.list().then((response)=>{
        $scope.users = response
    })
})