$(document).ready(function(){

	

	var blurry = false;
	$('.l02').hover(function(){
		if(blurry){
			$(this).css('filter', 'blur(0px)');
			blurry = false;
		}
		else {
			$(this).css('filter', 'blur(15px)');
			blurry = true;
		}
	});






	var rot1 = false;
	$('.int3').click(function(){
		if(rot1){
			$('.l03').css('transform', 'rotate(0deg)');
			rot1 = false;
		}
		else {
			$('.l03').css('transform', 'rotate(90deg)');
			rot1 = true;
		}
	});




	var blur1 = true;
	$('.int4').click(function(){
		if(blur1){
			$('.letter').css('filter', 'blur(10px)');
			$('.l04').css('filter', 'blur(0px)');
			blur1 = false;
		}
		else {
			$('.letter').css('filter', 'blur(0px)');
			$('.l04').css('filter', 'blur(0px)');
			blur1 = true;
		}
	});





	$('.l05').click(function(){
		$(this).css('padding-left', '100px');
	});




	var purple = false;
	$('.l06').click(function(){
		if(purple){
			$('.tb').css('background-color', 'black');
			purple = false;
		}
		else {
			$('.tb').css('background-color', 'purple');
			purple = true;
		}
	});



	var squashed = false;
	var margins = ['22.3px', '22.3px', '31px', '31px', '40px', '40px', '52px', '52px', '64px', '77px', '91px', '108px', '108px', '129px', '129px', '152px', '152px'];
	$('.l07').click(function(){
		console.log('7th ' + margins);

		if(squashed){
			for(var i = 0; i < margins.length; i++){
				var select = $('.l07').children().eq(i);
				$(select).css('margin-top', margins[i]);
			}
			squashed = false;
		}
		else {
			$('.int7').css('margin-top', '0px');
			squashed = true;
		}
	});



	$('.int8').click(function(){
		$(this).css('display', 'none');
	});








	var fadeOrder = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];


	function randomize(input) {
		var thisArray = input.length, tempValue, random;

		while (0 !== thisArray) {
			random = Math.floor(Math.random() * thisArray);
			thisArray -= 1;

			tempValue = input[thisArray];
			input[thisArray] = input[random];
			input[random] = tempValue;
		}
		return input;
	}


	var faded = false;
	var fadeArray = randomize(fadeOrder);


	$('.int9').click(function(){
		var testNum = 0;

		function removeThem(){
			setTimeout(function(){
				if(testNum < fadeArray.length-1){
				
					var num = fadeArray[testNum];
					var select = $('.l09').children().eq(num);
					$(select).css('display', 'none');
					removeThem();
					++ testNum;
				}
			}, 100);
		}	


		if(faded){
			$('.int9').css('display', 'block');
			faded = false;
		}
		else {
			removeThem();
			faded = true;
		}

	});






	$('.int10').click(function(){
		$('.int10').css('width', '100px');
	});


	var wide = false;
	$('.int11').click(function(){
		if(wide){
			$('.int11').css('display', 'none');
			wide = false;
		}
		else {
			$('.int11').css('margin-left', '-700px');
			$('.int11').css('width', '1400px');
			wide = true;
		}
	});


	$('.int12').click(function(){
		$('.int12').css('height', '5px');
		$('.int12').css('border-radius', '3px');
	});



	$('.int13').click(function(){
		$(this).css('margin-top', '-50px');
		$(this).css('border-radius', '0px');
	});






	var blackBack = false;
	$('.int14').click(function(){
		if(blackBack){
			$('.letter').css('background-color', 'white');
			$('.tb').css('background-color', 'black');
			blackBack = false;
		}

		else {
			$('.letter').css('background-color', 'black');
			$('.tb').css('background-color', 'white');
			blackBack = true;
		}

	});





	$('.int16').click(function(){
		$('.int16').css('opacity', '0');
	});


	var middle = false;
	$('.int17').click(function(){

		if(middle){
			for(var i = 0; i < margins.length; i++){
				var select = $('.l17').children().eq(i);
				$(select).css('margin-top', margins[i]);
			}
			middle = false;
		}
		else {
			$('.int17').css('margin-top', '50px');
			$('.int17').css('height', '10px');
			$('.int17').css('border-radius', '10px');
			middle = true;
		}
	});



	/*$('.int15').click(function(){
		if(blackBack){
			$('.letter').css('background-color', 'white');
			$('.tb').css('background-color', 'black');
			blackBack = false;
		}

		else {
			$('.letter').css('background-color', 'black');
			$('.tb').css('background-color', 'white');
			blackBack = true;
		}

	});*/


	var rounded = true;
	$('.int19').click(function(){
		if(rounded){
			$('.int19').css('border-radius', '0px');
			rounded = false;
		}
		else {
			$('.int19').css('border-radius', '7px');
			rounded = true;
		}
	});


	var flipped = false;
	$('.int23').click(function(){
		if(flipped){
			$('.letter').css('transform', 'rotate(0deg)');
			flipped = false;
		}
		else {
			$('.letter').css('transform', 'rotate(90deg)');
			flipped = true;
		}
	});


	var thin = false;
	$('.int24').click(function(){
		if(thin) {
			$('.int24').removeClass('min');
			thin = false;
		}
		else {
			$('.int24').addClass('min');
			thin = true;
		}
	});






	var grow = false;
	$('.int25').click(function(){
		if(grow){
			$('.int25').css('border-width', '0px');
			$('.int25').css('border-style', 'solid');
			$('.int25').css('border-color', 'black');
			$('.int25').css('border-radius', '5px');
			grow = false;
		}
		else {
			$('.int25').css('border-width', '5px');
			$('.int25').css('border-style', 'solid');
			$('.int25').css('border-color', 'black');
			$('.int25').css('border-radius', '15px');
			grow = true;
		}
		
	});






	var grow2 = false;
	$('.int26').click(function(){
		if(grow2){
			$('.int26').css('border-width', '0px');
			$('.int26').css('border-style', 'solid');
			$('.int26').css('border-color', 'black');
			$('.int26').css('border-radius', '5px');
			grow2 = false;
		}
		else {
			$('.int26').css('border-width', '3px');
			$('.int26').css('border-style', 'solid');
			$('.int26').css('border-color', 'white');
			$('.int26').css('border-radius', '15px');
			grow2 = true;
		}
		
	});






	var grow3 = false;
	$('.int27').click(function(){
		if(grow3){
			$('.int27').css('border-width', '0px');
			$('.int27').css('border-style', 'solid');
			$('.int27').css('border-color', 'black');
			$('.int27').css('border-radius', '5px');
			grow3 = false;
		}
		else {
			$('.int27').css('border-width', '5px');
			$('.int27').css('border-style', 'solid');
			$('.int27').css('border-color', 'white');
			$('.int27').css('border-radius', '15px');
			grow3 = true;
		}
		
	});








	var squared = false;
	$('.int28').click(function(){
		if(squared){
			$('.int28').css('height', '6px');
			$('.int28').css('border-radius', '2px');
			squared = false;
		}
		else {
			$('.int28').css('height', '40px');
			$('.int28').css('border-radius', '0px');
			squared = true;
		}
	});





	$('.int29').click(function(){
		$('.int29').removeClass('int29spin');
		setTimeout(function(){
			$('.int29').addClass('int29spin');
		}, 300);
	});





	$('.int30').click(function(){
		$('.int30').removeClass('thickSpins');
		setTimeout(function(){
			$('.int30').addClass('thickSpins');
		}, 200);
	});



	var wind = $( window ).width();
	var windH = $( window ).height();

	wind = wind-100;

	$('.int31').click(function(){
		$('.letter').removeClass('allSpin');
		setTimeout(function(){
			$('.letter').addClass('allSpin');
			setTimeout(openPage, 800);
		}, 200);

	});


	function openPage(){
		$('.resizeIt').css('display', 'block');
		setTimeout(del, 100);

		function del() {
			$('.resizeIt').css('display', 'none');
		}
	}




	$('.int33').click(function(){
		$('.int33').css('background-color', 'black');
		$('.int33').removeClass('shift');
		setTimeout(function(){
			$('.int33').addClass('shift');
		}, 200);

	});


	var blackedYet = false; 
	$('.int34').click(function(){
		if(blackedYet){
			$('.letter').removeClass('blacked');
			blackedYet = false;
		}
		else {
			$('.letter').addClass('blacked');
			blackedYet = true;
		}

	});



	$('.int35').click(function(){
		$('.tb').removeClass('color-pulse');
		setTimeout(function(){
			$('.tb').addClass('color-pulse');
		}, 200);

	});


	var spinny = false;

	$('.int36').click(function(){
		console.log('shiz');
		$('body').css( 'cursor', 'progress' );
		$('.int36').css( 'cursor', 'progress' );
		spinny = true;
	});




	$('body').click(function(){
		setTimeout(function(){
			if(spinny){
				console.log('cleared');
				$('body').css( 'cursor', 'default' );
				$('.int36').css( 'cursor', 'pointer' );
				spinny = false;
			}
		}, 3000);
	});


	var darkness = false;
	$('.int37').click(function(){
		if(darkness){
			$('body').css('background-color', 'white');
			$('.letter').css('background-color', 'white');
			$('.tb').css('background-color', 'black');
			darkness = false;
		}else {
			$('body').css('background-color', 'black');
			$('.letter').css('background-color', 'black');
			$('.tb').css('background-color', 'white');
			darkness = true;
		}
	});


	$(".int40").attr("href", "other-page.html");


	$('.int41').click(function(){
		$('.circ').addClass('c-bigger');

		setTimeout(removeCirc, 900);

		function removeCirc(){
			$('.circ').removeClass('c-bigger');
		}
	});




	$('.int42').click(function(){
		$('.circ2').addClass('c-bigger2');

		setTimeout(removeCirc, 1000);

		function removeCirc(){
			$('.circ2').removeClass('c-bigger2');
		}
	});





	$('.int44').click(function(){
		$('.int44').addClass('dotted');
		setTimeout(function(){
			$('.int44').removeClass('dotted');
		}, 500);

	});



	var ridged = false; 
	$('.int45').click(function(){
		if(ridged){
			$('.int45').removeClass('ridgy');
			ridged = false;
		}
		else {
			$('.int45').addClass('ridgy');
			ridged = true;
		}

	});



	var bigeth = false;
	$('.int46').click(function(){
		if(bigeth){
			$('.tb').removeClass('bigbig');
			bigeth = false;
		}
		else {
			$('.tb').addClass('bigbig');
			$('.int46').removeClass('bigbig');
			bigeth = true;
		}
	});



	$('.int47').click(function(){
		$('.int47').css('display', 'none');
	});

/*
	$('.l48').mouseout(function(){
		setTimeout(resetIt, 1000);

		function resetIt() {
			console.log('fire');
			$('int48').css('display', 'block');
		}
	});

*/

	
	$('.l49').click(function(){
		$(this).css('background-color', 'none');
		$(this).css('transform', 'scaleY(2)');
	});

	
	$('.int50').click(function(){
		console.log('workin');
		$('.int50').css('margin-left', '10000px');
	});


	var thinTrans = false;
	$('.int51').click(function(){
		if(thinTrans){
			$('.int51').css('border-color', 'none');
			$('.int51').css('background-color', 'black');
			$('.int51').css('border-width', '0px');
			thinTrans = false;
		}
		else {
			$('.int51').css('border-color', 'black');
			$('.int51').css('background-color', 'white');
			$('.int51').css('border-width', '1px');
			thinTrans = true;
		}
	});



	$('.int52').click(function(){

		$('.int52').css('background-color', 'lightgreen');
		$('.int52').css('border-width', '8px');
		$('.int52').css('border-style', 'dashed');
		$('.int52').css('border-color', 'red');

	});





	var addWhite = false;
	$('.int53').click(function(){
		
		if(addWhite){
			$('.tb').removeClass('white');
			addWhite = false;
		}
		else {
			$('.tb').addClass('white');
			$('.int53').removeClass('white');
			addWhite = true;
		}


	});



	var ninety = false;
	$('.int55').click(function(){
		if(ninety){
			$('.int55').css('transform', 'rotate(0deg)');
			ninety = false;
		}
		else {
			$('.int55').css('transform', 'rotate(90deg)');
			ninety = true;
		}
	});



	var thicc = false;
	$('.int56').click(function(){
		if(thicc){
			$('.int56').removeClass('thicc');
			thicc = false;
		}
		else {
			$('.int56').addClass('thicc');
			thicc = true;
		}
	});


	var spindly = false;
	$('.int57').click(function(){
		if(spindly){
			$('.tb').removeClass('spindly');
			spindly = false;
		}
		else {
			$('.tb').addClass('spindly');
			spindly = true;
		}
	});






	var vDark = false;
	$('.int58').click(function(){
		if(vDark){
			$('body').css('background-color', 'white');
			$('.int58').css('background-color', 'black');
			$('.letter').css('border-color','white');
			vDark = false;
		}
		else {
			$('body').css('background-color', 'black');
			$('.int58').css('background-color', 'white');
			$('.letter').css('border-color','black');
			vDark = true;
		}
	});



	$('.int59').click(function(){
		$('.l59').children().eq(0).css('margin-left', '-10000px');
		$('.l59').children().eq(1).css('margin-left', '-10000px');
		$('.l59').children().eq(2).css('margin-left', '-10000px');
		$('.l59').children().eq(3).css('margin-left', '-10000px');
		$('.l59').children().eq(4).css('margin-left', '-10000px');
		$('.l59').children().eq(5).css('margin-left', '-10000px');
		$('.l59').children().eq(6).css('margin-left', '-10000px');
		$('.l59').children().eq(7).css('margin-left', '-10000px');
		$('.l59').children().eq(8).css('margin-left', '-10000px');


		$('.l59').children().eq(9).css('margin-left', '10000px');
		$('.l59').children().eq(10).css('margin-left', '10000px');
		$('.l59').children().eq(11).css('margin-left', '10000px');
		$('.l59').children().eq(12).css('margin-left', '10000px');
		$('.l59').children().eq(13).css('margin-left', '10000px');
		$('.l59').children().eq(14).css('margin-left', '10000px');
		$('.l59').children().eq(15).css('margin-left', '10000px');
		$('.l59').children().eq(16).css('margin-left', '10000px');

	});



	$('.int60').click(function(){
		$('.l60').children().eq(0).css('margin-left', '-10000px');
		$('.l60').children().eq(1).css('margin-left', '10000px');
		$('.l60').children().eq(2).css('margin-left', '-10000px');
		$('.l60').children().eq(3).css('margin-left', '10000px');
		$('.l60').children().eq(4).css('margin-left', '-10000px');
		$('.l60').children().eq(5).css('margin-left', '10000px');
		$('.l60').children().eq(6).css('margin-left', '-10000px');
		$('.l60').children().eq(7).css('margin-left', '10000px');
		$('.l60').children().eq(8).css('margin-left', '-10000px');


		$('.l60').children().eq(9).css('margin-left', '10000px');
		$('.l60').children().eq(10).css('margin-left', '-10000px');
		$('.l60').children().eq(11).css('margin-left', '10000px');
		$('.l60').children().eq(12).css('margin-left', '-10000px');
		$('.l60').children().eq(13).css('margin-left', '10000px');
		$('.l60').children().eq(14).css('margin-left', '-10000px');
		$('.l60').children().eq(15).css('margin-left', '10000px');
		$('.l60').children().eq(16).css('margin-left', '-10000px');

	});



	var edgy = false;
	$('.int61').click(function(){
		if(edgy){
			$('.tb').removeClass('moveFar');
			edgy = false;
		}
		else {
			$('.tb').addClass('moveFar');
			$('.int61').removeClass('moveFar');
			edgy = true;
		}
	});




	var fd = false;
	$('.int63').click(function(){
		if(fd){
			$('.tb').removeClass('dim');
			fd = false;
		}
		else {
			$('.tb').addClass('dim');
			$('.int63').removeClass('dim');
			fd = true;
		}
	});




	var warpp = false;
	$('.int64').click(function(){
		if(warpp){
			$('.tb').removeClass('warpp');
			warpp = false;
		}
		else {
			$('.tb').addClass('warpp');
			$('.int64').removeClass('warpp');
			warpp = true;
		}
	});



	var warpp = false;
	$('.int64').click(function(){
		if(warpp){
			$('.tb').removeClass('warpp');
			warpp = false;
		}
		else {
			$('.tb').addClass('warpp');
			$('.int64').removeClass('warpp');
			warpp = true;
		}
	});







	$('.int65').click(function(){
		setTimeout(function(){
			$('.int65').addClass('wiide');
		}, 300);

		setTimeout(shutIt, 800);

		function shutIt (){
			$('.int65').removeClass('wiide');
		}

	});
	






	$('.int66').click(function(){
		setTimeout(function(){
			$('.tb').addClass('wiide');
			$('.int66').removeClass('wiide');
		}, 300);

		setTimeout(shutIt, 800);

		function shutIt (){
			$('.tb').removeClass('wiide');
		}

	});




	$('.int67').click(function(){
		setTimeout(function(){
			$('.int67').addClass('shad');
			
		}, 300);

		setTimeout(shutIt, 1500);

		function shutIt (){
			$('.int67').removeClass('shad');
		}

	});




	$('.int68').click(function(){
		setTimeout(function(){
			$('.tb').addClass('shad2');
			$('.int68').removeClass('shad2');
			
		}, 300);

		setTimeout(shutIt, 1500);

		function shutIt (){
			$('.tb').removeClass('shad2');
		}

	});




	$('.int69').click(function(){
		$('.int69').css('border-width', '5px');
		$('.int69').css('border-color', 'white');
		$('.int69').css('border-style', 'solid');
	});



	$('.int72').click(function(){
		$('.int72').css('border-width', '100px');
		$('.int72').css('border-color', 'red');
		$('.int72').css('border-style', 'solid');
		$('.int72').css('box-sizing', 'border-box');
	});


	$('.int73').click(function(){
		$('.int73').css('margin-top', '-40000px');

	});


	$('.int74').click(function(){
		$('.int74').css('margin-top', '40000px');

	});


	var tiny = false;
	$('.int75').click(function(){
		if(tiny){
			$('.int75').css('transform', 'scale(1)');
			tiny = false;
		}

		else {
			$('.int75').css('transform', 'scale(0.2)');
			tiny = true;
		}


	});





















});
