function setup() {
	// create a place to draw
	createCanvas(700, 380)

}

function draw() {
	// clear the background
	noStroke();
background(167, 213, 242);


	// set a fill color
	fill(242, 242, 242);

var backGround = random(1);

	// draw background
if (backGround < 0.8) {
		// day
		background(13, 12, 12);
		fill(12, 12, 12);

	} else {
		// night
		background(200, 20, 40);
		fill(10, 30, 160);

	}


	// draw sun
	if (backGround < 0.5) {
		fill(280, 20, 90);
		ellipse(random(320, 640), random(0, 280), 100, 100);
	}

	// draw stars
	if (backGround > 0.5) {
		fill(250, 250, 250);
		var starSize;
		starSize = random(4, 8);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
		starSize = random(2, 5);
		ellipse(random(0, 640), random(0, 280), starSize, starSize);
	}

	// draw tree
	var treeX = random(0, 320);
	if (backGround< 0.5) {
		fill(0, 150, 0);
	} else {
		fill(0, 80, 0);
	}
	triangle(treeX, 300, treeX - 50, 425, treeX + 50, 425);
	triangle(treeX, 240, treeX - 30, 325, treeX + 30, 325);


	noLoop();

}
