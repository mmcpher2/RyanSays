
let startGame = function () {
    // Starting roundcounter at 0, but will start at 1 once it increments in startRound()
    let roundCounter = 0
    // Starting with empty numbersArray, but will push random number in startRound()
    let numbersArray = []
    // Counts number of times through each gameLoop() loop
    loopCounter = 0

    // Responsible for handing each new round, and starting gameLoop()
    let startRound = function () {
        // Adding 1 to show with round you are on
        roundCounter += 1
        console.log(roundCounter)
        // Pushing new random number into (end of) numbersArray
        numbersArray.push((Math.floor(Math.random() * 6) + 1))
        console.log(numbersArray)
        // Calling new game loop to begin looping through the numbersArray
        gameLoop()
    }

    // Responsible for looping through the numbersArray and processing whether the user responds with the same array or not.
    let gameLoop = function () {
        numbersArray.forEach(function(number) {
            // Counting number of times the the for loop to be used in the first if statement
            loopCounter += 1
            // Show current round in console
            console.log("ROUND: " + roundCounter)
            // Show current number in numberArray to respond to
            console.log("Remember this number: " + number)
            // Get users response from prompt - This will be replaced by ng-click handlers soon ****
            let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))

            // **(This will happen at the end of the forEach loop)
            // - If the number of times through the loop = the length of the array, and the users response is the same as the number in the number array, call startRound() function to move to the user to the next round and increment round counter up 1.
            if (loopCounter === numbersArray.length && parsedUserResponse === number) {
                alert("success!")
                loopCounter = 0
                startRound()
            } // **(This will happen when the user is in the middle of the loop)
            // - If the users response is the same as the number in the numberArray, they will continue through the foreach loop.
            else if (parsedUserResponse === number) {
                alert("success!!!")
            }// **(This will happen when the user messes up)
            // - If the users response is anything else besides the correct answers, reset the round counter and numbersArray.
            else {
                alert("failed!!!")
                roundCounter = 0
                numbersArray = []
                startRound()
            }
        })
    }
    startRound()
}
startGame()

//     // Get response from user for each number in the array
//     numbersArray.forEach(function(number) {
//         loopCounter += 1

//         console.log("ROUND: " + roundCounter)
//         // Show current number to remember and respond to
//         console.log("Remember this number: " + number)
//         // Get users response from prompt
//         let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))
//         // Compare response and either add new random number to array or clear it
//         if (parsedUserResponse === number) {
//             alert("success!!!")
//             roundCounter += 1
//             console.log("ROUND: " + roundCounter)

//             let randomNumber = (Math.floor(Math.random() * 6) + 1)
//             //Add a new random number into the numbersArray
//             numbersArray.push(randomNumber)
//             console.log(numbersArray)

//             // Start the forEach over on the numbersArray

//             })
//         } else {
//             alert("failed!!!")
//             roundCounter = 1
//             numbersArray = []
//         }
//     })

// }
// startGame()


// // roundCounter += 1
// // console.log("ROUND" + roundCounter)

// // let randomNumber = (Math.floor(Math.random() * 6) + 1)
// // //Add a new random number into the numbersArray
// // numbersArray.push(randomNumber)
// // console.log(numbersArray)


// numbersArray.forEach(function(number) {
//     console.log("Remember this number: " + number)
//     // Get users response from prompt
//     let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))

//     // Compare response and either add new random number to array or clear it
//     if (parsedUserResponse === number) {
//         alert("success!!!")
//     }
//     else {
//         alert("failed!!!")
//         roundCounter = 1
//         numbersArray = []
//     }