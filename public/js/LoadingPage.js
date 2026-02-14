var clock;
$(document).ready(function () {

	$(window).load(function () {
		animateDiv();
	});

	console.log("I love you Brittney!");

	//Countdown
	//------------------------------------------------------------------------
	clock = $(".CountdownClock").FlipClock({
		clockFace: "DailyCounter",
		autoStart: true
	});
	//Calc seconds between now and 1 on vday
	//var sd = new Date();
	//var ed = new Date(2015, 01, 14, 13, 0, 0, 0);
	//var seconds = (ed.getTime() - sd.getTime()) / 1000;
	//clock.setTime(seconds);
	//clock.setCountdown(true);
	//clock.start();
	//------------------------------------------------------------------------

	//Animate Airplane
	//------------------------------------------------------------------------
	var i = 0;
	function RotatePlane(Deg, Transition) {
		var P = $(".Plane");
		P.removeClass("PlaneTransition");

		if (Transition == true) {
			P.addClass("PlaneTransition");
			P.css({
				"transform": "rotate(" + Deg + "deg)",
				"-moz-transform": "rotate(" + Deg + "deg)",
				"-webkit-transform": "rotate(" + Deg + "deg)",
				"-o-transform": "rotate(" + Deg + "deg)",
				"-ms-transform": "rotate(" + Deg + "deg)"
			});
		} else {
			P.css({
				"transform": "rotate(" + Deg + "deg)",
				"-moz-transform": "rotate(" + Deg + "deg)",
				"-webkit-transform": "rotate(" + Deg + "deg)",
				"-o-transform": "rotate(" + Deg + "deg)",
				"-ms-transform": "rotate(" + Deg + "deg)"
			});
		}
	}
	function makeNewPosition() {
		// Get viewport dimensions (remove the dimension of the div)
		var h = $(window).height() - 106;
		var w = $(window).width() - 106;

		var nh = Math.floor(Math.random() * h);
		var nw = Math.floor(Math.random() * w);

		return [nw, nh];
	}
	var StartingPoint = [0, 0];
	var NewPoint = [0, 0];
	var i = 1;
	function animateDiv() {
		//Draw three points
		NewPoint = makeNewPosition();

		var HPlane = StartingPoint[1];
		var NewX = StartingPoint[0] + (NewPoint[0] - StartingPoint[0]);
		var HPoint = [NewX, HPlane];

		var Length = NewPoint[0] - StartingPoint[0];
		var Height = NewPoint[1] - HPoint[1];

		var ALength = Math.abs(Length);
		var AHeight = Math.abs(Height);
		var Hypotnuse = Math.sqrt((ALength * ALength) + (AHeight * AHeight));

		var Angle = 0;
		var CSSAngle = 0;
		if (Length > 0) {
			Angle = Math.acos(((Math.abs(Length) * Math.abs(Length)) + (Hypotnuse * Hypotnuse) - (Math.abs(Height) * Math.abs(Height))) / (2 * Math.abs(Length) * Hypotnuse))
			Angle = Angle * (180 / 3.14159265);
			if (Height < 0) {
				Angle = 85 - Angle;
			} else {
				Angle = Angle + 90;
			}
		} else {
			Angle = Math.acos(((Math.abs(Length) * Math.abs(Length)) + (Hypotnuse * Hypotnuse) - (Math.abs(Height) * Math.abs(Height))) / (2 * Math.abs(Length) * Hypotnuse))
			Angle = Angle * (180 / 3.14159265);
			if (Height < 0) {
				Angle = 270 + Angle;
			} else {
				Angle = 270 - Angle;
			}
		}
		RotatePlane(Angle, true);
		setTimeout(function () {
			StartingPoint = [NewPoint[0], NewPoint[1]];
			RotatePlane(Angle, false);
			var Speed = 4500;
			if ($(window).width() < 650)
			    Speed = 2500;

			$(".Plane").animate({ top: NewPoint[1], left: NewPoint[0] }, Speed, function () {

				if (i == 2) {
					$(".planetrail3").remove();
				}
				if (i == 3) {
					$(".planetrail2").remove();
					i = 1;
				}
				i++;

				$("body").append("<div class=\"planetrail planetrail" + i + "\" style=\"top:" + StartingPoint[1] + "px;left:" + StartingPoint[0] + "px;\"></div>");
				animateDiv();
			});
		}, 1000);



		//$("body").append("<div class=\"planetrail\" style=\"top:" + NewPoint[1] + "px;left:" + NewPoint[0] + "px;\"></div>");
		//$("body").append("<div class=\"planetrail2\" style=\"top:" + HPoint[1] + "px;left:" + HPoint[0] + "px;\"></div>");
	}
	//------------------------------------------------------------------------
});
