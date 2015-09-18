function setup() {
	// create a place to draw
	createCanvas(700, 380)
	// frameRate(4);
}

function drawUfo1() {
	fill(54,126,199);
	rect(0,0,width,height);

	// drawing UFO 1
	//first cloud
	fill(246, 246, 246);
  noStroke()
		ellipse(380, 220, 50, 50);
		ellipse(350, 200, 50, 50)
		ellipse(350, 230, 50, 50)
		ellipse(370, 183, 50, 50)
		ellipse(310, 215, 50, 50)
		ellipse(340, 210, 30, 30)
		ellipse(325, 183, 50, 50)
		ellipse(320, 210, 30, 30)
		ellipse(300, 185, 30, 30)
		ellipse(280, 195, 30, 30)
		ellipse(330, 250, 40, 40)
		ellipse(295, 230, 50, 50)
		ellipse(180, 200, 40, 40);
		ellipse(225, 200, 30, 30)

		ellipse(80, 120, 55, 55);
		ellipse(175, 160, 50, 50);
		ellipse(90, 160, 50, 50);
		ellipse(140, 130, 50, 50)
		ellipse(140, 160, 50, 50)
		ellipse(160, 113, 50, 50)
		ellipse(100, 145, 50, 50)
		ellipse(130, 140, 30, 30)
		ellipse(115, 113, 50, 50)
		ellipse(110, 140, 30, 30)
		ellipse(90, 115, 30, 30)
		ellipse(85, 125, 30, 30)
		ellipse(120, 180, 40, 40)
		ellipse(85, 160, 50, 50)
		ellipse(190, 130, 40, 40);
		ellipse(155, 150, 30, 30)

		//actual ufo
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
 //more clouds
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

    ellipse(390, 40, 55, 55);
		ellipse(485, 80, 50, 50);
		ellipse(400, 80, 50, 50);
		ellipse(450, 50, 50, 50)
		ellipse(450, 80, 50, 50)
		ellipse(470, 33, 50, 50)
		ellipse(410, 65, 50, 50)
		ellipse(440, 60, 30, 30)
		ellipse(425, 33, 50, 50)
		ellipse(420, 60, 30, 30)
		ellipse(400, 35, 30, 30)
		ellipse(395, 45, 30, 30)
		ellipse(430, 100, 40, 40)
		ellipse(395, 80, 50, 50)
		ellipse(500, 50, 40, 40);
		ellipse(465, 70, 30, 30)

		ellipse(190, 340, 55, 55);
		ellipse(285, 380, 50, 50);
		ellipse(200, 380, 50, 50);
		ellipse(250, 350, 50, 50)
		ellipse(250, 380, 50, 50)
		ellipse(270, 333, 50, 50)
		ellipse(210, 365, 50, 50)
		ellipse(240, 360, 30, 30)
		ellipse(225, 333, 50, 50)
		ellipse(220, 360, 30, 30)
		ellipse(200, 335, 30, 30)
		ellipse(195, 345, 30, 30)
		ellipse(230, 400, 40, 40)
		ellipse(195, 380, 50, 50)
		ellipse(300, 350, 40, 40);
		ellipse(265, 370, 30, 30)
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
	//draw bg
	fill(0,21,61);
	rect(0,0,width,height);
	fill(60, 66, 59);
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
	fill(255, 1, 15);
	ellipse(548, 66, 5, 5);
	ellipse(562, 66, 5, 5);
}

function drawAlien2() {
	//draw raibow
	fill(255, 0, 0);
	ellipse(350, 330, 650, 550);
	fill(255, 148, 0);
	ellipse(350, 331, 600, 500);
	fill(255, 255, 0);
	ellipse(350, 332, 550, 450);
	fill(44, 202, 0);
	ellipse(350, 333, 500, 400);
	fill(62, 39, 193);
	ellipse(350, 334, 450, 350);
	fill(110, 17, 163);
	ellipse(350, 335, 400, 300);
	fill(251, 64, 208);
	ellipse(350, 336, 350, 250);
	fill(167, 213, 242);
	ellipse(350, 337, 300, 200);
  //rainbow clouds
fill(246, 246, 246);
noStroke()
	ellipse(615, 400, 100, 100);
	ellipse(640, 390, 100, 100);
	ellipse(590, 360, 100, 100)
	ellipse(590, 390, 100, 100)
	ellipse(610, 343, 100, 100)
	ellipse(550, 375, 100, 100)
	ellipse(590, 370, 80, 80)
	ellipse(565, 343, 100, 100)
	ellipse(560, 370, 80, 80)
	ellipse(560, 345, 80, 80)
	ellipse(520, 355, 80, 80)
	ellipse(570, 510, 90, 90)
	ellipse(535, 390, 100, 100)
	ellipse(640, 360, 90, 90)
	ellipse(605, 380, 80, 80)
	ellipse(662, 375, 70, 70)

	ellipse(135, 400, 100, 100);
	ellipse(160, 390, 100, 100);
	ellipse(110, 360, 100, 100)
	ellipse(110, 390, 100, 100)
	ellipse(130, 343, 100, 100)
	ellipse(70, 375, 100, 100)
	ellipse(110, 370, 80, 80)
	ellipse(85, 343, 100, 100)
	ellipse(80, 370, 80, 80)
	ellipse(80, 345, 80, 80)
	ellipse(40, 355, 80, 80)
	ellipse(90, 510, 90, 90)
	ellipse(55, 390, 100, 100)
	ellipse(160, 360, 90, 90)
	ellipse(125, 380, 80, 80)
	ellipse(182, 375, 70, 70)

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
	fill(87, 87, 87);
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
	fill(255, 1, 15);
	ellipse(138, 156, 5, 5);
	ellipse(152, 156, 5, 5);

}
function drawAlien4() {
	//draw alien 4
	fill(255, 170, 0);
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
	fill(80, 243, 176);
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

function drawText() {
	//draw bg
	fill(13,13,13);
	rect(0,0,width,height);
  fill(214, 13, 13);
	textSize(80);
  text("TheEnd", 50, 50);

}

function draw() {
	// clear the background
	noStroke();
	background(167, 213, 242);
	var uFo = random(0,1);
	console.log("The random uFo value is: " + uFo);
  // draw UFO
		if (uFo > 0 && uFo < 0.20) {
			drawUfo1();

		} else if (uFo > 0.21 && uFo < 0.45) {
			drawUfo2();
		} else if (uFo > 0.46 && uFo < 0.60) {
			drawAlien1();
			drawAlien3();
		} else if (uFo > 0.61 && uFo < 0.85) {
			drawAlien2();
			drawAlien4();
			drawAlien5();
		} else {
			drawText();

		}

	noLoop();
}
