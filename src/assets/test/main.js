(function ($) {
        
         $("#filter_keyword").keyup(function () {
        $.ajax({
            type: "POST",
            url: "../../search/readCountry.php",
            data: 'keyword=' + $(this).val(),
            beforeSend: function () {
                $("#filter_keyword").css("background", "#FFF url(LoaderIcon.gif) no-repeat 165px");
            },
            success: function (data) {
                $("#suggesstion-box").show();
                $("#suggesstion-box").html(data);
                $("#filter_keyword").css("background", "#FFF");
            }
        });
    });
    
    
                
	// jQuery code is in here
	$(function () {
		$('.menu-slide').click(function () {
			$('#wrapper').toggleClass('active');
			$('#wrapper').toggleClass('sub-manu');
		});
	});
	
	

   
        
        

	console.log("outer");



	$(document).on("click", ".shre-this-audio", function () {
		console.log("clicked+1");
		var audioid = $(this).attr("song-id");
		console.log('audio-share-fm.php?recId=' + audioid);
		$.featherlight({
			iframe: 'audio-share-fm.php?recId=' + audioid,
			loading: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>',
			iframeMaxWidth: '100%',
			iframeWidth: 571,
			iframeHeight: 300
		});
	});

	$(document).on("click", ".shre-this-video", function () {
		console.log("clicked+1");
		var videoid = $(this).attr("song-id");
		console.log('video-share-fm.php?recId=' + videoid);
		$.featherlight({
			iframe: 'video-share-fm.php?recId=' + videoid,
			loading: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>',
			iframeMaxWidth: '100%',
			iframeWidth: 571,
			iframeHeight: 300
		});
	});

	

	$(document).on("click", ".shre-this-artist", function () {
		console.log("clicked+1");
		var artId = $(this).attr("artist-id");
		console.log('artist-share-fm.php?artId=' + artId);
		$.featherlight({
			iframe: 'artist-share-fm.php?artId=' + artId,
			loading: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>',
			iframeMaxWidth: '100%',
			iframeWidth: 571,
			iframeHeight: 300
		});
	});




	        closeFeatherlight = function() {

						setTimeout(function () {
							var current = $.featherlight.current();
							current.close();
							console.log('HERE!');
							
									}, 2000);


					};




	$('#playlist-save').click(function(){
		console.log("Save Play list btn Clicked");
		var value = new Array();
		var len = myPlaylist.playlist.length;
		console.log(len);
		var islogged = $("#paramIsUserLogged").val();
		var loggedid = $("#paramIdUserLogged").val();

		if (loggedid == 0) {

			alert('Please login to save playlist.');

		} else {
			if (len == 0) {
				alert("Please add songs to your playlist");
			} else {

				for (var i = 0; i < len; i++) {
					value[i] = myPlaylist.playlist[i]['id'];
				}
				console.log('save_playlist_pop.php?songId=' + value + '&cusid=' + loggedid);
				$.featherlight({
					iframe: 'save_playlist_pop.php?songId=' + value + '&cusid=' + loggedid,
					loading: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>',
					iframeMaxWidth: '100%',
					iframeWidth: 571,
					iframeHeight: 180
				});




				  // $('#playlistSave').modal();
					// $('#saveNewPlaylist').click(function (){
					// 	$.featherlight({
					// 		iframe: 'save_playlist_pop.php?songId=' + value + '&cusid=' + loggedid,
					// 		loading: '<div class="spinner"><div class="cube1"></div><div class="cube2"></div></div>',
					// 		iframeMaxWidth: '100%',
					// 		iframeWidth: 571,
					// 		iframeHeight: 180
					// 	});
					// });

			}
		}
	});


	/*	$(document).ready(function () {
			if ($(this).width() < 767) {
				$('#wrapper').removeClass('active');
				$('#wrapper').addClass('sub-manu');
				$('#media-player').addClass('media-player-hidden');
				$('.player-pop-up span').toggleClass('rotate-180');

			} else {

				$('#media-player').removeClass('media-player-hidden');
			}
		});*/
/*	see more btn*/

	var seeBtn = $('.see-more')
	seeBtn.on('click', function () {
		$('.profile-more').slideToggle();
		$(this).text(function(i, v){
               return v === 'HIDDEN TEXT' ? 'SEE MORE' : 'HIDDEN TEXT'
            })
	});
	$('.player-pop-up').click(function () {
		$('.player-pop-up span').toggleClass('rotate-180');
		$('#media-player').toggleClass('media-player-hidden');
	});
	$('.volume-btn').mouseover(function () {
		$('.jp-volume-controls').slideToggle();
	});

	$('.jp-volume-controls').mouseleave(function () {
		$('.jp-volume-controls').slideToggle();
	});
	$('.play-list-btn>a').click(function () {
		$('.jp-playlist').slideToggle();
	});
	$('#playlist-close').click(function () {
		console.log("playlist close success");
		$('.jp-playlist').slideToggle();
	});

	var searchArea = $('.search-area')
	$('html').click(function () {
		searchArea.slideUp(500);
	});
	$('.search-btn').click(function (e) {
		e.stopPropagation();
		searchArea.slideToggle(500);

	});
	searchArea.click(function (e) {
		e.stopPropagation();
	});
    
     

})(jQuery_1_11);

var selectCountry = function(val) {
    console.log(val);
    jQuery("#filter_keyword").val(val);
    jQuery("#suggesstion-box").hide();
    //jQuery( "#xyz" ).submit();
    location = 'search/' + encodeURIComponent(jQuery('#filter_keyword').val());
}
/*
function selectCountry(val) {
     
        $("#filter_keyword").val(val);
        $("#suggesstion-box").hide();
    }
*/



    
    

