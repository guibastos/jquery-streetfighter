$(document).ready(function() {
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
			})
		.mouseup(function() {
			$('.ryu-throwing').hide();
			$('.ryu-still').hide();
			$('.ryu-ready').show();

			$('.ryu-throwing').hide();
		});
	
	$(document)
		.keydown(function(x){
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

