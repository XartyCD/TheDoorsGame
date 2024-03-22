const levelNum = document.getElementById("level__num")
const door1 = document.getElementById("door1")
const door2 = document.getElementById("door2")
const door3 = document.getElementById("door3")
const doors = document.querySelectorAll(".doors__item")
const itog = document.getElementById("result")

const losePhrases = ["Ты зашел не в ту дверь", "Welcome to the GYM", "Зря ты туда полез", "В дверь постучали 8 раз...", "Ну, он чувствует", "Вам намазали одеялко", "Ой, ручка отпала", "Сомнительно, нуу оке-е-й", "Тут оказался зачет у Али"]

function godDoor(level) {
    if (level === 1) {
        win()
        return 0;
    }

    let dr = Math.floor(Math.random() * doors.length)
    console.log(dr)
    return dr
}

door1.onclick = () => {
    if (doors[godDoor(levelNum.textContent)] === door1) {
        win()
    } else {
        lose()
    }
}

door2.onclick = () => {
    if (doors[godDoor(levelNum.textContent)] === door2) {
        win()
    } else {
        lose()
    }
}

door3.onclick = () => {
    if (doors[godDoor(levelNum.textContent)] === door3) {
        win()
    } else {
        lose()
    }
}

function win() {
    itog.style.display = "flex"
    itog.textContent = "Проходим дальше..."
    itog.style.backgroundColor = "rgba(100, 159, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 1000)
    levelNum.textContent = String(+levelNum.textContent + 1)
}

function lose() {
    itog.style.display = "flex"
    itog.textContent = losePhrases[Math.floor(Math.random() * losePhrases.length)]
    itog.style.backgroundColor = "rgba(159, 4, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 2000)
    levelNum.textContent = "1"
}
