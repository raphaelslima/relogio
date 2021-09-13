var digitalElement = document.querySelector('.digital')
var sElement = document.querySelector('.p_s')
var mElement = document.querySelector('.p_m')
var hElement = document.querySelector('.p_h')

function upDateClock() {
  let now = new Date()
  let second = now.getSeconds()
  let minute = now.getMinutes()
  let hour = now.getHours()

  digitalElement.innerHTML = `${fixZero(hour)}:${fixZero(minute)}:${fixZero(
    second
  )}`

  var sDeg = (360 / 60) * second - 90
  var mDeg = (360 / 60) * minute - 90
  var hDeg = (360 / 12) * hour - 90

  sElement.style.transform = `rotate(${sDeg}deg)`
  mElement.style.transform = `rotate(${mDeg}deg)`
  hElement.style.transform = `rotate(${hDeg}deg)`
}

function fixZero(time) {
  if (time < 10) {
    return '0' + time
  } else {
    return time
  }
}

setInterval(upDateClock, 1000)
upDateClock()
