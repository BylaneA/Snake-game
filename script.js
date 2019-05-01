window.onload = function()
{
    function init()
    {
        var canvas = document.createElement('canvas');
        canvas.width = 900;
        canvas.height = 600;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);

        var context = canvas.getContext('2d');
        context.fillStyle = "red";
        context.fillRect(30, 30, 100, 50);
    }
    
}
    