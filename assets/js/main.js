// Date initial

let display = document.querySelector('.relogio')

let second = 0
let minutes = 0
let hours = 0

var clock

// Event
document.querySelector('.iniciar').addEventListener('click', startClock)
document.querySelector('.zerar').addEventListener('click', zeroClock)
document.querySelector('.pausar').addEventListener('click', pauseClock)

// functions

function startClock() {
  clock = setInterval(UpdateClock, 1000)
}

function UpdateClock() {
  second++

  if (second >= 60) {
    minutes++
    second = 0
  }
  if (minutes >= 60) {
    hours++
    minutes = 0
  }
  if (hours > 24) {
    second = 0
    minutes = 0
    hours = 0
  }

  ShowTime()
}

function zeroClock() {
  clearInterval(clock)
  second = 0
  minutes = 0
  hours = 0
  display.innerHTML = `0${hours}:0${minutes}:0${second}`
}

function pauseClock() {
  clearInterval(clock)
}

function ShowTime() {
  if (second < 10 && minutes < 10 && hours < 10) {
    display.innerHTML = `0${hours}:0${minutes}:0${second}`
  } else if (minutes < 10 && hours < 10) {
    display.innerHTML = `0${hours}:0${minutes}:${second}`
  } else if (hours < 10) {
    display.innerHTML = `0${hours}:${minutes}:${second}`
  } else {
    display.innerHTML = `${hours}:${minutes}:${second}`
  }
}
