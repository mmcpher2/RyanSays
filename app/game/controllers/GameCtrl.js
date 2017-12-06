angular.module("RyanSays")
.controller("GameCtrl", function($scope, $location, AuthFactory, UserFactory) {

    roundCounter = 1

    $scope.startGame = () => {
        newNumber = (Math.floor(Math.random() * 6) + 1)
        console.log(newNumber)
    }
})