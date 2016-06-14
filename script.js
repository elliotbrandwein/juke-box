  var songNum=1;
  var audio = new Audio("http://www.nasa.gov/mp3/640392main_STS-26_Liftoff.mp3");
 $( document ).ready(function() {
    updateTime();
    $("#songNum").html('<h1>'+ "playing song 1 of 3"+'</h1>');

});
    function input()
    {
        //$("#details").html('<h1>'+audio.audioTracks+" "+ audio.currentTime+'</h1>');
        timer();
        var command =$('input[name=t]').val();
        command.toLowerCase();
        if(command== "stop") stop();
        if(command== "play") play();
        if(command== "next") next();
        if(command== "prev") prev();
        return false;
    }
    function stop()
    {
        audio.pause();
        // stop resets the song, it doesn't pause it
        audio.load();
    }
    function play()
    {
        audio.play();
    }
    function next()
    {
        if (songNum==1)
        {
          audio.pause();
          audio = new Audio("http://www.lynnemusic.com/samples/spirit-voices-quick-demo.mp3");
          songNum=2;
          audio.load();
          audio.play();
          $("#songNum").html('<h1>'+ "playing song 2 of 3"+'</h1>');
        }
        else if (songNum==2)
        {
          audio.pause();
          audio = new Audio("http://www.sounds.beachware.com/2illionzayp3may/joptlz/CHIMES.mp3");
          songNum=3;
          audio.load();
          audio.play();
           $("#songNum").html('<h1>'+ "playing song 3 of 3"+'</h1>');
        }
        else if(songNum==3)
        {
          audio.pause();
          audio = new Audio("http://www.nasa.gov/mp3/640392main_STS-26_Liftoff.mp3");
          songNum=1;
          audio.load();
          audio.play();
           $("#songNum").html('<h1>'+ "playing song 1 of 3"+'</h1>');
        }
    }
    function prev()
    {
        if (songNum==1)
        {
          audio.pause();
          audio = new Audio("http://www.sounds.beachware.com/2illionzayp3may/joptlz/CHIMES.mp3");
          songNum=3;
          audio.load();
          audio.play();
          $("#songNum").html('<h1>'+ "playing song 3 of 3"+'</h1>');
        }
        if (songNum==2)
        {
          audio.pause();
          audio = new Audio("http://www.nasa.gov/mp3/640392main_STS-26_Liftoff.mp3");
          songNum=1;
          audio.load();
          audio.play();
          $("#songNum").html('<h1>'+ "playing song 1 of 3"+'</h1>');
        }
        if(songNum==3)
        {
          audio.pause();
          audio = new Audio("http://www.lynnemusic.com/samples/spirit-voices-quick-demo.mp3");
          songNum=2;
          audio.load();
          audio.play();
          $("#songNum").html('<h1>'+ "playing song 2 of 3"+'</h1>');
        }
    }

function timer()
{
    setInterval( function()
    { 
      if(audio.ended==false) updateTime() }, 100);
}
  function updateTime() {
    var time =  audio.currentTime.toFixed(2);
    $("#details").html('<h1>'+ time+'</h1>');
  }