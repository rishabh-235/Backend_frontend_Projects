// Define Game Variables
const grid_size = 40;
let container = document.getElementById("gameContainer");
let instructionText= document.getElementById("instruction_text");
let score = document.getElementById("score");
let highestScoreText = document.getElementById("highest_score")
let snake = [{x:20, y:1}];
let food = genrateFood();
let direction = 'right';
let gameInterval;
let gameStarted = false;
let highScore = 0;

// Draw Game Area, Snake, Food
function draw(){
    container.innerHTML='';
    if(gameStarted){drawSnake();
    drawFood();
    updateScore();}
}

// Draw Snake
function drawSnake(){
    snake.forEach((block,i)=>{
        const snakeElement = createGameElement('div', ((block.x-1)*grid_size)+block.y, 'snake');
        setPosition(snakeElement, block);
        container.appendChild(snakeElement);
    })
}

// Create GameElement
function createGameElement(tag, index, className){
    const element = document.createElement(tag);
    element.className = `${className}`;
    element.id = `pixel${index}`;

    return element
}

// Set Positon of the Game item
function setPosition(element, position){
    element.style.gridRow = position.x;
    element.style.gridColumn = position.y;
}

// Draw Food
function drawFood(){
    const foodElement = createGameElement('div', ((food.x-1)*grid_size)+food.y, 'food');
    setPosition(foodElement, food);
    foodElement.style.backgroundColor='#ffffb3'
    container.appendChild(foodElement);
}

// Genrating Custom position for food
function genrateFood(){
    let x = Math.floor(Math.random()*grid_size)+1;
    let y = Math.floor(Math.random()*grid_size)+1;

    return {x:x, y:y};
}

// Movement of Snake
function move(){
    const head={...snake[0]};

    switch (direction) {
        case 'right':
            head.y++;
            break;
        case 'left':
            head.y--;
            break;
        case 'up':
            head.x--;
            break;
        case 'down':
            head.x++;
            break;
    }

    snake.unshift(head);

    if(head.x===food.x && head.y===food.y)
    {
        food = genrateFood();
        clearInterval(gameInterval);
        gameInterval = setInterval(()=>{
            move();
            checkCollision();
            draw();
        }, 100)
    }
    else snake.pop();

}

// Starting the Game
function startGame(){
    gameStarted = true;
    instructionText.style.visibility = "hidden";
    gameInterval = setInterval(()=>{
        move();
        checkCollision();
        draw();
    }, 100);
}

// Event Listiner for Instructing Turning The Snake
function handleKeyPress(event){
    if( !gameStarted && event.code==='Space')
    {
        startGame();
    }
    else if((direction === 'right' && event.code=='ArrowLeft') || (direction === 'left' && event.code=='ArrowRight') || (direction === 'up' && event.code=='ArrowDown') || (direction === 'down' && event.code=='ArrowUp'))
    {
        resetGame();
    }
    else
    {
        switch (event.code) {
            case "ArrowUp":
                direction = "up"
                break;
            case "ArrowDown":
                direction = "down"
                break;
            case "ArrowLeft":
                direction = "left"
                break;
            case "ArrowRight":
                direction = "right"
                break;
        }
    }
}

// Handling Collision with the walls and Snake Itself.
function checkCollision(){
    const head = snake[0];
    
    if(head.y < 1 || head.y > grid_size || head.x<1 || head.x>grid_size) 
    {
        resetGame();
    }

    for(let i = 1; i<snake.length; i++)
    {
        if(head.x === snake[i].x && head.y===snake[i].y)
        {
            resetGame();
        }
    }
}

//Resetting the Game after the Collision
function resetGame(){
    updateHighScore();
    stopGame();
    snake = [{x:10, y:10}];
    direction = "right";
    food = genrateFood();
    updateScore();
}

//Updating the score
function updateScore(){
    const currScore = snake.length-1;
    score.textContent = `SCORE:${currScore.toString().padStart(4,'0')}`;
}

//Stopping the Game
function stopGame(){
    clearInterval(gameInterval);
    gameStarted = false;
    instructionText.style.visibility=""
}

//Updating the highScore
function updateHighScore(){
    const currScore = snake.length-1;

    if(currScore > highScore)
    {
        highScore = currScore;
        highestScoreText.textContent = `HIGHSCORE:${highScore.toString().padStart(4, '0')}`;
    }
}

document.addEventListener('keydown', handleKeyPress);
