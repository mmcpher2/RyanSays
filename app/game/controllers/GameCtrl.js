angular.module("RyanSays")
.controller("GameCtrl", function($scope, UserFactory, AuthFactory) {

    $scope.user = AuthFactory.getUser()
    console.log($scope.user)

    UserFactory.single($scope.user.uid).then((user)=>{
        console.log(user)
        for (var key in user) {
            console.log(user[key])
            $scope.userKey = key
            $scope.userObj = user[key]
        }
    })

    $scope.startGame = function () {

        // Starting roundcounter at 0, but will start at 1 once it increments in startRound()
        $scope.roundCounter = 0
        // Starting with empty numbersArray, but will push random number in startRound()
        let numbersArray = []
        // Counts number of times through each gameLoop() loop
        loopCounter = 0

        // Multiply timeout delays by 10
        let num = 10
        // Responsible for handing each new round, and starting gameLoop()
        let startRound = function () {
            // Adding 1 to show with round you are on
            $scope.roundCounter += 1
            console.log($scope.roundCounter)
            // Pushing new random number into (end of) numbersArray
            numbersArray.push((Math.floor(Math.random() * 6) + 1))
            console.log(numbersArray[loopCounter])
            console.log(numbersArray)

            for (let i = 0; i < numbersArray.length; i++) {
                console.log(i)
                let selectedElement = numbersArray[i]
                console.log("selectedElement", selectedElement)
                doSetTimeout(selectedElement, num)
                num += 1
            }
        }
        // Setting the delay for adding the addBackground class to the buttons in the nubersArray
        function doSetTimeout(selectedElement, num1) {
            setTimeout(() => {
                document.getElementById(`${selectedElement}`).className = "addBackground"
                doAnotherSetTimeout(selectedElement, num1)
            }, 250 * num1)
            // Setting the delay for removing the addBackground class to the buttons
            function doAnotherSetTimeout(selectedElement, num2) {
                setTimeout(() => {
                    document.getElementById(`${selectedElement}`).className = ""
                }, 15 * num2)
            }
        }

        $scope.buttonClick = function (buttonNumber) {
            parsedUserResponse = parseInt(buttonNumber)
            if ((loopCounter + 1) === numbersArray.length && parsedUserResponse === numbersArray[loopCounter]) {
                console.log("success!")
                loopCounter = 0
                startRound()
            }
            else if (parsedUserResponse === numbersArray[loopCounter]) {
                console.log("success!!!")
                loopCounter += 1
                console.log(numbersArray[loopCounter])
            }
            else {
                // Compare current $scope.roundCounter
                UserFactory.changeHighScore($scope.userObj, $scope.roundCounter, $scope.userKey)

                console.log("failed!!")
                alert("YOU'RE FIRED, GO FIND ANOTHER JOB!")
                loopCounter = 0
                numbersArray = []
            }

        // // Responsible for looping through the numbersArray and processing whether the user responds with the same array or not.
        // let gameLoop = function () {
        //     // numbersArray.forEach(function(number) {
        //         // Counting number of times the the for loop to be used in the first if statement
        //         loopCounter += 1
        //         // Show current round in console
        //         console.log("ROUND: " + $scope.roundCounter)
        //         // Show current number in numberArray to respond to
        //         console.log("Remember this number: " + number)
        //         // Get users response from prompt - This will be replaced by ng-click handlers soon ****
        //         parsedUserResponse = ""
        //         $scope.buttonClick = function (buttonNumber) {
        //             parsedUserResponse = parseInt(buttonNumber)
        //             // **(This will happen at the end of the forEach loop)
        //             // - If the number of times through the loop = the length of the array, and the users response is the same as the number in the number array, call startRound() function to move to the user to the next round and increment round counter up 1.
        //             if (loopCounter === numbersArray.length && parsedUserResponse === number) {
        //                 console.log("success!")
        //                 loopCounter = 0
        //                 startRound()
        //             } // **(This will happen when the user is in the middle of the loop)
        //             // - If the users response is the same as the number in the numberArray, they will continue through the foreach loop.
        //             else if (parsedUserResponse === number) {
        //                 console.log("success!!!")
        //             }// **(This will happen when the user messes up)
        //             // - If the users response is anything else besides the correct answers, reset the round counter and numbersArray.
        //             else {
        //                 console.log("failed!!")
        //                 $scope.roundCounter = 0
        //                 numbersArray = []
        //                 // startRound()
        //             }
        //         }
        //     })
        }
        startRound()
    }
})