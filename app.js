function updateClock() {
    var now = new Date()
    var hour = now.getHours()
    var minute = now.getMinutes()
    var second = now.getSeconds()

    hour = hour < 10 ? "0" + hour : hour
    minute = minute < 10 ? "0" + minute : minute
    second = second < 10 ? "0" + second : second

    var timeString = hour + ":" + minute + ":" + second
    document.getElementById("clock").innerText = timeString 
}
setInterval(updateClock, 1000)
updateClock()