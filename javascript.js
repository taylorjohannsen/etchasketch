
$(function() {
    for (var x = 0; x < 16; x++) {
        for (var y = 0; y < 16; y++) {
            $("<div>").addClass("unit").appendTo('#container');
        }
    }
});

$(document).ready(function(){
    $("div").hover(function(){
        $(this).css("background-color", "black");
        }, function(){
        $(this).css("background-color", "black");
    });
});

function reset() {
    $("button").click(function(){
        $("div").css("background-color", "white");
    });
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function coolcolors() {
    $(document).ready(function(){
        $("div").hover(function(){
            $(this).css("background-color", getRandomColor());
            }, function(){
            $(this).css("background-color", getRandomColor());
        });
    });
    
}

function black() {
    $(document).ready(function(){
        $("div").hover(function(){
            $(this).css("background-color", "black");
            }, function(){
            $(this).css("background-color", "black");
        });
    });
}
