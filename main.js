const musicPauseBtn = document.querySelector('#sound-pause-btn')
const audio = document.querySelector('#music-player')
const audioImg = document.querySelectorAll('#sound-pause-btn i')

let music = false
audio.volume = 0.5

console.log(audioImg)
musicPauseBtn.addEventListener('click', audioPause)

function audioPause() {
  if(music){
    audio.pause() 
    music = false
    musicPauseBtn.classList.toggle('active')
  } else {
    audio.play()
    music = true
    musicPauseBtn.classList.toggle('active')
  }
}

musicPauseBtn.addEventListener('click', playPauseMusic)

function playPauseMusic() {
  audioImg.forEach(image => {
    image.classList.toggle('active')
  })
}