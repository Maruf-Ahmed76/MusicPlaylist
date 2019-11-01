function playlist(){
    this.song = [];
    this.nowPlayingIndex = 0;
}
playlist.prototype.add = function(song){
    this.song.push(song);
}
playlist.prototype.play = function(){
    var currentSong = this.song[this.nowPlayingIndex];
    currentSong.play();
}
playlist.prototype.stop = function(){
    var currentSong = this.song[this.nowPlayingIndex];
    currentSong.stop();
}
playlist.prototype.next = function(){
    this.stop();
    this.nowPlayingIndex++;
    if(this.nowPlayingIndex === this.song.length){
        this.nowPlayingIndex = 0;
    }
    this.play();
}
playlist.prototype.prev = function(){
    this.stop();
    this.nowPlayingIndex--;
    if(this.nowPlayingIndex < 0){
        this.nowPlayingIndex = this.song.length-1;
    }
    this.play();
}
playlist.prototype.renderElement = function(list){
    list.innerHTML = "";
    for(var i = 0; i < this.song.length; i++){
        list.innerHTML += this.song[i].toHTML();
    }
}