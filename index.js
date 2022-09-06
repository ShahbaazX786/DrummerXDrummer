var noofbuttons=document.querySelectorAll(".drum").length;
for (var i = 0;i < noofbuttons; i++)  {
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       
        var currentbuttonpressed = this.innerHTML;
        switch (currentbuttonpressed) {
            case "a":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play();         
                break;
        
            case "s":
                var audio = new Audio('sounds/tom-2.mp3');
                audio.play();         
                break;
        
            case "d":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play();         
                break;
        
            case "f":
                var audio = new Audio('sounds/tom-4.mp3');
                audio.play();         
                break;
        
            case "j":
                var audio = new Audio('sounds/kick-bass.mp3');
                audio.play();         
                break;
        
            case "k":
                var audio = new Audio('sounds/snare.mp3')
                audio.play();         
                break;
        
            case "l":
                var audio = new Audio('sounds/crash.mp3');
                audio.play();         
                break;
        
            default:
                alert("Really bro, can't you see the keys shown in boxes?")
                break;
        }

    });

}