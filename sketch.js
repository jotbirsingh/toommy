var cat,mouse,garden;
var catImg1,catImg2,catImg3,mouseImg1,mouseImg2,mouseImg3,gardenImg;

function preload() {
    //load the images here
    catImg1=loadAnimation("cat1.png");
    catImg2=loadAnimation("cat2.png","cat3.png");
    catImg3=loadAnimation("cat4.png");
     mouseImg1=loadAnimation("mouse1.png");
    mouseImg2=loadAnimation("mouse2.png","mouse3.png");
    mouseImg3=loadAnimation("mouse4.png");
    gardenImg=loadImage("garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   
    cat = createSprite(600,700,20,20);
    cat.addAnimation("catRunning",catImg1);
    cat.scale=0.15;
    mouse = createSprite(30,700,20,20);
    mouse.addAnimation("mouseStanding",mouseImg1);
    mouse.scale=0.08;
    
}
function draw() {

    background(gardenImg);
    
    

    
       //Write condition here to evalute if tom and jerry collide

       if(cat.x - mouse.x < cat.width/2 - mouse.width/2){
          
        cat.velocityX=0;
        cat.addAnimation("catStop",catImg3);
        cat.changeAnimation("catStop");
        mouse.addAnimation("mouseLastImage",mouseImg3);
        mouse.changeAnimation("mouseLastImage");
        

     } 
    
    
        
    
     
    
   
    
    
   
    drawSprites();

}

  
  
function keyPressed(){

    //For moving and changing animation write code here
    
    if(keyCode === LEFT_ARROW){
        
        cat.velocityX=-5;
       
        cat.addAnimation("catRunning",catImg2,);
        cat.changeAnimation("catRunning");
        mouse.addAnimation("mouseEnjoy",mouseImg2);
        mouse.changeAnimation("mouseEnjoy");
        Text(mouseX+','+mouseY,10,45);
        
        
    }
    
    
  
}
  

