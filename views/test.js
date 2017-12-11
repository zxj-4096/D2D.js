var img = null;
var ctx = null;
var iconList = new Array();

window.onload = function () {

    img = document.getElementById("logo");
    document.getElementById("start").onclick = function () {
        var a = new HCC();
        iconList.push(a);
        a.image = img;
        a.x = 0;
        a.y = 0;
        a.checked = false;
        a.width = img.width;
        a.height = img.height;
        a.draw();
    };

    var abc = document.getElementById("myCanvas");
    ctx = abc.getContext("2d");

    var coordinates = new HCC();
    iconList.push(coordinates);
    coordinates.text = "Coordinates";
    coordinates.x = 5;
    coordinates.y = 580;
    coordinates.draw();

    var text = new HCC();
    iconList.push(text);
    text.text = "FPS:60";
    text.x = 5;
    text.y = 595;
    text.draw();

    var a = new HCC();
    a.AddHCC("img",10,20,img.width,img.height,img);
    iconList.push(a);
    // a.image = img;
    // a.x = 10;
    // a.y = 20;
    // a.checked = false;
    // a.width = img.width;
    // a.height = img.height;
    // a.draw();

    // var b = new HCC();
    // iconList.push(b);
    // b.image = img;
    // b.x = 150;
    // b.y = 20;
    // b.checked = false;
    // b.width = img.width;
    // b.height = img.height;
    // b.draw();

    // var c = new HCC();
    // iconList.push(c);
    // c.image = img;
    // c.x = 300;
    // c.y = 20;
    // c.checked = false;
    // c.width = img.width;
    // c.height = img.height;
    // c.draw();

    var fps = 60;
    setInterval("repaint()", 1000 / 60);

}
var i, xpos = -1, ypos = -1;
function repaint() {
    document.getElementById('myCanvas').setAttribute('width', 0);
    document.getElementById('myCanvas').setAttribute('width', 800);
    ctx.clearRect(0, 0, 800, 600);
    for (i = 0; i < iconList.length; i++) {
        iconList[i].draw();
    }
}

function isClickIcon(x, y) {
    for (i = 0; i < iconList.length; i++) {
        if ((x > iconList[i].x) &&
            (x < (iconList[i].x + iconList[i].width)) &&
            (y > iconList[i].y) &&
            (y < (iconList[i].y + iconList[i].height))
        ) {
            return i;
        }
    }
    return -1;
}

function isCloseIcon(x, y) {
    for (i = 0; i < iconList.length; i++) {
        if ((x > iconList[i].x + iconList[i].width) &&
            (x < (iconList[i].x + iconList[i].width + 10)) &&
            (y > iconList[i].y - 10) &&
            (y < iconList[i].y)
        ) {
            return i;
        }
    }
    return -1;
}
var isdownno = -1;
function down(e) {
    var a = isClickIcon(e.clientX, e.clientY);
    var b = isCloseIcon(e.clientX, e.clientY);
    if (b >= 0) { iconList.splice(b, 1) }
    for (i = 0; i < iconList.length; i++) {
        iconList[i].checked = false;
    }
    if (a >= 0) {
        isdownno = a;
        iconList[isdownno].checked = true;
    } else {
        isdownno = -1;
    }
}
function move(e) {
    if (isdownno >= 0) {
        if ((xpos < 0) || (ypos < 0)) {
            xpos = e.clientX - iconList[isdownno].x;
            ypos = e.clientY - iconList[isdownno].y;

        }
        iconList[isdownno].x = e.clientX - xpos;
        iconList[isdownno].y = e.clientY - ypos;
    }
    iconList[0].text = "X:" + e.clientX + " Y:" + e.clientY;
}
function up(e) {
    if (isdownno < 0) return;
    isdownno = -1;
    xpos = -1;
    ypos = -1;
}