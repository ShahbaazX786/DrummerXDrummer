// testing keyboard event listener
// document.addEventListener("keydown" ,function(event){
//     alert(event.key+" was pressed");
// })

var noofbuttons=document.querySelectorAll(".drum").length;
for (var i = 0;i < noofbuttons; i++)  {
    // event listener for button click/ mouse click events
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        var currentbuttonpressed = this.innerHTML;
        playsound(currentbuttonpressed); //calling custom function with button click value

    });

}

// event listener for keyboard
document.addEventListener("keydown",function(event){
    var k=event.key;
    playsound(k); //calling custom function with keyboard key value
});

// custom function
function playsound(key){
    switch (key) {
        case "a":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();         
            break;
        
        case "s":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();         
            break;
        
        case "d":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();         
            break;
        
        case "f":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        
        case "j":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();         
            break;
        
        case "k":
            var snare = new Audio('sounds/snare.mp3')
            snare.play();         
            break;
        
        case "l":
            var crashsound = new Audio('sounds/crash.mp3');
            crashsound.play();         
            break;
        
        default:
            alert("Really bro, can't you see the keys shown in boxes?")
            break;
    }
}