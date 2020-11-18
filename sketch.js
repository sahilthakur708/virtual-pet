var dog ,dog1,dog2;
var foods;
var foods=20
var gameState="PLAY"
function preload()
{
  dog1=loadImage("images/dogImg.png")
  dog2=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(800, 700);
  dog=createSprite(400,300,10,10)
dog.addImage(dog1)
dog.scale=1/2
database=firebase.database()
foodStock=database.ref('food')
foodStock.on("value",readStock)

}


function draw() {  
  background("yellow")
  textSize(30)
  text("foods: "+foods,400,500)

if(keyWentDown(UP_ARROW)){
  foods=foods-1
  writeStock(foods)
  dog.addImage(dog2)
}

  drawSprites();
}
  function readStock(){
  foods=data.val()
}
 function writeStock(x){
database.ref('/').update({
  food:x
})
 }
