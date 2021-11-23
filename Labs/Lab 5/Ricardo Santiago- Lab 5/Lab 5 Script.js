$(document).ready(function(){
    var counter = 1;

    $("#Image2").hide();
    $("#Image3").hide();

    $("#Thumb1").click(function(){
        counter = 1;
        $("#Image1").fadeIn(1000);
        $("#Image2").hide();
        $("#Image3").hide();
    });

    $("#Thumb2").click(function(){
        counter = 2;
        $("#Image1").hide();
        $("#Image2").slideDown();
        $("#Image3").hide();
    });

    $("#Thumb3").click(function(){
        counter = 3;
        $("#Image1").hide();
        $("#Image2").hide();
        $("#Image3").animate({left:100, width:600});
        $("#Image3").animate({left:0, width:400})
    });

    $("#left").click(function(){
        if(counter > 1)
        {
        currentimage = "#Image" + counter;
        $(currentimage).hide();
        counter--;
        lastimage = "#Image" + counter;
        $(lastimage).show()
        }
    });

    $("#right").click(function(){
        if(counter < 3)
        {
        currentimage = "#Image" + counter;
        $(currentimage).hide()
        counter++;
        nextimage = "#Image" + counter;
        $(nextimage).show()
        }
    });

});