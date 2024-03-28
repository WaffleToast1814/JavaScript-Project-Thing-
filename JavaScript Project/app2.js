let audio = document.getElementById("Kuru-Kuru-1");
let button = document.querySelector(".Click-Button-2");

function play(){
    let audio = document.getElementById("KuruKuru-1");
    audio.play()
    
    
   }  
let button2 = document.querySelector('.Click-Button-3');
let audio2 = document.getElementById('KuruKuru-2');
function play2(){
    let audio = document.getElementById("KuruKuru-2");
    audio2.play()


}

let button3 = document.querySelector('.Click-Button-4');
let audio3 = document.getElementById('KuruKuru-3');
function play3(){
    let audio = document.getElementById("KuruKuru-3");
    audio3.play()


}


button.addEventListener("click", play)
button2.addEventListener("click",play2)
button3.addEventListener("click",play3)
