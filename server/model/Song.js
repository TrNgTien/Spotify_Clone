'use strict'
module.exports = class SongAttribute{
    constructor(songName, uploadDate, numberOfLikes, duration){
        this.songName = songName;
        this.uploadDate = uploadDate;
        this.numberOfLikes = numberOfLikes;
        this.duration = duration;
    }
}