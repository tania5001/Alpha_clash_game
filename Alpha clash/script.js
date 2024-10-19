function play(){
    //console.log('hello')

    const homeScren=document.getElementById('home_screen');
    homeScren.classList.add('hidden');

    const playGround=document.getElementById("play_ground");
    playGround.classList.remove('hidden');

    const alphabets='abcdefghijklmnopqrstuvwxyz';
    const alphabet=alphabets.split('');
    console.log(alphabet);


    const randomNumber=Math.random()*25;
    const index=Math.round(randomNumber);
     console.log(index);

     const randomIndex=alphabet[index];
     console.log(randomIndex)


     const currentAlphabet=document.getElementById("current_alphabet");
     currentAlphabet.innertext=randomIndex;

     const addBackgroundColor=document.getElementById(randomIndex);
    addBackgroundColor.classList.add('bg-orange-400');
}