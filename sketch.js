function setup() {
createCanvas(500,500)
background(0)
i=10
}

function draw() {
//Variable Ellispe 
  i += 1
  fill(250)
  ellipse(width/2, height/2, i, i)
//Background patterns framework - Lines the Diagonals are on
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
  //Background Pattern - Gradient ellipses
  strokeWeight(1)
  ellipse(width/2, height/2, 25, 25)
  ellipse(width/2, height/2, 31, 31)
  ellipse(width/2, height/2, 38, 38)
  ellipse(width/2, height/2, 46, 46)
  ellipse(width/2, height/2, 55, 55)
  ellipse(width/2, height/2, 65, 65)
  ellipse(width/2, height/2, 76, 76)
  ellipse(width/2, height/2, 88, 88)
  ellipse(width/2, height/2, 101, 101)
  ellipse(width/2, height/2, 115, 115)
  ellipse(width/2, height/2, 130, 130)
  ellipse(width/2, height/2, 146, 146)
  ellipse(width/2, height/2, 163, 163)
  ellipse(width/2, height/2, 181, 181)
  ellipse(width/2, height/2, 200, 200)
  ellipse(width/2, height/2, 220, 220)
  ellipse(width/2, height/2, 241, 241)
  ellipse(width/2, height/2, 263, 263)
  ellipse(width/2, height/2, 286, 286)
  ellipse(width/2, height/2, 310, 310)
  ellipse(width/2, height/2, 335, 335)
  ellipse(width/2, height/2, 361, 361)
  ellipse(width/2, height/2, 388, 388)
  ellipse(width/2, height/2, 416, 416)
  ellipse(width/2, height/2, 445, 445)
  ellipse(width/2, height/2, 475, 475)
  ellipse(width/2, height/2, 506, 506)
  ellipse(width/2, height/2, 538, 538)
  ellipse(width/2, height/2, 571, 571)
  ellipse(width/2, height/2, 605, 605)
  ellipse(width/2, height/2, 640, 640)
//Background pattern - Horizontal lines
  ellipse(250, 251, 700, 1)
  ellipse(250, 253, 700, 2)
  ellipse(250, 256, 700, 3)
  ellipse(250, 260, 700, 4)
  ellipse(250, 265, 700, 5)
  ellipse(250, 271, 700, 6)
  ellipse(250, 278, 700, 7)
  ellipse(250, 286, 700, 8)
  ellipse(250, 295, 700, 9)
  ellipse(250, 305, 700, 10)
  ellipse(250, 316, 700, 11)
  ellipse(250, 328, 700, 12)
  ellipse(250, 341, 700, 13)
  ellipse(250, 355, 700, 14)
  ellipse(250, 370, 700, 15)
  ellipse(250, 386, 700, 16)
  ellipse(250, 403, 700, 17)
  ellipse(250, 421, 700, 18)
  ellipse(250, 440, 700, 19)
  ellipse(250, 460, 700, 20)
  ellipse(250, 481, 700, 21)
  ellipse(250, 503, 700, 22)
//Horizontal Ellipses
  fill (0)
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
  //Top left
  ellipse(75, 70, 40, 40)
  ellipse(15, 170, 40, 40)
  ellipse(170, 15, 40, 40)
  //Top right
  ellipse(425, 70, 40, 40)
  ellipse(485, 170, 40, 40)
  ellipse(330, 15, 40, 40)
  //Bottom left
  ellipse(75, 430, 40, 40)
  ellipse(15, 330, 40, 40)
  ellipse(170, 485, 40, 40)
  //Bottom right
  ellipse(425, 430, 40, 40)
  ellipse(485, 330, 40, 40)
  ellipse(330, 485, 40, 40)
  //4th Circle - Diagonals
  ellipse(0, 0, 50, 50)
  ellipse(0, 500, 50, 50)
  ellipse(500, 500, 50, 50)
  ellipse(500, 0, 50, 50)
}
