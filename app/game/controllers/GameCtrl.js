angular.module("RyanSays")
.controller("GameCtrl", function($scope, UserFactory, AuthFactory) {

    // Get the current user object from Firebase - Need this for the FB UID
    $scope.user = AuthFactory.getUser()

    // Get the single current user that has the same uid and userID and get that user FB KEY
    UserFactory.single($scope.user.uid).then((user)=>{
        console.log(user)
        for (var key in user) {
            console.log(user[key])
            $scope.userKey = key
            $scope.userObj = user[key]
            // Using this to pupulate the highscore in the DOM
            $scope.highScore = $scope.userObj.highScore
        }
    })
    // Starting roundcounter at 0, but will start at 1 once it increments in startRound()
    $scope.roundCounter = 0

    $scope.startGame = function () {

        // Hide start button on game.html
        $scope.gameStarted = function () {
            return true
        }
        $scope.gameStarted()

        // Starting with empty numbersArray, but will push random number in startRound()
        let numbersArray = []
        // Counts number of times through each gameLoop() loop
        loopCounter = 0
        // For lighting up buttons - Multiply timeout delays by 10
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

        // Checking user button click against current array numbers
        $scope.buttonClick = function (buttonNumber) {
            parsedUserResponse = parseInt(buttonNumber)
                // Once you have hit the end of the array & you have gotten the last response correct, start a new round.
            if ((loopCounter + 1) === numbersArray.length && parsedUserResponse === numbersArray[loopCounter]) {
                console.log("success!")
                loopCounter = 0
                //
                if ($scope.highScore < $scope.roundCounter) {
                    $scope.highScore = $scope.roundCounter
                }
                startRound()
            }
                // Continue looping through the numbersArray
            else if (parsedUserResponse === numbersArray[loopCounter]) {
                console.log("success!!!")
                loopCounter += 1
                console.log(numbersArray[loopCounter])
            }
            else {
                // Upon failing, compare current round against users highScore and put the current score in if it is larger than highScore.
                UserFactory.changeHighScore($scope.userObj, $scope.roundCounter, $scope.userKey)
                console.log("failed!!")
                alert("YOU'RE FIRED, GO FIND ANOTHER JOB!")

                // Show start button now
                $scope.gameStarted = function () {
                    return false
                }
                $scope.gameStarted()

                // Reset counters
                loopCounter = 0
                numbersArray = []
            }
        }
        startRound()
    }
})