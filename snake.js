
        var box =15
        let  move;
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

        let food =new Image();
        food.src = "images.jpg";
        // var food = document.getElementsByClassName("food");
        let snake =[]
        snake[0]={
            x:5*15,
            y:7*15,
        }
        
        // food
        let foodi={
            x :Math.floor(Math.random()*19 +1)*box,
            y :Math.floor(Math.random()*19 +1)*box,
        }
        // event listener
        document.addEventListener("keydown",function(event){
            if(event.keyCode == 37 && move !="right"){
                move = "left"
            }else if(event.keyCode == 38&& move !="down"){
                move ="top"
            }else if(event.keyCode == 39&& move !="left"){
                move ="right"
            }else if(event.keyCode == 40&& move !="top"){
                move ="down"
            }
            console.log(move);
        })
        // snake
        function draw(){
            for(i=0;i<snake.length;i++){
                ctx.fillStyle=(i==0)?"green":'red';
                ctx.fillRect(snake[i].x,snake[i].y,box,box)
                
                // snake position
                let snakeX = snake[0].x;
                let snakeY = snake[0].y;
                
                if(move =="left" &&  snakeX!= 0*box){
                    snakeX -=box;
                }else if(move =="top" &&snakeY!= 0*box){
                    snakeY -=box;
                }else if(move =="right" &&snakeX!= 19*box){
                    snakeX +=box;
                }else if(move =="down" &&snakeY!= 19*box){
                    snakeY +=box;
                }
                let newhead ={
                    x:snakeX,
                    y:snakeY,
                }
                if(snakeX==foodi.x && snakeY==foodi.y){
                    foodi.x=Math.floor(Math.random()*19 +1)*box;
                    foodi.y=Math.floor(Math.random()*19 +1)*box;
                }else{
                    snake.pop()
                }
                snake.unshift(newhead)

                // food
                // ctx.fillStyle="red";
                ctx.drawImage(food,0,0,box,box,foodi.x,foodi.y,box,box)
            }
        }
        function loop(){
            // screen
            ctx.fillStyle = "greenyellow";
            ctx.fillRect(0, 0, 300, 300);
            draw()
        }
        let game = setInterval(loop,200)
        