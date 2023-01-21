// function buttonclick () {

//     var itemName = document.getElementById('inputfield').value;
//     // var h1tag = document.createElement('h1');
//     // h1tag.innerHTML = itemName;

//     var listtag = document.createElement('li');
//     var item = document.createTextNode(itemName);
//     listtag.appendChild(item);

//     var division = document.getElementById('listDiv');
//     division.appendChild(listtag);
//     //document.body.append("test body");
// }

// function onOpenImageClick () {
//     console.log("OPEN IMAGE has been clicked");
//     //var openImg = document.getElementById('open');
//     if(openImg.classList.contains('openImageClass')) {
//         console.log("open image class is applied on this div");
//         openImg.classList.remove('active');
//         closedImg.classList.add('active');
//     }
// }

// function onClosedImageClick () {
//     console.log("Closed IMAGE has been clicked");

//     //var openImg = document.getElementById('open');
//     if(closedImg.classList.contains('closedImageClass')) {
//         console.log("open image class is applied on this div");
//         closedImg.classList.remove('active');
//         openImg.classList.add('active');
//     }
// }

// function onClosedImageHover () {
//     closedImg.classList.toggle('hover');
// }

// var openImg = document.getElementById('open');
// var closedImg = document.getElementById('closed');

// closedImg.addEventListener('click', onClosedImageClick);
// closedImg.addEventListener('mouseenter', onClosedImageHover);
// closedImg.addEventListener('mouseleave', onClosedImageHover);
// openImg.addEventListener('click', onOpenImageClick)

//========================



//openImg.addEventListener('click', onOpenImageClick);




function onDIChange () {
    console.log("Dollar input changed");
    var dollar = di.value;
    let inr = 80*dollar;

    //console.log(inr);
    inrTag.value = inr;

}
var inrTag = document.getElementById('inrInput'); 
var di = document.getElementById('dollarInput');
di.addEventListener('input', onDIChange);

function displayMyName () {
    console.log("Mayur");
}

function displayDate () {
    var date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

// For 12 hour clock
    if (hh > 12) {
        hh = hh -12;
    } 

    let hour = document.getElementById('hours');
    hour.innerText = hh;

    let minutes = document.getElementById('min');
    minutes.innerText = mm;
    let seconds = document.getElementById('sec');
    seconds.innerText = ss;
}
//displayDate();
// setTimeout(displayMyName, 8000);

setInterval(displayDate, 1000);

var headig = (<h1>This is heading</h1>);
var headtag = document.getElementById('heading');
headtag.innerHTML(headig);

