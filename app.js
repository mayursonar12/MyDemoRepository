function buttonclick () {

    var itemName = document.getElementById('inputfield').value;
    // var h1tag = document.createElement('h1');
    // h1tag.innerHTML = itemName;

    var listtag = document.createElement('li');
    var item = document.createTextNode(itemName);
    listtag.appendChild(item);

    var division = document.getElementById('listDiv');
    division.appendChild(listtag);
    //document.body.append("test body");
}

function onOpenImageClick () {
    console.log("OPEN IMAGE has been clicked");
    //var openImg = document.getElementById('open');
    if(openImg.classList.contains('openImageClass')) {
        console.log("open image class is applied on this div");
        openImg.classList.remove('active');
        closedImg.classList.add('active');
    }
}

function onClosedImageClick () {
    console.log("Closed IMAGE has been clicked");

    //var openImg = document.getElementById('open');
    if(closedImg.classList.contains('closedImageClass')) {
        console.log("open image class is applied on this div");
        closedImg.classList.remove('active');
        openImg.classList.add('active');
    }
}

function onClosedImageHover () {
    closedImg.classList.toggle('hover');
}

var openImg = document.getElementById('open');
var closedImg = document.getElementById('closed');

closedImg.addEventListener('click', onClosedImageClick);
closedImg.addEventListener('mouseenter', onClosedImageHover);
closedImg.addEventListener('mouseleave', onClosedImageHover);
openImg.addEventListener('click', onOpenImageClick)



//openImg.addEventListener('click', onOpenImageClick);





