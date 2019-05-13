window.onload = function()
{
    var canvas;
    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var context;
    var delay = 100; 
    var snakee;

    init();

    function init()
    {
        canvas = document.createElement('canvas');
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);
        context = canvas.getContext('2d');
        snakee = new Snake([[6,4], [5,4], [4,4]]);
        refreshCanvas();
        
    }

    function refreshCanvas()
    {
        context.clearRect(0, 0, canvasWidth, canvasHeight);
        snakee.advance();
        snakee.draw();
        setTimeout(refreshCanvas, delay);
    }

    function drawBlock(context, position)
    {
        var x = position[0] * blockSize;
        var y = position[1] * blockSize;
        context.fillRect(x, y, blockSize, blockSize);
    }

    function Snake(body)
    {
        this.body = body;
        this.draw = function()
        {
            context.save();
            context.fillStyle = "red";
            for(var i = 0; i < this.body.length; i++ )
            {
                drawBlock(context, this.body[i]);
            }
            context.restore();         
        }; 
        this.advance = function()
        {
            var nextPosition = this.body[0].slice();
            nextPosition[0]++;
            this.body.unshift(nextPosition);
            this.body.pop();
        };
    }
}
    