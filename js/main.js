var playlist = new playlist();
var song1 = new song("Love_Me","Justin_Bieber","3:13","Music/Love_Me.mp3");
var song2 = new song("Love Story","Taylor swift","3:56","Music/Love Story.mp3");
var song3 = new song("Let Her Go","Passanger","3:02","Music/Let Her Go.mp3");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);

var playlistElement = document.getElementById("playlist");
playlist.renderElement(playlistElement);

var prev = document.getElementById("prev");
prev.onclick = function(){
    stop.innerHTML = '<i class="fas fa-pause"></i>';
    playlist.prev();
    playlist.renderElement(playlistElement);
    var playMusic = document.getElementById("current-music");
    playMusic.play();
}
var next = document.getElementById("next");
next.onclick = function(){
    stop.innerHTML = '<i class="fas fa-pause"></i>';
    playlist.next();
    playlist.renderElement(playlistElement);
    var playMusic = document.getElementById("current-music");
    playMusic.play();
}
var stop = document.getElementById("stop");
stop.onclick = function(){
    
    if(playlist.song[playlist.nowPlayingIndex].isPlaying){
        stop.innerHTML = '<i class="fas fa-play"></i>';
        playlist.stop();
        playlist.renderElement(playlistElement);
    }else{
        stop.innerHTML = '<i class="fas fa-pause"></i>';
        playlist.pplay();
        playlist.renderElement(playlistElement);
        var playMusic = document.getElementById("current-music");
        playMusic.play();
    }
    
}
