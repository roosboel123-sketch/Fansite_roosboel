let myBox1 = document.querySelector("#myBox1");
let myBox2 = document.querySelector("#myBox2");

let myInput = document.querySelector("#myInput");
let myButton = document.querySelector("#myButton");

let myFace = document.querySelector("#myFace");
let emotion = 'Sad';




myButton.addEventListener('click', myFunc);



function myFunc(){
    console.log(myInput.value);

    if (myInput.value == 'Sad'){
    myFace.style.backgroundImage = " URL('sadharry.jpg')";
}else if(myInput.value == 'Happy'){
myFace.style.backgroundImage = " URL('happyharry.jpg')";
}else{
    myFace.style.backgroundImage = " URL('seriousharry.jpg')";
}


}

myFace.style.backgroundImage = "URL('sadharry.jpg')";




function Hallo() {
    blokje.innerHTML = "Hallo!";
    blokje.style.backgroundColor = "blue";
}
zegHallo();
// zegHallo();
// I can put any text here and JS will NOT execute it

let knop = document.querySelector("#knop");
knop.addEventListener("click", zegHallo );

let mijndivss1 = document.querySelector("#mijndivss1");

mijndivss1.addEventListener("click", function(){
    mijndivss1.style.backgroundColor = "purple";
});

document.getElementById("myButton").addEventListener("click",function(){
    this.classList.toggle("active");
});

