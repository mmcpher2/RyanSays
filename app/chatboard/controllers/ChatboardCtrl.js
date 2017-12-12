angular.module("RyanSays").controller("ChatboardCtrl",
function ($scope, $location, AuthFactory, UserFactory, ChatFactory) {


    // $scope.addChat = function() {
    //       chatObj =   {
    //           "userId": null,
    //           "firstName": null,
    //           "lastName": null,
    //           "datePosted": null,
    //           "comment": null
    //       }
    //       // Adding new user object to FB through UserFactory add "POST" function
    //       ChatFactory.addChat(chatObj)
    //     }

    // // Get current user
    // $scope.user = AuthFactory.getUser()
    // // Get the single current user that has the same uid and userID and get that user FB KEY
    // UserFactory.single($scope.user.uid).then((user)=>{
    //     for (var key in user) {
    //         $scope.userObj = user[key]
    //     }
    // })
})