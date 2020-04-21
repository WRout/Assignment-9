
let desc1;
let desc2;
let desc3;
let desc4;
setDesc();

let num = 0;
let descNum;

let img = document.getElementById("img");
let desc = document.getElementById("desc");
let descriptions = [desc1, desc2, desc3, desc4];


function callDesc(){
    console.log("Desc Num: " + descNum);
    desc.innerHTML = descriptions[descNum];
}


function stopDesc(){
    desc.innerHTML = "";
}


function cycleImages(){
    
    descNum = num;
    let imgCount = 4; // change for the amount of images in content folder
    let images = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
    
    if((num >= imgCount) || (descNum >= imgCount)){
        num = descNum = 0;
    }
    
    console.log("./content/" + images[num]);
    console.log(descriptions[num]);
    console.log("Num: " + num);
    
    img.src = "./content/" + images[num];
    img.onmouseover = callDesc;
    img.onmouseout = stopDesc;
    
}


window.onload = function() {
    let changesPerThirtySeconds = 2; // Each number corresponds to the number of changes in thirty seconds. Change this value to make the slideshow go faster or slower.
    
    setInterval(function(){
        cycleImages();
        num++;
        document.getElementById("desc").innerHTML = "";
        console.log("Program finished running!");
        console.log("--------------------------------------------"); // Line dividing debug messages
    }, 30000 / changesPerThirtySeconds)
}