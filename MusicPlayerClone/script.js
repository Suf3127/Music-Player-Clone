let songindex=0;
let audioElement=new Audio('2.mp3');
let masterplay=document.getElementById('masterplay');
let myprogress=document.getElementById('myprogresssbar');
let songitem=Array.from(document.getElementsByClassName('songitem'));
let songs=[
    {songName:"Tere Pyaar Mein",filePath:"1.mp3",coverPath:"cover1.png"},
    {songName:"Tere Pyaar Mein",filePath:"1.mp3",coverPath:"cover1.png"},
    {songName:"Tere Pyaar Mein",filePath:"1.mp3",coverPath:"cover1.png"},
    {songName:"Phir aur Kya",filePath:"2.mp3",coverPath:"cover2.png"},
    {songName:"Phir aur Kya",filePath:"2.mp3",coverPath:"cover2.png"},
    {songName:"Phir aur Kya",filePath:"2.mp3",coverPath:"cover2.png"}
]
songitem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;

})
//handle play/pause
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterplay.classList.remove('fa-play');
        masterplay.classList.add('fa-pause');
    }
    else{
        audioElement.pause();
        masterplay.classList.remove('fa-pause');
        masterplay.classList.add('fa-play');
    }
})

audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogress.value=progress;

})

myprogress.addEventListener('change',()=>{
    audioElement.currentTime=myprogress.value * audioElement.duration/100;
})

const makeallplays=()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((e)=>{
        e.classList.remove('fa-pause');
        e.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('sonitemplay')).forEach((e)=>{
    e.addEventListener('click',(e)=>{
        makeallplays();
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
    })
})