let play = document.getElementById('playbtn');
let audio = document.querySelector('audio');
let img = document.querySelector("img");
let isPlaying = false;
let songindx = 0;
function playMusic()
{
    isPlaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause");
    img.classList.add("anime");
}
function pause()
{
    isPlaying = false;
    audio.pause();
    play.classList.replace("fa-pause", "fa-play");
    img.classList.remove("anime");
}
play.addEventListener('click',function()
{
    if (isPlaying == false)
    {
        playMusic();
    }
    else
    {
        pause();
    }
})

// changing the music data
let titlename = document.getElementById("title_name");
let artistname = document.getElementById("artist_name");
let prevbtn = document.getElementById("prev");
let nxtbtn = document.getElementById("next");

let songs = [{
    name:"1",
    title:"song1",
    artist:"Jubin"
}
,{
    name:"2",
    title:"song2",
    artist:"Arijit"
},
{
    name:"3",
    title:"song3",
    artist:"Akshay"
}
,{
    name:"4",
    title:"song4",
    artist:"Putin"
}
,{
    name:"5",
    title:"song5",
    artist:"Sizuka"
},{
    name:"6",
    title:"song5",
    artist:"Sizuka"
},{
    name:"7",
    title:"song5",
    artist:"Sizuka"
},{
    name:"8",
    title:"song5",
    artist:"Sizuka"
},{
    name:"9",
    title:"song5",
    artist:"Sizuka"
},{
    name:"10",
    title:"song5",
    artist:"Sizuka"
},{
    name:"11",
    title:"song5",
    artist:"Sizuka"
},{
    name:"12",
    title:"song5",
    artist:"Sizuka"
},{
    name:"13",
    title:"song5",
    artist:"Sizuka"
},{
    name:"14",
    title:"song5",
    artist:"Sizuka"
},{
    name:"15",
    title:"song5",
    artist:"Sizuka"
},{
    name:"16",
    title:"song5",
    artist:"Sizuka"
}]

function loadsong(songs)
{
   titlename.textContent = songs["title"];
   artistname.textContent = songs["artist"];
   audio.src = "audio/"+songs.name+".mp3";
   img.src="img/"+songs.name+".jpg";
}
 next.addEventListener('click', function()
 {
    songindx = (songindx+1) % songs.length;
    loadsong(songs[songindx]);
    playMusic();
    
     
 })
 prevbtn.addEventListener('click',function()
 {
    songindx = (songindx+1) % songs.length;
    loadsong(songs[(songindx-1+songs.length)%songs.length]);
    playMusic();
 })