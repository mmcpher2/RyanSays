
let startGame = function () {
    // Starting round at 1
    let roundCounter = 0
    // Starting with empty numbersArray
    let numbersArray = []
    // Get new random number
    // let randomNumber = function () {
    //     return (Math.floor(Math.random() * 6) + 1)}
    // Add it to the end of the numbersArray
    // numbersArray.push(randomNumber)
    // Counts number of times through each gameLoop loop
    loopCounter = 0

    let startRound = function () {
        roundCounter += 1
        console.log(roundCounter)
        // Pushing new number into array
        numbersArray.push((Math.floor(Math.random() * 6) + 1))
        console.log(numbersArray)
        // calling new game loop
        gameLoop()
    }

    let gameLoop = function () {
        numbersArray.forEach(function(number) {
            loopCounter += 1
            console.log("ROUND: " + roundCounter)
            // Show current number to remember and respond to
            console.log("Remember this number: " + number)
            // Get users response from prompt
            let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))

            console.log(loopCounter, numbersArray.length)
            if (loopCounter === numbersArray.length && parsedUserResponse === number) {
                alert("success!")
                loopCounter = 0
                startRound()
            }
            else if (parsedUserResponse === number) {
                alert("success!!!")
            }
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