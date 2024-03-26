const levelNum = document.getElementById("level__num")
const door1 = document.getElementById("door1")
const door2 = document.getElementById("door2")
const door3 = document.getElementById("door3")
const doors = document.querySelectorAll(".doors__item")
const itog = document.getElementById("result")
const goodDoors = document.getElementById("info-good")
const badDoors = document.getElementById("info-bad")

const losePhrases = ["Ты зашел не в ту дверь", "Welcome to the GYM", "Зря ты туда полез", "В дверь постучали 8 раз...", "Ну, он чувствует", "Вам намазали одеялко", "Ой, ручка отпала", "Сомнительно, нуу оке-е-й", "Тут оказался зачет у Али"]

godDoor() // Первоначальный запуск шайтан машины после загрузки страницы

// Генерация победных дверей
function godDoor(level=1) {
    let winDoors = []
    let copyDoors = [...doors]

    if (level === 1) {
        chooseDoor(level, copyDoors)

    } else if (level >= 2 && level <= 99) {
        copyDoors.splice(3, copyDoors.length) // Обрезаем массив до нужного кол-ва элементов (по уровню сложности)

        let numDoor = copyDoors[Math.floor(Math.random() * copyDoors.length)]
        winDoors.push(numDoor) // пушим в вин-массив элемент из основного
        copyDoors.splice(copyDoors.indexOf(numDoor), 1) // удаляем из основного массива выигрышный элемент

        chooseDoor(level, winDoors)
    }
}
// Генерация победных дверей

// Обработка выбранной двери
function chooseDoor(level, winDoors) {
    const clickDoor1 = () => {
        if (winDoors.includes(door1)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    };
    door1.addEventListener('click', clickDoor1);

    const clickDoor2 = () => {
        if (winDoors.includes(door2)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    };
    door2.addEventListener('click', clickDoor2);

    const clickDoor3 = () => {
        if (winDoors.includes(door3)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    }
    door3.addEventListener('click', clickDoor3);

    // Обработка нажатий клавиш (переброс на как если бы нажимали курсором)
    const keyUpHandler = (event) => {
        if (event.code === 'Digit1') {
            clickDoor1();
        } else if (event.code === 'Digit2') {
            clickDoor2();
        } else if (event.code === 'Digit3') {
            clickDoor3();
        }
    };
    document.addEventListener('keyup', keyUpHandler);

    // Функция для удаления обработчиков событий
    const removeEventListeners = () => {
        document.removeEventListener('keyup', keyUpHandler);
        door1.removeEventListener('click', clickDoor1);
        door2.removeEventListener('click', clickDoor2);
        door3.removeEventListener('click', clickDoor3);
    };
}
// Обработка выбранной двери

// Обработка победы/луза
function win(level) {
    itog.style.display = "flex"
    itog.textContent = "Проходим дальше..."
    itog.style.backgroundColor = "rgba(100, 159, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 800)
    level += 1
    levelNum.textContent = String(level)
    godDoor(level)
}

function lose(level) {
    itog.style.display = "flex"
    itog.textContent = losePhrases[Math.floor(Math.random() * losePhrases.length)]
    itog.style.backgroundColor = "rgba(159, 4, 4, 0.696)"
    setTimeout(() => {itog.style.display = "none"}, 1000)
    level = 1
    levelNum.textContent = String(level)
    godDoor(level)
}
// Обработка победы/луза