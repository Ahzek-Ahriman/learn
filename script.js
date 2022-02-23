let counter = 0;
function onClickButton(el){
    counter++;
    el.innerHTML = "U pressed " + counter +" times";
    el.style.background = "red";
    el.style.color = "blue";
    console.log(el.name);
    el.style.cssText = "border-radius: 5px; border: 0; font-size:20px";
}

