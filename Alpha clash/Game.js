function play(){
    
    addElemntById('home_screen');
    addElemntById("final_Score");

    //playground section
//console.log(homeSection.classlist)


    removeElemntById("play_ground");
    setTextElementValueById("Current_life",5);
    setTextElementValueById("Current_Score",0);

//console.log(PlayGroundSection.Classlist)

  
    //get or create alphabets array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetString.split(''); 
    //console.log(alphabet)....
    

    


//get a random index between 0,25 :

    const randomNumber=Math.random()*25;
    //console.log(randomNumber)
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
       
//Update Score:
       
      const currentScore=getTextElementValueById("Current_Score");
      const updateScore=currentScore+1;
      setTextElementValueById("Current_Score",updateScore);


    //get or create alphabets array
    const alphabetString='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabetString.split(''); 
    // console.log(alphabet);

    //get a random index between 0,25:
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

    
    const currentLife=getTextElementValueById("Current_life");
    const updateLife=currentLife-1;
    setTextElementValueById("Current_life", updateLife);
        
        if(updateLife===0){
            console.log("Game over");
            addElemntById("play_ground");
          
        removeElemntById("final_Score");


       const finalCount=getTextElementValueById("Current_Score");
       console.log(finalCount);
       setTextElementValueById("Final_Count",finalCount);


       const removeBackgroundColor=document.getElementById(expectedAlphabet);
        removeBackgroundColor.classList.remove('bg-orange-400');

        }
    }
}

document.addEventListener('keyup',handleKeyboardButtonPress);




