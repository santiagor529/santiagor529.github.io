$(document).ready(function()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var myImg = new Image();
    var enemy = new Image();
    var x = 0, y = 0;
    var x2 = 0, y2 = 0;
    var score = 0;
    
    myImg.src = 'Images/Dot.png';
    myImg.onload = function(){
        ctx.drawImage(myImg, 100, 50, 50, 50);
    }

    enemy.src = 'Images/Enemy.png';
    enemy.onload = function(){
        ctx.drawImage(enemy, 20, 50, 50, 50);
    }
    
    setInterval(drawFunction, 1100);

    function drawFunction()
    {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        x = Math.random() * canvas.width;
        y = Math.random() * canvas.height;
        ctx.drawImage(myImg, x, y, 50, 50)
        x2 = Math.random() * canvas.width;
        y2 = Math.random() * canvas.height;
        ctx.drawImage(enemy, x2, y2, 50, 50)
        ctx.font = "30px Comic Sans MS";
        ctx.fillStyle = "red";
        ctx.textAlign = "center";
        ctx.fillText("Score: " + score, 70,25, canvas.width/2, canvas.height/2);
    }

    canvas.onmousedown = function(e)
    {
        if(e.clientX > x && e.clientX < x + 50 && e.clientY > y && e.clientY < y + 50)
        {
            alert("Got me!")
            score++;
            alert("Score: " + score)
            $("#score").html("Score: " + score)
        }
        if(e.clientX > x2 && e.clientX < x2 + 50 && e.clientY > y2 && e.clientY < y2 + 50)
        {
            alert("Wrong one!")
            score--;
            alert("Score: " + score)
            $("#score").html("Score: " + score)
        }
    }
});