angular.module("RyanSays").controller("ChatboardCtrl",
function ($scope, $location, AuthFactory, UserFactory, ChatFactory) {

    // Get current user
    $scope.user = AuthFactory.getUser()
    // Get the single current user that has the same uid and userID and get that user FB KEY
    UserFactory.single($scope.user.uid).then((user)=>{
        for (var key in user) {
            $scope.userObj = user[key]
        }
    })

    $scope.addChat = function(newChat) {
          chatObj =   {
              "userId": $scope.userObj.uid,
              "firstName": $scope.userObj.firstName,
              "lastName": $scope.userObj.lastName,
              "datePosted": Date.now(),
              "comment": $scope.newChat
          }
          // Adding new user object to FB through UserFactory add "POST" function
          ChatFactory.addChat(chatObj)
        }
})