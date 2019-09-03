function setup() {
createCanvas(500,500)
i=10
}

function draw() {
//Variable Ellispe 
  i += 1
  clear()
  fill(250)
  ellipse(width/2, height/2, i, i)
//Background patterns
  noFill()
  strokeWeight(1)
  ellipse(width/2, height/2, 100, 100)
  strokeWeight(2)
  ellipse(width/2, height/2, 200, 200)
  strokeWeight(3)
  ellipse(width/2, height/2, 300, 300)
  strokeWeight(4)
  ellipse(width/2, height/2, 400, 400)
  strokeWeight(5)
  ellipse(width/2, height/2, 500, 500)
  strokeWeight(6)
  ellipse(width/2, height/2, 600, 600)
  strokeWeight(7)
  ellipse(width/2, height/2, 700, 700)
//Horizontal Ellipses
  fill (25)
  strokeWeight(1)
  ellipse(0, 250, 45, 45)
  ellipse(50, 250, 40, 40)
  ellipse(100, 250, 35, 35)
  ellipse(150, 250, 30, 30)
  ellipse(200, 250, 25, 25)
  ellipse(250, 250, 20, 20)
  ellipse(300, 250, 25, 25)
  ellipse(350, 250, 30, 30)
  ellipse(400, 250, 35, 35)
  ellipse(450, 250, 40, 40)
  ellipse(500, 250, 45, 45)
//Vertical Ellipses
  ellipse(250, 0, 45, 45)
  ellipse(250, 50, 40, 40)
  ellipse(250, 100, 35, 35)
  ellipse(250, 150, 30, 30)
  ellipse(250, 200, 25, 25)
  ellipse(250, 250, 20, 20)
  ellipse(250, 300, 25, 25)
  ellipse(250, 350, 30, 30)
  ellipse(250, 400, 35, 35)
  ellipse(250, 450, 40, 40)
  ellipse(250, 500, 45, 45)
//1st Circle - Diagonals
  ellipse(215, 215, 20, 20)
  ellipse(215, 285, 20, 20)
  ellipse(285, 285, 20, 20)
  ellipse(285, 215, 20, 20)
//2nd circle - Diagonals
  //Top left
  ellipse(166, 125, 30, 30)
  ellipse(125, 166, 30, 30)
  //Top right
  ellipse(375, 166, 30, 30)
  ellipse(332, 125, 30, 30)
  //Bottom Left
  ellipse(166, 375, 30, 30)
  ellipse(125, 332, 30, 30)
  //Bottom right
  ellipse(375, 332, 30, 30)
  ellipse(332, 375, 30, 30)
//3rd circle - Diagonals
  
}
