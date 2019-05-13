window.onload = function()
{
    var canvas;
    var context;
    var delay = 1000; 
    var xCoord = 0;
    var yCoord = 0;

    init();

    function init()
    {
        canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        refreshCanvas();
        
    }

    function refreshCanvas()
    {
        xCoord += 2;
        yCoord +=2;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = "red";
        context.fillRect(xCoord, yCoord, 100, 50);
    }

}
    