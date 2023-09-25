
   var randomNumber1 = Math.floor(Math.random()*6)+1 ;
   var selectimg = "dice" +randomNumber1+".png";
   var selectimg2 = "images/"+ selectimg;

document.querySelectorAll('img')[0].setAttribute("src", selectimg2);

 var randomNumber2 = Math.floor(Math.random()*6)+1;
 var slectimg3 = 'dice'+randomNumber2+'.png';
 var selectimg4 = "images/"+ slectimg3;
 document.querySelectorAll('img')[1].setAttribute("src",selectimg4 );

if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins"
}else if (randomNumber2 > randomNumber1){
    document.querySelector('h1').innerHTML =" Player 2 Wins";
}else if (randomNumber1 = randomNumber2){
    document.querySelector('h1').innerHTML="draw !!!";
}else {
    console.log ("Refersh the Page");
}
