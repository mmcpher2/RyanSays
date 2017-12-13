angular
.module("RyanSays")
.controller("ChatboardCtrl",
function ($scope, $location, AuthFactory, UserFactory, ChatFactory, $timeout) {

    $scope.userChats = []

    // Get current user
    $scope.user = AuthFactory.getUser()
    // Get the single current user that has the same uid and userID and get that user FB KEY
    UserFactory.single($scope.user.uid).then((user)=>{
        for (var key in user) {
            $scope.userObj = user[key]
        }
    })

    // Setting date structure up for addChat()
    let today = new Date()
    let dd = today.getDate()
    let mm = today.getMonth()+1
    let yyyy = today.getFullYear()
   if(dd<10) {
        dd = "0"+dd
    }
   if(mm<10) {
        mm = "0"+mm
    }
   today = mm + "/" + dd + "/" + yyyy


    $scope.addChat = function(newChat) {
        chatObj =   {
            "userId": $scope.userObj.uid,
            "firstName": $scope.userObj.firstName,
            "lastName": $scope.userObj.lastName,
            "datePosted": today,
            "comment": $scope.newChat
        }
        // Adding new user object to FB through UserFactory add "POST" function
        ChatFactory.addChat(chatObj).then(function () {
            // $scope.userChats = ""
            ChatFactory.listChats().then(function (response) {
                    $scope.userChats = response
            })
        })
        $scope.newChat = ""
    }
    ChatFactory.listChats().then(function (response) {
        $scope.userChats = response
    })
})