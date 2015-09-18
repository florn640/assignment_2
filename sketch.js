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

	fill(246, 246, 246);
  noStroke()
		ellipse(675, 190, 70, 70);
		ellipse(700, 180, 50, 50);
		ellipse(650, 150, 50, 50)
		ellipse(650, 180, 50, 50)
		ellipse(670, 133, 50, 50)
		ellipse(610, 165, 50, 50)
		ellipse(640, 160, 30, 30)
		ellipse(625, 133, 50, 50)
		ellipse(620, 160, 30, 30)
		ellipse(600, 135, 30, 30)
		ellipse(580, 145, 30, 30)
		ellipse(630, 200, 40, 40)
		ellipse(595, 180, 50, 50)
		ellipse(700, 150, 40, 40);
		ellipse(665, 170, 30, 30)

		ellipse(575, 390, 70, 70);
		ellipse(600, 380, 50, 50);
		ellipse(550, 350, 50, 50)
		ellipse(550, 380, 50, 50)
		ellipse(570, 333, 50, 50)
		ellipse(510, 365, 50, 50)
		ellipse(540, 360, 30, 30)
		ellipse(525, 333, 50, 50)
		ellipse(520, 360, 30, 30)
		ellipse(500, 335, 30, 30)
		ellipse(480, 345, 30, 30)
		ellipse(530, 500, 40, 40)
		ellipse(495, 380, 50, 50)
		ellipse(600, 350, 40, 40);
		ellipse(565, 370, 30, 30)

		ellipse(475, 80, 60, 60);
		ellipse(400, 80, 50, 50);
		ellipse(450, 50, 50, 50)
		ellipse(450, 80, 50, 50)
		ellipse(470, 33, 50, 50)
		ellipse(410, 65, 50, 50)
		ellipse(440, 60, 30, 30)
		ellipse(425, 33, 50, 50)
		ellipse(420, 60, 30, 30)
		ellipse(400, 35, 30, 30)
		ellipse(380, 45, 30, 30)
		ellipse(430, 100, 40, 40)
		ellipse(395, 80, 50, 50)
		ellipse(500, 50, 40, 40);
		ellipse(465, 70, 30, 30)
}
function drawUfo2() {
	//draw bg
	fill(0,21,61);
	rect(0,0,width,height);

	// drawing UFO 2
	fill(107, 112, 105);
	ellipse(450, 240, 150, 140);
	ellipse(448, 270, 290, 90);
	fill(22, 23, 21);
	ellipse(451, 227, 120, 90);
	fill(107, 112, 105);
	ellipse(448, 270, 290, 90);
	fill(246, 246, 246);
	ellipse(448, 295, 20, 20);
	ellipse(365, 288, 20, 20);
	ellipse(530, 288, 20, 20);
	fill(255, 244, 24);
	ellipse(405, 295, 18, 18);
	ellipse(325, 275, 18, 18);
	ellipse(573, 275, 18, 18);
	ellipse(490, 295, 18, 18);

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
function drawAlien5() {
	fill(255, 81, 214);
	ellipse(455, 170, 30, 40);
	ellipse(455, 215, 40, 60);
	ellipse(445, 240, 10, 40);
	ellipse(465, 240, 10, 40);
	ellipse(445, 205, 40, 10);
	ellipse(465, 205, 40, 10);
	ellipse(447, 150, 5, 20);
	ellipse(463, 150, 5, 20);
	ellipse(447, 140, 8, 8);
	ellipse(463, 140, 8, 8);
	fill(22, 23, 21);
	ellipse(448, 166, 11, 15);
	ellipse(462, 166, 11, 15);
	ellipse(456, 180, 14, 9);
	fill(168, 176, 164);
	ellipse(448, 166, 5, 5);
	ellipse(462, 166, 5, 5);
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
			drawAlien5();

		}

	noLoop();
}
