var ball, img, paddle, ballimg;

function preload() {
  /* preload your images here of the ball and the paddle */
  img = loadImage("paddle.png")
  ballimg = loadImage("ball.png")
}

function setup() {
  createCanvas(400, 400);
  /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  paddle = createSprite(300, 200, 20, 50)
  paddle.addImage("123", img)
  ball = createSprite(200, 200, 20, 20)
  ball.addImage("abc", img)
  /* give the ball an initial velocity of 9 in the X direction */
  ball.velocityX = 9

}

function draw() {
  background(205, 153, 0);
  /* create Edge Sprites here */
  edge = createEdgeSprites();
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */

  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[3]);
  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
  ball.bounceOff(paddle)
  /* Prevent the paddle from going out of the edges */
  paddle.bounceOff(edges)

  if (keyDown(UP_ARROW)) {
    paddle.velocityY = -3
    /* what should happen when you press the UP Arrow Key */
  }

  if (keyDown(DOWN_ARROW)) {
    paddle.velocityY = 3
    /* what should happen when you press the UP Arrow Key */
  }
  drawSprites();

}

function randomVelocity() {
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  ball.velocityY = -4
}