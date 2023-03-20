function get_playlist(){ }
var clickstat=0;

$(document).ready(function()
{
var cssSelector = { jPlayer: "#jplayer_N", cssSelectorAncestor: "#jp_container_N" };
var playlist = get_playlist();
var options = { 
wfPath: "http://www.jplayer.org/latest/js/Jplayer.swf",
    supplied: "mp3",
    wmode: "window",
    smoothPlayBar: true,
    keyEnabled: true,
    autoPlay: true,
    volume:0.5,
    audioFullScreen: true,
    solution: "html,flash",
    playlistOptions: {
   // autoPlay: true,
    enableRemoveControls: true
  },
    };
  jplayer_playlist = new jPlayerPlaylist(cssSelector, playlist, options);


  jplayer_playlist.next = function() {
  alert('net clicked');
}
     
    //NEW PART
    $('#jplayer_N').bind($.jPlayer.event.play, function(event) { 
          var current = jplayer_playlist.current; 
          var playlist = jplayer_playlist.playlist 
          $.each(playlist, function(index, object) { 
                  if(index == current) {   
  
  var titlelength = object.title.length;
 
   document.getElementById("playerimg").src = object.poster ;
  //document.getElementById("playerimg").style.backgroundImage = "url('" + object.poster + "')";
  document.getElementById("trredirect").href="track-details.php?trkid="+ object.trackid + "";   
  document.getElementById("addto").href="track-2playlist.php?trackplayid="+ object.trackid + "";
                
    document.getElementById("dialogopenid").innerHTML=object.trackid;         
    var mainuserid=document.getElementById('mainuserid').innerHTML;
    var addcheckid=object.trackid.substring(0,1);
    
    }
      });
});

 $('.jp-playlist').on('click', '.jp-playlist-item', function(){
    // Determine song index if necessary
    var index = $(this).parents('li').index('.jp-playlist li');
    var song = jplayer_playlist.playlist[index];
    
    $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=encodedtrackdetails&myVar1="+song.trackid,
    success: function(data){
       $("#playlist_1").jPlayer("setMedia", { 
                mp3: data.mp3
            }); 
                    //$("#playlist_1").jPlayer("play", 0);
                    $('#jplayer_N').jPlayer('play');

    }
  });
    
  

}); 


 jplayer_playlist.next = function() {
  //alert('net clicked');

  var status = $(this.cssSelector.jPlayer).data("jPlayer").status;
    var index = (this.current + 1 < this.playlist.length) ? this.current + 1 : 0;

                    if(this.loop) {
              

            var song = jplayer_playlist.playlist[index];
                              var addcheckid=song.trackid.substring(0,1);
                if(addcheckid=='T') {

                              $.ajax({
                  type: "GET",
                  dataType: "json",
                  url: "player_ajax.php",
                  data: "type=encodedtrackdetails&myVar1="+song.trackid,
                  success: function(data){
                    $("#jplayer_N").jPlayer("setMedia", { 
                              mp3: data.mp3
                          }); 
                                  //$("#playlist_1").jPlayer("play", 0);
                                  $('#jplayer_N').jPlayer('play');

                  }
                });

                              }

                    if(index === 0 && this.shuffled && this.options.playlistOptions.shuffleOnLoop && this.playlist.length > 1) {
                            this.shuffle(true, true); // playNow
                    } else {
                            this.play(index);
                            if(status.paused){
                                this.pause();
                            }
                           
                    }
            }  else {  

                    if(index > 0) {
                            this.play(index);
                          //  if(status.paused){

                              var song = jplayer_playlist.playlist[index];
                              var addcheckid=song.trackid.substring(0,1);
                if(addcheckid=='T') {

                              $.ajax({
                  type: "GET",
                  dataType: "json",
                  url: "player_ajax.php",
                  data: "type=encodedtrackdetails&myVar1="+song.trackid,
                  success: function(data){
                    //var x = eval('(' + data + ')');
                      //alert(data.trackid);   

                     $("#jplayer_N").jPlayer("setMedia", { 
                              mp3: data.mp3
                          }); 
                                  //$("#playlist_1").jPlayer("play", 0);
                                  $('#jplayer_N').jPlayer('play');

                  }
                });

                              }
                                //this.play();
                         //   }
                     }
                    }        

}


jplayer_playlist.previous = function() {

var status = $(this.cssSelector.jPlayer).data("jPlayer").status;
            var index = (this.current - 1 < this.playlist.length) ? this.current - 1 : 0;

                    if(index >= 0) {
                            this.play(index);
                            //if(status.paused){
                var song = jplayer_playlist.playlist[index];
                              var addcheckid=song.trackid.substring(0,1);
                if(addcheckid=='T') {

                                $.ajax({
                  type: "GET",
                  dataType: "json",
                  url: "player_ajax.php",
                  data: "type=encodedtrackdetails&myVar1="+song.trackid,
                  success: function(data){
                    
                     $("#jplayer_N").jPlayer("setMedia", { 
                              mp3: data.mp3
                          }); 
                                //  $("#playlist_1").jPlayer("play", 0);
                                $('#jplayer_N').jPlayer('play');

                  }
                });

                              }
                        
                    }
           
  }

$(".jp-pause").click(function(event){
          clickstat =1;
    });


$(".jp-play").click(function(event){
 /* if(clickstat==0)
  {


  var index = jplayer_playlist.current;
  var song = jplayer_playlist.playlist[index];
    var addcheckid=song.trackid.substring(0,1);
    
  if(addcheckid=='T') {

     $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=encodedtrackdetails&myVar1="+song.trackid,
    success: function(data){
      $("#jplayer_N").jPlayer("setMedia", { 
                mp3: data.mp3
            }); 
                    //$("#playlist_1").jPlayer("play", 0);
                    $('#jplayer_N').jPlayer('play');

    }
  });

 }

}
 clickstat =0;
 */
    });






$(".jp-jplayer_N").click(function(){
     // $(".down").slideToggle("slow");
    });

$('.jp-next').click(function(event) {

    var index = jplayer_playlist.current;
  var song = jplayer_playlist.playlist[index];
  
    var addcheckid=song.trackid.substring(0,1);
  if(addcheckid=='T') {

     $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=encodedtrackdetails&myVar1="+song.trackid,
    success: function(data){
   
       $("#jplayer_N").jPlayer("setMedia", { 
                mp3: data.mp3
            }); 
                    //$("#playlist_1").jPlayer("play", 0);
                    $('#jplayer_N').jPlayer('play');

    }
  });

 }


});


$('.jp-previous').click(function(event) {

 var index = jplayer_playlist.current;
  var song = jplayer_playlist.playlist[index];

    var addcheckid=song.trackid.substring(0,1);
    
  if(addcheckid=='T') {

     $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=encodedtrackdetails&myVar1="+song.trackid,
    success: function(data){
  
       $("#jplayer_N").jPlayer("setMedia", { 
                mp3: data.mp3
            }); 
                    //$("#playlist_1").jPlayer("play", 0);
                    $('#jplayer_N').jPlayer('play');

    }
  });

 }

})

    
  });
  
  function testlike(obj)
  {
   var myVar=obj;
   
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=like&myVar="+myVar,
    success: function(data){
    printresultlike(data);
    }
});

function printresultlike(data)
{
 
  var showlike = data['ValueA']; 
  var liketype = data['ValueB'];

  if(liketype =='reslike')
  { 
document.getElementById('testlike').innerHTML='<a onClick="clickunlike(this);" href="javascript:void(0)" class="but-unlike" id="'+showlike+'" title="Unlike" rel="Unlike"></a>';  
  }else
  {
document.getElementById('testlike').innerHTML='<a onClick="clicklike(this);" href="javascript:void(0)" class="but-like" id="'+showlike+'" title="Like" rel="Like"></a>';

  }
}
}
  function playrate(obj)
  {
  var myVar=obj;
  
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=rate&myVar="+myVar,
    success: function(data){
        printresult(data);
    }
});

function printresult(data)
{
 
  var showstar = data['ValueA']; 
  var showstaridB = data['ValueB']; 
  
  if(showstaridB =='trackid')
  {
  document.getElementById('playrateres').innerHTML='<div id='+showstar+' class="rate-btn"></div>';
  showraty2(showstar);
  }else
  {
document.getElementById('playrateres').innerHTML='<div id='+showstar+' class="rate-btn-result"></div>';
  showraty(showstar);
  }
}

function showraty(obj){   
$(function() {  

  $('.rate-btn-result').raty({
  half: true ,
    path     : 'images',
    half     : true,
    size     : 19,
    starHalf : 'star-half-big.png',
    starOff  : 'star-off-big.png',
    starOn   : 'star-on-big.png',
    readOnly: true, 
    score: obj
  
});
})
  }
}
  
  function playshare(obj)
  {
  var myVar=obj;
   
   $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=share&myVar="+myVar,
    success: function(data){
        printresultshare(data);
   }
  }); 
  }
    
 function printresultshare(data)
{
    var showshare = data['ValueA']; 
  var obj2 = data['ValueB'];
  var obj3 = data['ValueC'];
  var obj4 = data['ValueD'];
  var obj=showshare;
   
var target="http://www.facebook.com/sharer.php?s=100&p[title]="+obj+"&p[summary]="
+obj+"&p[url]=http://www.odeo.fm/track-details.php?trkid="
+obj+"&p[images][0]="+obj+"";

var ratget2="friends_share.php?share="+obj+"";

var ratget3="https://plus.google.com/share?url==http://www.odeo.fm/track-details.php?trkid="+obj+"";
// var ratget4="http://twitter.com/home?status="+obj+"+"+obj+"";;
var ratget4="https://twitter.com/share?url=http://www.odeo.fm/&text="+obj2+' from  '+obj3 + "&via=odeo&count=none";

   //document.getElementById("ref_fb").href=target; 
   var element = document.getElementById("ref_fb");
   document.getElementById("ref_friend").href=ratget2;
   document.getElementById("ref_gp").href=ratget3;
   document.getElementById("ref_tw").href=ratget4;  
  

   (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// async init once loading is done
window.fbAsyncInit = function() {
  FB.init({appId: 569470159856658, status: true});
}; 
   
  function myFunction() {
  // onclick stuff
   FB.ui({
    method: 'feed',
    link: 'http://www.odeo.fm/track-details.php?trkid='+showshare+'',
    /*picture: 'http://www.odeo.fm/resources/trackimage/'+obj4,*/
    name: 'Track : ' +obj2,
    caption: 'odeo.fm',
    description: 'By : ' +obj3
  });
  
}

element.onclick = myFunction;
        
}

$(document).ready(function() {   
  $( "#custompanel" ).hide();
});

    
  function fromframe(obj)
  {
   var f = document.getElementById('sare2');
  f.src = f.src;
   //alert('Track loaded to Queue')
   if ( $( ".down" ).is( ":hidden" ) ) {
  $(".down").slideToggle("slow");
  }
   
   var myVar=obj;
   $( ".mpPlayer" ).show();
   
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=loadtrack&myVar="+myVar,
    success: function(data){
        addtracktoplayer(data);
    }
});

function addtracktoplayer(data)
{
  
   $(data).each(function() {
       jplayer_playlist.add(data);
    });
   addadvertisement();
  
}
    
}


//NEW ODEO ANGULER2 PLAYER

 $(document).on("click", ".player-add-song", function () {

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://m.odeo.fm/api/tracks/new?token=dc09c9dd3be4edf3b3e06146b01dcd3d",
    //data: "type=loadtracklist&myVar1="+myVar1+"&myVar2="+myVar2,
    success: function(response){
                for (var i = 0; i < response.Tracks.length; i++) {
                        if (response.Tracks[i] != "") {
                            var song = response.Tracks[i];
                            jplayer_playlist.add({
                                id: song.track_id,
                                title: song.title,
                                artist: song.artist_name,
                                //free: true,
                                poster: song.thumb[0],
                                mp3: song.url
                            });
                        }
                    } 
       // addlisttoplayer2(data);
       jplayer_playlist.play(-1);
    }
  });

  //alert('this works');
 /*   var this_ = $(this);
            //  loader('start', this_);
    alert($(this).attr("id"));

            jplayer_playlist.add({
                id: $(this).attr("song-id"),
                title: $(this).attr("songname"),
                artist: $(this).attr("aitist"),
                poster: $(this).attr("poster"),
                free: true,
                mp3: $(this).attr("link")
            });
            jplayer_playlist.play(-1);
            if ($(this).attr("what-to-do") == "Play now") {

                jplayer_playlist.play(-1);
            }
*/
  });




 $(document).on("click", ".add-song-to-queue", function () {

 

  //alert('this works');
   var this_ = $(this);
            //  loader('start', this_);
   // alert($(this).attr("id"));
   // alert($(this).attr("songname"));

    

            jplayer_playlist.add({
                id: $(this).attr("song-id"),
                title: $(this).attr("songname"),
                artist: $(this).attr("artist"),
                poster: $(this).attr("poster"),
                //free: true,
                mp3: $(this).attr("link")
            });
            jplayer_playlist.play(-1);
            if ($(this).attr("what-to-do") == "Play now") {

                jplayer_playlist.play(-1);
            }

  });




//NEW ODEO ANGULER2 PLAYER ENDS




function fromframemore(obj)
{
    
  alert('Album loaded to Queue')
  if ( $( ".down" ).is( ":hidden" ) ) {
  $(".down").slideToggle("slow");
  }
  
  var f = document.getElementById('sare2');
  f.src = f.src;
  
   $( ".mpPlayer" ).show();
    
   var myVar=obj;


   var sngcount=0;
   var myVar2=jplayer_playlist.playlist.length;
    var index = jplayer_playlist.current;
    //alert(song.trackid);

    for (i = 0; i < jplayer_playlist.playlist.length; i++) {
      var song = jplayer_playlist.playlist[i];
          //alert(song.trackid);
          var addcheckid=song.trackid.substring(0,1);
          if(addcheckid=='T') {
              sngcount =sngcount+1;

          }

  }
    alert(sngcount);

   
     $.ajax({
      type: "GET",
      dataType: "json",
      url: "player_ajax.php",
      data: "type=loadalbumqueue&myVar="+myVar+"&sngcount="+sngcount,
      success: function(data){
          addalbumqueue(data);
      }
    });

  function addalbumqueue(data)
  {
    alert('123');
    $.each(data,function(index,value){
              jplayer_playlist.add(value); 
          });
     
  }
    
}
  
  
  function fromframesingle(obj1,obj2)
  {

     var myPlaylist = new jPlayerPlaylist({
    jPlayer: "#jplayer_N",
    cssSelectorAncestor: "#jp_container_N",
    playlistOptions: {
      enableRemoveControls: true,
      autoPlay: true
    },
    swfPath: "js/jPlayer",
    supplied: "webmv, ogv, m4v, oga, mp3",
    smoothPlayBar: true,
    keyEnabled: true,
    audioFullScreen: false
  });
    
   var myVar1=obj1;
   var myVar2=obj2;
   
   
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://m.odeo.fm/api/tracks/new?token=dc09c9dd3be4edf3b3e06146b01dcd3d",
    //data: "type=loadtracklist&myVar1="+myVar1+"&myVar2="+myVar2,
    success: function(response){
                for (var i = 0; i < response.Tracks.length; i++) {
                        if (response.Tracks[i] != "") {
                            var song = response.Tracks[i];
                            myPlaylist.add({
                                id: song.track_id,
                                title: song.title,
                                artist: song.artist_name,
                                //free: true,
                                poster: song.thumb[0],
                                mp3: song.url
                            });
                        }
                    } 
       // addlisttoplayer2(data);
    }
  });
    
  }
  function addlisttoplayer2(data) {
    $(data).each(function() {
    jplayer_playlist.remove();
       jplayer_playlist.setPlaylist(data);
    });
}
  
  
function fromframe2(obj)
{ 
  var f = document.getElementById('sare2');
  f.src = f.src;
  
  $( ".mpPlayer" ).show();
    
   var myVar=obj;
   var sngcount=0;
   
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "player_ajax.php",
        data: "type=loadplaylist&myVar="+myVar+"&sngcount="+sngcount,
        success: function(data){
            addlisttoplayer(data);
        }
    });
  
    function addlisttoplayer(data) {
        $(data).each(function() {
        jplayer_playlist.remove();
           jplayer_playlist.setPlaylist(data);
        });
    } 
}
  
  
  
function fromframelist(obj)
{ 
  //alert('Playlist loaded to Queue')
  if ( $( ".down" ).is( ":hidden" ) ) {
  $(".down").slideToggle("slow");
  }
  
  var f = document.getElementById('sare2');
  f.src = f.src;
  
  $( ".mpPlayer" ).show();
    
  var myVar=obj;
  var sngcount=0;

    var myVar2=jplayer_playlist.playlist.length;
    var index = jplayer_playlist.current;
    //alert(song.trackid);

    for (i = 0; i < jplayer_playlist.playlist.length; i++) {
      var song = jplayer_playlist.playlist[i];
      //alert(song.trackid);
      var addcheckid=song.trackid.substring(0,1);
      if(addcheckid=='T') {
      sngcount =sngcount+1;
        }
    }
    alert(sngcount);
 
    $.ajax({
        type: "GET",
        dataType: "json",
        url: "player_ajax.php",
        data: "type=loadplaylist&myVar="+myVar+"&sngcount="+sngcount,
        success: function(data){
            addlisttoplayerqueue(data);
        }
    });
    
      function addlisttoplayerqueue(data) {        
        $.each(data,function(index,value){
            jplayer_playlist.add(value); 
        });

      }       
}
  
  
  
  
function fromalbum(obj)
{ 
  var f = document.getElementById('sare2');
  f.src = f.src;
  
   $( ".mpPlayer" ).show();
    
   var myVar=obj;
   
   $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=loadalbum&myVar="+myVar,
    success: function(data){
        addalbumtoplayer(data);
    }
  });
  
  function addalbumtoplayer(data) {
      $(data).each(function() {
      jplayer_playlist.remove();
         jplayer_playlist.setPlaylist(data);
      });
  }
    
}




function addadvertisement()
{ 
    alert('this from addadvertisement');
    var sngcount=0;
    var myVar=jplayer_playlist.playlist.length;
    var index = jplayer_playlist.current;
    //alert(song.trackid);

    for(i = 0; i < jplayer_playlist.playlist.length; i++) {
      var song = jplayer_playlist.playlist[i];
          //alert(song.trackid);
          var addcheckid=song.trackid.substring(0,1);
          if(addcheckid=='T') {
              sngcount =sngcount+1;
          }
  }
  alert(sngcount);

  $.ajax({
    type: "GET",
    dataType: "json",
    url: "player_ajax.php",
    data: "type=addadvertisement&myVar="+sngcount,
    success: function(data){
        addadvertisementtrack(data);
    }
  });
  
  function addadvertisementtrack(data) {
    $(data).each(function(index,value) {
    //jplayer_playlist.remove();
        //jplayer_playlist.setPlaylist(data);
        //alert(myVar);
          alert('added');
        jplayer_playlist.add(value); 
      });
   }
}


  
function fromradio(obj)
{
  jplayer_playlist.remove();
     $( ".mpPlayer" ).hide(); 
      $("#sare2").css('visibility', 'visible');
}

 