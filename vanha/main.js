

let slider = document.getElementById("slider");
let objects = document.getElementById("objects");
let start = document.getElementById("start");
start.addEventListener("click", begin);

let disclaimer = document.getElementById("disclaimer");
let main = document.getElementById("main");
let cooldown = true;

document.addEventListener("wheel", scroll);
document.addEventListener("keydown", key);
//slider.addEventListener("change", sliderE);
document.addEventListener("DOMContentLoaded", setup);

function setup() {
    let amount = 0;
    for(let child of objects.children) {
        amount++;
    };
    slider.max = amount;
};

function begin() {
    cooldown = false;
    main.className = "";
    disclaimer.className = "hidden";
    document.getElementById("music").play();
};

//arrow keys

function forward() {

    slider.value++;
    let current = document.getElementById("current");
    if (current.nextElementSibling != null) {
        cooldown = true;
    let before = document.getElementById("before");
    if (before != null) {
    before.className = "beforeToHidden";
    before.id = "";
    }
    current.className = "currentToBefore";
    current.id = "before";
    current.addEventListener("animationend", end);
    function end() {
        cooldown = false;
    };
    let after = document.getElementById("after");
    if (after != null) {
        after.className = "afterToCurrent";
        after.id = "current";
    if (after.nextElementSibling != null) {
        let next = after.nextElementSibling;
        next.className = "hiddenToAfter";
        next.id = "after";
    }
};
};
}

function backward() {
    slider.value--;
    let current = document.getElementById("current");
    if (current.previousElementSibling != null) {
        cooldown = true;
    let after = document.getElementById("after");
    if (after != null) {
        after.className = "afterToHidden";
        after.id = "";
    }
    current.id = "after";
    current.className = "currentToAfter";
    current.addEventListener("animationend", end);
    function end() {
        cooldown = false;
    };
    let before = document.getElementById("before");
    if (before != null) {
        before.className = "beforeToCurrent";
        before.id = "current";
    if (before.previousElementSibling != null) {
        let next = before.previousElementSibling;
        next.className = "hiddenToBefore";
        next.id = "before";

    }
};
};

};

function scroll(event) {
    if (cooldown == false) {
    if (event.wheelDelta > 0){
        forward();
    } else {
      backward();
}  
    };
};

function key(event) {
    if (cooldown == false) {
    if (event.keyCode == 39){
        forward();
    } 
    else if(event.keyCode == 37){
        backward();
    }
};
};