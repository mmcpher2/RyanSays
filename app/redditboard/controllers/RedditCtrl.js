angular.module("RyanSays")
.controller("RedditCtrl", function ($scope, $location, AuthFactory, UserFactory, RedditFactory) {

    // Get current user
    $scope.user = AuthFactory.getUser()
    // Get the single current user that has the same uid and userID and get that user FB KEY
    UserFactory.single($scope.user.uid).then((user)=>{
        for (var key in user) {
            $scope.userObj = user[key]
        }
    })

    $scope.reddits = []

    RedditFactory.listReddits().then(function (response) {

        let allRedditPosts = response.data.children

        console.log("All Posts: " + allRedditPosts)
    })
})