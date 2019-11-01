var playlist = new playlist();
var song1 = new song("Nobody Compares","One Direction","3:33","Music/Nobody Compares..mp3");
var song2 = new song("One Step Closer","Linking Park","2:48","Music/One Step Closer.mp3");
var song3 = new song("Steal My Girl","One Direction","3:48","Music/Steal My Girl.mp3");
var song4 = new song("Until it's Gone","Linking Park","3:53","Music/Until It's Gone..mp3");

playlist.add(song1);
playlist.add(song2);
playlist.add(song3);
playlist.add(song4);

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
