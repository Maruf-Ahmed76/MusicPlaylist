function song(title,artist,duration){
    this.title = title;
    this.artist = artist;
    this.duration = duration;
    this.isPlaying = false;
}
song.prototype.play = function(){
    this.isPlaying = true;
}
song.prototype.stop = function(){
    this.isPlaying = false;
}
song.prototype.toHTML = function(){
    var htmlSting = '<li';
    if(this.isPlaying == true){
        htmlSting += ' class="music current list-group-item border-0 d-flex flex-row justify-content-between"';
    }else{
        htmlSting += ' class="music list-group-item border-0 d-flex flex-row justify-content-between"';
    }
    htmlSting += '>';
    htmlSting += '<p class="text-info text-left">';
    htmlSting += this.title;
    htmlSting += '</p>';
    htmlSting += '<p class="text-dark text-left">';
    htmlSting += this.artist;
    htmlSting += '</p>';
    htmlSting += '<p class="text-danger text-left">';
    htmlSting += this.duration;
    htmlSting+= '</p></li>';
    return htmlSting;
}