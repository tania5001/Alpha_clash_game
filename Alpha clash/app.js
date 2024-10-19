function play(){
    // step 1:hide the home screen to hide the screen add the class hidden to the home section
   // console.log('play game ');
    // const homeSection=document.getElementById('home_screen');
    // homeSection.classList.add('hidden') //tailwind er cls add
    addElemntById('home_screen');
    addElemntById("final_Score");

    //playground section
    // const playGroundSection=document.getElementById('play_ground');
    // playGroundSection.classList.remove('hidden');

    removeElemntById("play_ground");
    setTextElementValueById("Current_life",5);
    setTextElementValueById("Current_Score",0);

  
    //create alphabets string
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetString.split(''); //array er moto
    // console.log(alphabet)



    //get a random number:

    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    //console.log(index);

    const randomIndex=alphabet[index];
    //console.log(randomIndex);

    const currentAlphabet=document.getElementById('current_alphabet');
    currentAlphabet.innerText=randomIndex;
    //console.log(currentAlphabet);

    const addBackgroundColor=document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');
}

//key step

function handleKeyboardButtonPress(event){
    //console.log("Button Press");
    const playerPressed=event.key;
    console.log('Player Pressed' ,playerPressed);

    const currentAlphabetsElement=document.getElementById('current_alphabet')
    const current_alphabets=currentAlphabetsElement.innerText;
    const expectedAlphabet=current_alphabets.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    if(playerPressed===expectedAlphabet){
       console.log('You are win the Game');

    //    //Update Score:

    //    //1: Get The Current Score:
    //    const currentScoreElement=document.getElementById("Current_Score");
    //    const currentScoreText=currentScoreElement.innerText;
    //    const currentScore=parseInt(currentScoreText)
    //    console.log("My Game Score:",typeof( currentScore));

    //    //2:increse the score by 1
    //    const updateScore=currentScore+1;

    //    //3:Show the update score
    //    currentScoreElement.innerText=updateScore;

    //   //final score
    //    const finalScorecountNumber=document.getElementById("Final_Count");
    //    finalScorecountNumber.innerText=updateScore;
       
      const currentScore=getTextElementValueById("Current_Score");
      const updateScore=currentScore+1;
      setTextElementValueById("Current_Score",updateScore);


    //create alphabets string
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetString.split(''); //array er moto
    // console.log(alphabet);

    //get a random number:
    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
    // console.log(index);

    const randomIndex=alphabet[index];
    // console.log(randomIndex);

    const currentAlphabet=document.getElementById('current_alphabet');
    currentAlphabet.innerText=randomIndex;


    const addBackgroundColor=document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');
    
      // removed background Color

    const removeBackgroundColor=document.getElementById(expectedAlphabet);
    removeBackgroundColor.classList.remove('bg-orange-400');
}
    else{
        console.log('You can not win the Game');

    //     //step 1:get the current life

    //     const currentLifeElement=document.getElementById("Current_life");

        
    //    const currentLifeText=currentLifeElement.innerText;
    //    const currentLife=parseInt(currentLifeText)
    //    console.log("My Life Score:",typeof( currentLife));
    //     console.log(currentLife)

    const currentLife=getTextElementValueById("Current_life");
    const updateLife=currentLife-1;
    setTextElementValueById("Current_life", updateLife);
        //step 2:Reduce the life count

       // const updateLife=currentLife-1;
        //step 3:display the update life
        //currentLifeElement.innerText=updateLife;
        if(updateLife===0){
            console.log("Game over");
            // const playGroundSection=document.getElementById('play_ground');
            // playGroundSection.classList.add('hidden');
            addElemntById("play_ground");
          
        //    const finalSection=document.getElementById("final_Score");
        //    finalSection.classList.remove('hidden')
        removeElemntById("final_Score");


       const finalCount=getTextElementValueById("Current_Score");
       console.log(finalCount);
       setTextElementValueById("Final_Count",finalCount);

       //clear the last selected alphabet highlight

       //const currentAlphabet=getElementTextById("current_alphabet");
       const removeBackgroundColor=document.getElementById(expectedAlphabet);
        removeBackgroundColor.classList.remove('bg-orange-400');

        }
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress);


// // Function to generate random alphabet
// function getRandomAlphabet() {
//     const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
//     const alphabet = alphabetString.split(''); // Create an array of alphabets
//     const randomNumber = Math.random() * 25;
//     const index = Math.round(randomNumber);
//     return alphabet[index]; // Return a random alphabet
// }

// // Function to set the current random alphabet on the screen
// function updateCurrentAlphabet() {
//     const randomIndex = getRandomAlphabet(); // Get random alphabet
//     const currentAlphabet = document.getElementById('current_alphabet');
//     currentAlphabet.innerText = randomIndex; // Update the displayed alphabet

//     const addBackgroundColor = document.getElementById(randomIndex);
//     addBackgroundColor.classList.add('bg-orange-400');
// }

// // Function to remove background color of previous alphabet
// function removePreviousAlphabetColor(expectedAlphabet) {
//     const removeBackgroundColor = document.getElementById(expectedAlphabet);
//     removeBackgroundColor.classList.remove('bg-orange-400');
// }

// // Function to start the game
// function play() {
//     // Home screen section
//     console.log('play game ');
//     const homeSection = document.getElementById('home_screen');
//     homeSection.classList.add('hidden'); // Tailwind class to hide home screen

//     // Playground section
//     const playGroundSection = document.getElementById('play_ground');
//     playGroundSection.classList.remove('hidden'); // Show the playground

//     updateCurrentAlphabet(); // Display the first random alphabet
// }

// // Key event handler function
// function handleKeyboardButtonPress(event) {
//     const playerPressed = event.key.toLowerCase(); // Capture key press and convert to lowercase
//     console.log('Player Pressed', playerPressed);

//     const currentAlphabetElement = document.getElementById('current_alphabet');
//     const expectedAlphabet = currentAlphabetElement.innerText.toLowerCase(); // Get the expected alphabet
//     console.log(playerPressed, expectedAlphabet);

//     if (playerPressed === expectedAlphabet) {
//         console.log('You win the Game');
//         removePreviousAlphabetColor(expectedAlphabet); // Remove background color of the previous alphabet
//         updateCurrentAlphabet(); // Display a new random alphabet
//     } else {
//         console.log('You did not win the Game');
//     }
// }

// // Event listener for key press
// document.addEventListener('keyup', handleKeyboardButtonPress);
