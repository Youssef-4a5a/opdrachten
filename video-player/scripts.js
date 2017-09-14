//var smallButtons = document.querySelectorAll('button.player__button');
//var slider = document.querySelectorAll('button.player__slider');
//var play = document.querySelectorAll('#play');

//play
document.querySelector('#play').addEventListener("click", playbutton);

var play = false;

function playbutton() {
    if (play === false) {
        video.play();
        play = true;
    } else if (play === true) {
        video.pause();
        play = false;
    }
}

//speed
document.querySelector('#speed').addEventListener("change", speed);

function speed() {
    var playbackrate = document.getElementById("speed").value;
    video.playbackRate = playbackrate;
}

//skip
document.querySelector('#skipBack').addEventListener("click", skipBack);
document.querySelector('#skipForward').addEventListener("click", skipForward);

function skipBack() {
    video.currentTime -= 10;
}

function skipForward() {
    video.currentTime += 25;
}

//volume
document.querySelector('#volume').addEventListener("change", volume);

function volume() {
    var setVolume = document.getElementById("volume").value;
    video.volume = setVolume;
}

//fullscreen
document.querySelector('#video').addEventListener("dblclick", fullScreen);

function fullScreen() {
    var i = document.getElementById("player");

// go full-screen
    if (i.requestFullscreen) {
        i.requestFullscreen();
    } else if (i.webkitRequestFullscreen) {
        i.webkitRequestFullscreen();
    } else if (i.mozRequestFullScreen) {
        i.mozRequestFullScreen();
    } else if (i.msRequestFullscreen) {
        i.msRequestFullscreen();
    }
}

//skip
document.querySelector("#progress").addEventListener("click", SkipTo);

function SkipTo()
{
    var Player = document.querySelector("#player");
    var Filled = document.querySelector("#progress__filled"); 

    var position = window.event.clientX;
    var Offset = (window.innerWidth - document.getElementById("progress").offsetWidth) / 2;
    var progress = 100 / (window.innerWidth / (position + Offset));
    Filled.style.flexBasis = progress + "%";
    Player.currentTime = (Player.duration / 100) * progress;

}