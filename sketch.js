function setup() {
	// create a place to draw
	createCanvas(700, 380)
	// frameRate(4);
}

function drawUfo1() {
	fill(54,126,199);
	rect(0,0,width,height);

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
}
function drawUfo2() {
	//draw bg
	fill(0,21,61);
	rect(0,0,width,height);

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

}
function drawAlien1() {
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
}

function drawAlien2() {
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
function drawAlien3() {
	//draw alien 3
	fill(255, 1, 15);
	ellipse(145, 160, 30, 40);
	ellipse(145, 205, 40, 60);
	ellipse(135, 230, 10, 40);
	ellipse(155, 230, 10, 40);
	ellipse(135, 195, 40, 10);
	ellipse(155, 195, 40, 10);
	ellipse(137, 140, 5, 20);
	ellipse(153, 140, 5, 20);
	ellipse(137, 130, 8, 8);
	ellipse(153, 130, 8, 8);
	fill(22, 23, 21);
	ellipse(138, 156, 11, 15);
	ellipse(152, 156, 11, 15);
	ellipse(146, 170, 14, 9);
	fill(168, 176, 164);
	ellipse(138, 156, 5, 5);
	ellipse(152, 156, 5, 5);

}
function drawAlien4() {
	//draw alien 4
	fill(232, 251, 13);
	ellipse(255, 170, 30, 40);
	ellipse(255, 215, 40, 60);
	ellipse(245, 240, 10, 40);
	ellipse(265, 240, 10, 40);
	ellipse(245, 205, 40, 10);
	ellipse(265, 205, 40, 10);
	ellipse(247, 150, 5, 20);
	ellipse(263, 150, 5, 20);
	ellipse(247, 140, 8, 8);
	ellipse(263, 140, 8, 8);
	fill(22, 23, 21);
	ellipse(248, 166, 11, 15);
	ellipse(262, 166, 11, 15);
	ellipse(256, 180, 14, 9);
	fill(168, 176, 164);
	ellipse(248, 166, 5, 5);
	ellipse(262, 166, 5, 5);

}

function draw() {
	// clear the background
	noStroke();
	background(167, 213, 242);
	var uFo = random(0,1);
	console.log("The random uFo value is: " + uFo);
  // draw UFO
		if (uFo > 0 && uFo < 0.25) {
			drawUfo1();

		} else if (uFo > 0.26 && uFo < 0.50) {
			drawUfo2();
		} else if (uFo > 0.51 && uFo < 0.75) {
			drawAlien1();
			drawAlien3();
		} else {
			drawAlien2();
			drawAlien4();
		}

	noLoop();
}
