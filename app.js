const levelNum = document.getElementById("level__num")
const door1 = document.getElementById("door1")
const door2 = document.getElementById("door2")
const door3 = document.getElementById("door3")
const doors = document.querySelectorAll(".doors__item")
const itog = document.getElementById("result")

let globalLevelNum = 1
const losePhrases = ["Ты зашел не в ту дверь", "Welcome to the GYM", "Зря ты туда полез", "В дверь постучали 8 раз...", "Ну, он чувствует", "Вам намазали одеялко", "Ой, ручка отпала", "Сомнительно, нуу оке-е-й", "Тут оказался зачет у Али"]

function godDoor(level, sellectDoor) {
    let generatedDoor = Math.floor(Math.random() * doors.length)
    // if (level === 1) {
    //     return [...doors].indexOf(sellectDoor)
    // }
    console.log(generatedDoor)
    return generatedDoor
}

const clickDoor1 = door1.onclick = () => {
    if (doors[godDoor(globalLevelNum, door1)] === door1) {
        win()
    } else {
        lose()
    }
}

const clickDoor2 = door2.onclick = () => {
    if (doors[godDoor(globalLevelNum, door2)] === door2) {
        win()
    } else {
        lose()
    }
}

const clickDoor3 = door3.onclick = () => {
    if (doors[godDoor(globalLevelNum, door3)] === door3) {
        win()
    } else {
        lose()
    }
}

document.addEventListener('keyup', function (event) {
    console.log(event.code)
    if (event.code == 'Digit1') {
        clickDoor1()
    } else if (event.code == 'Digit2') {
        clickDoor2()
    } else if (event.code == 'Digit3') {
        clickDoor3()
    }
  })

function win() {
    itog.style.display = "flex"
    itog.textContent = "Проходим дальше..."
    itog.style.backgroundColor = "rgba(100, 159, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 800)
    globalLevelNum += 1
    levelNum.textContent = String(globalLevelNum)
}

function lose() {
    itog.style.display = "flex"
    itog.textContent = losePhrases[Math.floor(Math.random() * losePhrases.length)]
    itog.style.backgroundColor = "rgba(159, 4, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 1000)
    globalLevelNum = 1
    levelNum.textContent = String(globalLevelNum)
}
