var crash = new Audio("sounds/crash.mp3");
var kick = new Audio("sounds/kick-bass.mp3");
var snare = new Audio("sounds/snare.mp3");
var tom1 = new Audio("sounds/tom-1.mp3");
var tom2 = new Audio("sounds/tom-2.mp3");
var tom3 = new Audio("sounds/tom-3.mp3");
var tom4 = new Audio("sounds/tom-4.mp3");

for (var i = 0; i < document.querySelectorAll("button.drum").length; i++){

    document.querySelectorAll("button.drum")[i].addEventListener("click", function(){

        var buttoninnerHTML = this.innerHTML;
        playsound(buttoninnerHTML);
        buttonanimation(buttoninnerHTML);
    
    })
};


document.addEventListener("keydown" , function(event){
    
    playsound(event.key);
    buttonanimation(event.key);
})

function buttonanimation(currentkey) {
    var activebutton = document.querySelector("." + currentkey);

    activebutton.classList.add("pressed");
    setTimeout (function(){
        activebutton.classList.remove("pressed");
    }
    , 100
    );
}

function playsound(keys){

    switch (keys) {
    case "w":
        kick.play();
        break;

    case "a":
        crash.play();
        break;
    
    case "s":
        snare.play();
        break;
    
    case "d" :
        tom1.play();
        break;
    
    case "j" :
        tom2.play();
        break;
    
    case "k":
        tom3.play();
        break;
    
    case "l":
        tom4.play();
        break;
    
    default: console.log(keys);


}
};










// document.querySelector("button.w").addEventListener("click", function () {
//     kick.play();
// });
// document.querySelector("button.a").addEventListener("click", function () {
//     crash.play();
// });
// document.querySelector("button.s").addEventListener("click", function () {
//     snare.play();
// });
// document.querySelector("button.d").addEventListener("click", function () {
//     tom1.play();
// });
// document.querySelector("button.j").addEventListener("click", function () {
//     tom2.play();
// });
// document.querySelector("button.k").addEventListener("click", function () {
//     tom3.play();
// });
// document.querySelector("button.l").addEventListener("click", function () {
//     tom4.play();
// });
