

let startGame = function () {
    // Starting round at 1
    let roundCounter = 1
    // Starting with empty numbersArray
    let numbersArray = []
    // Get new random number
    let randomNumber = (Math.floor(Math.random() * 6) + 1)
    // Add it to the end of the numbersArray
    numbersArray.push(randomNumber)

    // Get response from user for each number in the array
    numbersArray.forEach(function(number) {
        // // Show it on the screen for the user to remember - THIS IS DELAYED
        // document.write("Remember this number: " + number)
        console.log("ROUND: " + roundCounter)
        // Show current number to remember and respond to
        console.log("Remember this number: " + number)
        // Get users response from prompt
        let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))
        // Compare response and either add new random number to array or clear it
        if (parsedUserResponse === number) {
            alert("success!!!")
            roundCounter += 1
            console.log("ROUND: " + roundCounter)

            let randomNumber = (Math.floor(Math.random() * 6) + 1)
            //Add a new random number into the numbersArray
            numbersArray.push(randomNumber)
            console.log(numbersArray)

            // Start the forEach over on the numbersArray
            numbersArray.forEach(function(number) {
                console.log("Remember this number: " + number)
                // Get users response from prompt
                let parsedUserResponse = parseInt(prompt("Please enter in number on screen."))


                // Compare response and either add new random number to array or clear it
                if (parsedUserResponse === number) {
                    alert("success!!!")

                } else {
                    alert("failed!!!")
                    roundCounter = 1
                    numbersArray = []
                    startGame()
                }
            })

        } else {
            alert("failed!!!")
            roundCounter = 1
        }
    })
}
startGame()


// roundCounter += 1
// console.log("ROUND" + roundCounter)

// let randomNumber = (Math.floor(Math.random() * 6) + 1)
// //Add a new random number into the numbersArray
// numbersArray.push(randomNumber)
// console.log(numbersArray)