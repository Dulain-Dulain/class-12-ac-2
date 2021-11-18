var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


function preload() {
    trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
    trex_collided = loadImage("trex_collided.png");
    groundImage = loadImage("ground2.png")
    cloudImage = loadImage("cloud.png")
}


function setup() {
    createCanvas(600, 200);

    //create a trex sprite
    trex = createSprite(50,160,20,50);
    trex.addAnimation("running", trex_running);
    trex.scale = 0.5;

    //create a ground sprite
    ground = createSprite(200,180,400,20);
    ground.addImage("ground",groundImage);
    ground.x = ground.width /2;
    ground.velocityX = -4;
    fakeground= createSprite(200,190,400,10);
    fakeground.visible = false
}


function draw() {
    background(180);
    //console.log(trex.y)
    //jump when the space button is pressed
    if (keyDown("space")&&trex.y>161) {
    trex.velocityY = -12;
    }
    trex.velocityY = trex.velocityY + 0.8
    if (ground.x < 0) {
    ground.x = ground.width / 2;
    }
    trex.collide(fakeground);
    spawnclouds()
    drawSprites();
}
function spawnclouds(){
    if (frameCount%40===0){
        cloud = createSprite(600,50,40,10)
        cloud.velocityX = -4
        cloud.y = Math.round(random(15,100))
        cloud.addImage(cloudImage)
        cloud.scale = 0.090
         console.log(cloud.depth)
         trex.depth = cloud.depth
         trex.depth = trex.depth+1
    }

}
