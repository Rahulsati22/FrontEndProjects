var bar1 = document.getElementById("bar1");
var bar2 = document.getElementById("bar2");
var ball = document.getElementById("ball");
var movement = 20;

const thisBar1="Bar-1";
const thisBar2="Bar-2";
const storeName="abc";
const storeScore=123;

let whichBar;
let moveX = 2;
let moveY = 2;
let ballMoving;
let border = 12;
let score;
let highScore;
let gameStart = false;

localStorage.setItem(storeScore, "null");
localStorage.setItem(storeName, "null");

//this function will call itself as long as the programme will run
(function()
{
    highScore = localStorage.getItem(storeScore);
    whichBar = localStorage.getItem(storeName);
    if (whichBar == "null"  || highScore == "null")
    {
        highScore = 0;
        whichBar = thisBar1;
    }
    else
    {
        alert(whichBar + " has the maximum score of " + highScore * 100);
    }
    gameReset(whichBar);
})();


function gameReset(barName)
{
    bar1.style.left = ((window.innerWidth - bar1.offsetWidth)/2) + 'px';
    bar2.style.left = ((window.innerWidth - bar2.offsetWidth)/2) + 'px';
    ball.style.left = ((window.innerWidth - ball.offsetWidth)/2) + 'px';

    if (barName == thisBar1)
    {
        ball.style.top = bar2.getBoundingClientRect().y - bar2.getBoundingClientRect().height + 'px';
        moveY = -2;
    }
    else
    {
        ball.style.top =bar1.getBoundingClientRect().height + 'px';
        moveY = 2;
    }
    score = 0;
    gameStart = false;
}

document.addEventListener('keydown', function(event){
   let key = event.key;
   console.log(key);
   if (key === 'a' || key === 'A')
   {
       if (parseInt(bar1.style.left) > border )
       {
        bar1.style.left = parseInt(bar1.style.left) - movement + 'px';
        bar2.style.left = bar1.style.left;
       }
   }
   else if (key === 'd' || key === 'D'){
    if (parseInt(bar1.style.left) < (window.innerWidth - bar1.offsetWidth + border))
    {
        bar1.style.left = parseInt(bar1.style.left) + movement + 'px';
        bar2.style.left = bar1.style.left;
    }
   }

   if (event.keyCode == 13)
   {
    if (!gameStart)
    {
        gameStart = true;
        let ballRect = ball.getBoundingClientRect();
        let ballX = ballRect.x;
        let ballY = ballRect.y;
        let ballDia = ballRect.width;

        let bar1_height = bar1.offsetHeight;
        let bar2_height = bar2.offsetHeight;
        let bar1_width = bar1.offsetWidth;
        let bar2_width = bar2.offsetWidth;

        ballMoving = setInterval(function()
        {
            let bar1X = bar1.getBoundingClientRect().x;
            let bar2X = bar2.getBoundingClientRect().x;

            let ballCenter = ballX + ballDia / 2;
            ballX += moveX;
            ballY += moveY;
            ball.style.left = ballX + 'px';
            ball.style.top = ballY + 'px';

            if (((ballX + ballDia) >= window.innerWidth) || ballX <= 0)
            {
                 moveX = -moveX;
            }

            if (ballY <= bar1_height)
            {
                moveY = -moveY;
                score++;

                if ((ballCenter < bar1X )|| (ballCenter > bar1X + bar1_width))
                {
                    dataStoring(score, thisBar2);
                }
            }

            if (ballY >= window.innerHeight-bar2_height)
            {
                moveY = -moveY;
                score++;

                if ((ballCenter < bar2X) || (ballCenter > bar2X + bar2_width))
                {
                    dataStoring(score, thisBar1);
                }
            }
        },10);
    }
   }
});
function dataStoring(scoreObtained, WinningBar)
{
   if (score > highScore)
   {
    highScore = scoreObtained;
    localStorage.setItem(storeName, highScore);
    localStorage.setItem(storeScore, highScore);
   }
   clearInterval(ballMoving);
   gameReset(WinningBar);
   alert(WinningBar+" wins with score of "+(scoreObtained*100)+". Max Score is: "+(highScore*100));
}