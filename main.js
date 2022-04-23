const musicPauseBtn = document.querySelector('#sound-pause-btn')
const audio = document.querySelector('#music-player')
const audioImg = document.querySelectorAll('#sound-pause-btn i')

let musicIsPlay = false
audio.volume = 0.5

function playPauseMusic() {
  if(musicIsPlay){
    audio.pause() 
    musicIsPlay = false
    musicPauseBtn.classList.toggle('active')
  } else if (!musicIsPlay){
    audio.play()
    musicIsPlay = true
    musicPauseBtn.classList.toggle('active')
  }

  audioImg.forEach(image => {
    image.classList.toggle('active')
  })
}

console.log(audioImg)
musicPauseBtn.addEventListener('click', playPauseMusic)



