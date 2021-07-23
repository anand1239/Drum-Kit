//As per Button in Screen

var arr=document.querySelectorAll("button.drum");
for(var i=0;i<arr.length;i++)arr[i].addEventListener("click",function(){
    handleClick(this.innerHTML);
    addAnimation(this.innerHTML);
});

//As per Keyboard Press

document.addEventListener("keypress",function(event){
    handleClick(event.key);
    addAnimation(event.key);
});

//Function that handle both request

function handleClick(index){
    var soundURL="";
    var check=false;
    switch (index) {
        case "w":
            soundURL="tom-1";
            break;
        case "a":
            soundURL="tom-2";
            break;
        case "s":
            soundURL="tom-3";
            break;
        case "d":
            soundURL="tom-4";
            break;
        case "j":
            soundURL="snare";
            break;
        case "k":
            soundURL="crash";
            break;  
        case "l":
            soundURL="kick-bass";
            break;
        default:
            check=true;
            alert("Something Going Wrong with letter of the Drum's");
            break;
    }
    if(check===false){
        var audio=new Audio("sounds/"+soundURL+".mp3");
        audio.play();
    }
}

//Giving Animation
function addAnimation(buttonKey){
    var curr=document.querySelector("."+buttonKey);
    curr.classList.add("pressed");
    setTimeout(function (){
        curr.classList.remove("pressed");
    },200);
}
