  var songNum=1;
  var audio = new Audio("http://www.lynnemusic.com/samples/spirit-voices-quick-demo.mp3");
 $( document ).ready(function() {
    console.log( "ready!" );

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
    }
    function stop()
    {
        audio.pause();
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
          audio.play
          console.log("was 1");
        }
        else if (songNum==2)
        {
          audio.pause();
          audio = new Audio("http://www.sounds.beachware.com/2illionzayp3may/joptlz/CHIMES.mp3");
          songNum=3;
          audio.play
          console.log("was 2");
        }
        else if(songNum==3)
        {
          audio.pause();
          audio = new Audio("http://www.nasa.gov/mp3/640392main_STS-26_Liftoff.mp3");
          songNum=1;
          audio.play
          console.log("was 3");
        }
    }
    function prev()
    {
        if (songNum==1)
        {
          audio.pause();
          audio = new Audio("http://www.nasa.gov/mp3/640392main_STS-26_Liftoff.mp3");
          songNum=3;
          audio.play
        }
        if (songNum==2)
        {
          audio.pause();
          audio = new Audio("http://www.lynnemusic.com/samples/spirit-voices-quick-demo.mp3");
          songNum=1;
          audio.play
        }
        if(songNum==3)
        {
          audio.pause();
          audio = new Audio("http://www.sounds.beachware.com/2illionzayp3may/joptlz/CHIMES.mp3");
          songNum=2;
          audio.play
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