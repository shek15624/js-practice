let playBtn = document.getElementById('play'),
    pauseBtn = document.getElementById('pause'),
    f10Btn = document.getElementById('f-10'),
    muteBtn = Document.getElementById('mute'),
    b10Btn = document.getElementById('b-10'),
    volumeUp = document.getElementById('volume-up'),
    volumeDown = document.getElementById('volume-down'),
    swapBtn = document.getElementById('swap'),
    fullscreenBtn = document.getElementById('full-screen'),
    downloadBtn = document.getElementById('download')
    video = document.getElementById('main-video');

function play(){
    console.log('play the video', video);
    video.play();
}
function pause(){
    console.log('play the video', video);
    video.pause();
}
function forward(){
    console.log('play the video');
}
function backward(){
    console.log('play the video');
}
function volumeup(){
    console.log('play the video');
}
function volumedown(){
    console.log('play the video');
}
function videoQuality(){
    console.log('play the video');
}
function fullScreen(){
    console.log('play the video');
}
function download(){
    console.log('play the video');
}

playBtn.addEventListener('click',play);
pauseBtn.addEventListener('click',pause);
f10Btn.addEventListener('click',forward);
b10Btn.addEventListener('click',backward);
volumeUp.addEventListener('click',volumeup);
volumeDown.addEventListener('click',volumedown);
swapBtn.addEventListener('click',videoQuality);
fullscreenBtn.addEventListener('click',fullScreen);
downloadBtn.addEventListener('click',download);