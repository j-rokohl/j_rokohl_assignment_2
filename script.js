      // GLOBAL VARIABLES -------------------------------------------------------
      // Get the main output area by ID
      let mainOutput = document.getElementById("output");

      // Get game button elements by ID
      const guessObject = document.getElementById("guess"); // Guessing Game
      const passObject = document.getElementById("pass"); // Password Validator
      const timesObject = document.getElementById("times"); // Mult Table Generator


      // I defined a function to change button color to white (1st) or orange (2nd & 3rd)
      function changeButton(objectClicked, ObjectNot1, ObjectNot2){
        // Aurgument 1 - objectClicked / white
        objectClicked.classList.remove("orangeButton");
        objectClicked.classList.add("whiteSelected");
        // Aurgument 2 - ObjectNot1 / orange
        ObjectNot1.classList.remove("whiteSelected");
        ObjectNot1.classList.add("orangeButton");
        // Aurgument 3 - ObjectNot2 / orange
        ObjectNot2.classList.remove("whiteSelected");
        ObjectNot2.classList.add("orangeButton");
      }


      // GAME 1: If "Guessing Game" is chosen ------------------------------------

      function clickGuess() {
        // Button colors function with aruguments:
        changeButton(guessObject, passObject, timesObject);

        mainOutput.innerHTML = 
        `
        <div class="white">
          <h3>How it works:</h3>
          <p>Try to guess the correct number between 1 and 10. Don't give up! Keep guessing until you get it right.</p>
          <button id="playGuess">Play Now</button>
        </div>
        `;

        const playGuess = document.getElementById('playGuess'); // Play Now: Guessing Game

        function nowGuess(){
          let guessThis = Math.floor(Math.random() * 10) + 1;
          let myGuess;
          while (myGuess != guessThis){
            myGuess = prompt("Guess the number:");
          }
          alert(`Wow, you guessed the number ${guessThis} right! You win!`);
        }

        playGuess.addEventListener("click", nowGuess);
      }


      // GAME 2: If "Password Validator" is chosen -------------------------------

      function clickPass() {
        // Button colors function with aruguments:
        changeButton(passObject, timesObject, guessObject);

        mainOutput.innerHTML = 
        `
        <div class="white">
          <h3>How it works:</h3>
          <p>Set a password and then confirm your password. You get three tries to type accurately. Then you lose! :-(</p>
          <button id="playPass">Play Now</button>
        </div>
        `;

        const playPass = document.getElementById('playPass'); // Play Now: Password Validator

        function nowPass(){

            let countPass = 0;
            let setPass;
            let validatePass;
            do {
                let threeTries = 3 - countPass;
                setPass = prompt("Please set your password:");
                validatePass = prompt(`Now, confirm your password: (${threeTries} Tries Remaining)`);
                ++countPass;
            } while (countPass < 3 && setPass !== validatePass);

            if (setPass == validatePass) {
                alert("Success! Your password is confirmed.");
            }
            else if (setPass !== validatePass) {
                alert("You have used all three tries to validate your password. You lose.");
            }
        }

        playPass.addEventListener("click", nowPass);
      }


      // GAME 3: If "Multiplication Table Generator" is chosen --------------------

      function clickTimes() {
        // Button colors function with aruguments:
        changeButton(timesObject, guessObject, passObject);

        mainOutput.innerHTML = 
        `
        <div class="white">
          <h3>How it works:</h3>
          <p>Give this supercomputer a number. The computer will generate a multiplication table in seconds!</p>
          <button id="playTimes">Play Now</button>
        </div>
        `;

        const playTimes = document.getElementById('playTimes'); // Play Now: Multiplication Table Generator

        function nowTimes(){
          let myEntry = prompt("Enter a number to generate a multiplication table:");
          let tableTitle = `Multiplication Table Result:\n`;
          let multiTable = "";
          let tableEntry;
          for (let loopCounter = 1; loopCounter <= 10; loopCounter = loopCounter + 1) { 
            let tableIterate = myEntry * loopCounter;
            tableEntry = myEntry + " x " + loopCounter + " = " + tableIterate + `\n`;
            multiTable = multiTable + tableEntry;
            if (loopCounter == 10) {
              alert(tableTitle + multiTable);
            }
          }
        }

        playTimes.addEventListener("click", nowTimes);
      }

      // Add an event listener to each game button ---------------------------------
      guessObject.addEventListener("click", clickGuess);
      passObject.addEventListener("click", clickPass);
      timesObject.addEventListener("click", clickTimes);