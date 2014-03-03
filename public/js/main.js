
var images = new Array();
images[0] = "img/01.png";
images[1] = "img/02.png";
images[2] = "img/03.png";
images[3] = "img/04.png";
images[4] = "img/05.png";
images[5] = "img/06.png";
images[6] = "img/07.png";
images[7] = "img/08.png";

var current = 0;
var duration = 4;

$(document).ready(function(){
    changeImage();
});


function changeImage()
{
    current++;
    if (current > images.length - 1)
        current = 0;

    console.log(current);

    var img = $('<img style="position: absolute; top:0; left:0" />');
    img.attr("src", images[current]);

    $('#screenshot-box').append(img);

    img.fadeIn(1000, function(){
        $("#screenshot-box").html("");
        $("#screenshot-box").append(img);

    });

    setTimeout(changeImage, 1000 * duration);
}