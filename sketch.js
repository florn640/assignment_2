function setup() {
	// create a place to draw
	createCanvas(700, 380)

}

function draw() {
	// clear the background
	noStroke();
background(167, 213, 242);


	// set a fill color
//	fill(31, 161, 255);

	var backGroundco = random (0, 1);
	if (backGroundco > 0.5) {
	fill(1, 16, 255);
} else {
	fill(31, 11, 30);


//var uFo = random(0,1);
  // draw UFO
// if (uFo > 0.8) {
		// drawing UFO 1
		fill(107, 112, 105);
	ellipse(240, 160, 150, 140);
	ellipse(238, 190, 290, 90);
		fill(22, 23, 21);
		ellipse(241, 147, 120, 90);
		fill(107, 112, 105);
		ellipse(238, 190, 290, 90);
		fill(246, 246, 246);
		ellipse(238, 215, 20, 20);
		ellipse(155, 208, 20, 20);
		ellipse(320, 208, 20, 20);
		fill(255, 244, 24);
		ellipse(195, 215, 18, 18);
		ellipse(115, 195, 18, 18);
		ellipse(363, 195, 18, 18);
		ellipse(280, 215, 18, 18);
//} else {
	 // drawing UFO 2
   fill(107, 112, 105);
   ellipse(550, 240, 150, 140);
   ellipse(548, 270, 290, 90);
   fill(22, 23, 21);
   ellipse(551, 227, 120, 90);
   fill(107, 112, 105);
   ellipse(548, 270, 290, 90);
   fill(246, 246, 246);
   ellipse(548, 295, 20, 20);
   ellipse(465, 288, 20, 20);
   ellipse(630, 288, 20, 20);
   fill(255, 244, 24);
   ellipse(505, 295, 18, 18);
   ellipse(425, 275, 18, 18);
   ellipse(673, 275, 18, 18);
   ellipse(590, 295, 18, 18);

	 //drawing Alien 1
	 fill(30, 199, 24);
 	ellipse(555, 70, 30, 40);
 	ellipse(555, 115, 40, 60);
	ellipse(545, 140, 10, 40);
	ellipse(565, 140, 10, 40);
	ellipse(545, 105, 40, 10);
	ellipse(565, 105, 40, 10);
	ellipse(547, 50, 5, 20);
	ellipse(563, 50, 5, 20);
	ellipse(547, 40, 8, 8);
	ellipse(563, 40, 8, 8);
	fill(22, 23, 21);
	ellipse(548, 66, 11, 15);
	ellipse(562, 66, 11, 15);
	ellipse(556, 80, 14, 9);
	fill(168, 176, 164);
	ellipse(548, 66, 5, 5);
	ellipse(562, 66, 5, 5);
 //draw Alien 2
	fill(155, 65, 191);
 ellipse(355, 70, 30, 40);
 ellipse(355, 115, 40, 60);
 ellipse(345, 140, 10, 40);
 ellipse(365, 140, 10, 40);
 ellipse(345, 105, 40, 10);
 ellipse(365, 105, 40, 10);
 ellipse(347, 50, 5, 20);
 ellipse(363, 50, 5, 20);
 ellipse(347, 40, 8, 8);
 ellipse(363, 40, 8, 8);
 fill(22, 23, 21);
 ellipse(348, 66, 11, 15);
 ellipse(362, 66, 11, 15);
 ellipse(356, 80, 14, 9);
 fill(168, 176, 164);
 ellipse(348, 66, 5, 5);
 ellipse(362, 66, 5, 5);


}
