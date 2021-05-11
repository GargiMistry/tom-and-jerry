var bg,bgImg;

function preload() {
    bg=loadImage("images/garden.png");
    tom=loadImage("images/cat1.png");
    jerry=loadImage("images/mouse1.png");
    cat=loadAnimation("images/cat2.png","images/cat3.png");
    mouse=loadImage("images/mouse3.png");
    text=loadImage("images/1st.png");
    t2=loadImage("images/t12.png");
    catl=loadImage("images/cat4.png");
    mousel=loadImage("images/mouse2.png");



    //load the images here
}

function setup(){
    createCanvas(1000,800);
    bgImg=createSprite(500,400,20,20);
    bgImg.addImage(bg);
    bgImg.scale=1;

    text1=createSprite(500,150,20,20);
    text1.addImage(text);
    text1.scale=0.59;
    text1.visible=true;

    text2=createSprite(500,150,20,20);
    text2.addImage(t2);
    text2.scale=0.59;
    text2.visible=true;

    tom1=createSprite(770,640,20,20);
    tom1.addImage(tom);
    tom1.scale=0.19;

    cat1 = createSprite(770,640);
    cat1.addAnimation("cat2",cat);
    cat1.scale=0.3;
    cat1.visible=false;

    mouse_teasing=createSprite(130,590,20,20);
    mouse_teasing.addImage(mouse);
    mouse_teasing.scale=0.19;
    mouse_teasing.visible=false;

    jerry1=createSprite(130,590,20,20);
    jerry1.addImage(jerry);
    jerry1.scale=0.19;

    cat_happy=createSprite(130,590,20,20);
    cat_happy.addImage(catl);
    cat_happy.scale=0.3;
    cat_happy.visible=false;

    
    mouse_happy=createSprite(130,590,20,20);
    mouse_happy.addImage(mousel);
    mouse_happy.scale=0.19;
    mouse_happy.visible=false;


    
   
    //create tom and jerry sprites here

}

function draw() {

    background(255);

    if(cat1.x<0){
        cat1.x=cat1.x+100;

   /* if(cat1.x=350){
        text2.visible=false;
        cat_happy.visible=true;
        mouse_happy.visible=true;
        mouse_teasing.visible=false;
        text2.visible=false;
        cat1.visible=false;
        cat_happy.x=300;
    }*/

    }

    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        
        tom1.visible=false;
        cat1.visible=true;
        mouse_teasing.visible=true;
        jerry1.visible=false;
        text1.visible=false;
        text2.visible=false;
        cat1.x=350;
    };

   

  //For moving and changing animation write code here


}
