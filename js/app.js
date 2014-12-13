$(document).ready(function() {
	//creating inState variables
	var inState = {
		haouken: false,
		cool: false
	};
	//end of creating inState variables	
	$('.ryu')
		.mouseenter(function() {
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();
			$('.hadouken').hide()
			})

		.mouseleave(function() {
			$('.ryu-ready').hide();
			$('.ryu-still').show();
			$('.ryu-throwing').hide();
			$('.hadouken').hide()
			})

		.mousedown(function() {
			//making cool false
			if (inState.cool) return
				inState.hadouken = true;
			//end of making cool false
			playHadouken();
			$('.ryu-ready').hide();
			$('.ryu-still').hide();
			$('.ryu-throwing').show();
			$('.hadouken').finish().show()
				.animate(
					{'left': '300px'},
					500,
					function() {
					$(this).hide();
					$(this).css('left', '-212px');
					}
					);
				//making hadouken false
				inState.hadouken = false;
			})

		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').show();
			$('.ryu-throwing').hide();					
			//making hadouken false
			inState.hadouken = false;

		});
	
	$(document)
		.keydown(function(x){
			//make cool state true
			if(inState.hadouken) return
			inState.cool = true;
			//end of making cool state true
			var code = x.keyCode || e.which;
			if(code == '88'){
				playDireStraits();
				$('.ryu-still').hide();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').show();
				x.stopPropagation();
				
				}
			})
		.keyup(function(x){
			var code = x.keyCode || e.which;
			if(code == '88'){
				pauseDireStraits();
				$('.ryu-still').show();
				$('.ryu-ready').hide();
				$('.ryu-throwing').hide();
				$('.ryu-cool').hide();
				x.stopPropagation();
				//making cool false
				inState.cool = false;
				//end of making cool false
				}
			})
});
function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}

function playDireStraits () {
  $('#relax-sound')[0].volume = 0.5;
  // $('#relax-sound')[0].load();
  // $('#relax-sound')[0].prop('currentTime', 0);
  $('#relax-sound')[0].play();
}

function pauseDireStraits () {
  $('#relax-sound')[0].pause();
  $('#relax-sound')[0].load();
  // $('#relax-sound').Stop;
}

