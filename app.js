const levelNum = document.getElementById("level__num")
const door1 = document.getElementById("door1")
const door2 = document.getElementById("door2")
const door3 = document.getElementById("door3")
const door4 = document.getElementById("door4")
const door5 = document.getElementById("door5")
const door6 = document.getElementById("door6")
const doors = document.querySelectorAll(".doors__item")
const itog = document.getElementById("result")
const goodDoors = document.getElementById("count-good")
const badDoors = document.getElementById("count-bad")

const losePhrases = ["Ты зашел не в ту дверь", "Welcome to the GYM", "Зря ты туда полез", "В дверь постучали 8 раз...", "Ну, он чувствует", "Вам намазали одеялко", "Ой, ручка отпала", "Сомнительно, нуу оке-е-й", "Тут оказался зачет у Али"]

godDoor() // Первоначальный запуск шайтан машины после загрузки страницы

// Генерация победных дверей
function godDoor(level=1) {
    let winDoors = []
    let copyDoors = [...doors]
    doors.forEach(elem => elem.style.display = "none")

    if (level <= 5) {
        copyDoors = renderingDoors([...doors], 5)
        clickableDoors = [...copyDoors]

        if (level === 1) {
            chooseDoor(level, winDoors = [...copyDoors], clickableDoors) // Возвращает в winDoors все элементы
            copyDoors = []
    
        } else if (level <= 5) {
            structuringArrays(copyDoors, winDoors, 3) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)
        }

    } else if (level >= 6 && level <= 10) {
        copyDoors = renderingDoors([...doors], 4) // Рендерит показ дверей для выбора
        clickableDoors = [...copyDoors]

        if (level <= 9) {
            structuringArrays(copyDoors, winDoors, 2) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level === 10) {
            structuringArrays(copyDoors, winDoors, 1) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)
        }

    } else if (level >= 11 && level <= 19) {
        if (level <= 14) {
            copyDoors = renderingDoors([...doors], 3) // Рендерит показ дверей для выбора
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 2) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level >= 15) {
            copyDoors = renderingDoors([...doors], 2) // Рендерит показ дверей для выбора
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 1) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)
        }

    } else if (level >= 20 && level <= 30) {
        if (level === 20) {
            copyDoors = renderingDoors([...doors], 3) // Рендерит показ дверей для выбора
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 1) // Вызов функции структурирующей основной массив дверей и создающей победные двери без повторных элементов
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level >= 21 && level <= 25) {
            copyDoors = renderingDoors([...doors], 6) // Рендерит показ дверей для выбора
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 4)
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level >= 26) {
            copyDoors = renderingDoors([...doors], 6)
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 2)
            chooseDoor(level, winDoors, clickableDoors)
        }

    } else if (level >= 31 && level <= 40) {
        if (level >= 31 && level <= 34) {
            copyDoors = renderingDoors([...doors], 5)
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 2)
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level === 35) {
            copyDoors = renderingDoors([...doors], 6)
            clickableDoors = [...copyDoors]

            
            structuringArrays(copyDoors, winDoors, 5)
            chooseDoor(level, winDoors, clickableDoors)

        } else if (level >= 36 && level <= 40) {
            copyDoors = renderingDoors([...doors], 5)
            clickableDoors = [...copyDoors]

            structuringArrays(copyDoors, winDoors, 4)
            chooseDoor(level, winDoors, clickableDoors)
        }
    } else {
        copyDoors = renderingDoors([...doors], 6)
        clickableDoors = [...copyDoors]

        structuringArrays(copyDoors, winDoors, 3)
        chooseDoor(level, winDoors, clickableDoors)
    }
    console.log(copyDoors)
    console.log(winDoors)
    
    // Вывод кол-ва победных/лузовых дверей
    goodDoors.textContent = winDoors.length
    badDoors.textContent = copyDoors.length
}
// Генерация победных дверей


function renderingDoors(copyDoors, count) {
    copyDoors.splice(count) // Обрезаем массив до нужного кол-ва элементов (по уровню сложности)
    copyDoors.forEach(elem => elem.style.display = "block")
    return copyDoors
}

function structuringArrays(copyDoors, winDoors, countWins) {
    while (winDoors.length < countWins) {
        let numDoor = copyDoors[Math.floor(Math.random() * copyDoors.length)]
        winDoors.push(numDoor) // пушим в вин-массив элемент из основного
        copyDoors.splice(copyDoors.indexOf(numDoor), 1) // удаляем из основного массива выигрышный элемент
    }
}

// Обработка выбранной двери
function chooseDoor(level, winDoors, clickableDoors) {
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

    const clickDoor4 = () => {
        if (winDoors.includes(door4)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    }
    door4.addEventListener('click', clickDoor4);

    const clickDoor5 = () => {
        if (winDoors.includes(door5)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    }
    door5.addEventListener('click', clickDoor5);

    const clickDoor6 = () => {
        if (winDoors.includes(door6)) {
            win(level);
        } else {
            lose(level);
        }
        removeEventListeners()
    }
    door6.addEventListener('click', clickDoor6);

    // Обработка нажатий клавиш (переброс на как если бы нажимали курсором)
    const keyUpHandler = (event) => {
        if (event.code === 'Digit1' && clickableDoors.includes(door1)) {
            clickDoor1();
        } else if (event.code === 'Digit2' && clickableDoors.includes(door2)) {
            clickDoor2();
        } else if (event.code === 'Digit3' && clickableDoors.includes(door3)) {
            clickDoor3();
        } else if (event.code === 'Digit4' && clickableDoors.includes(door4)) {
            clickDoor4();
        } else if (event.code === 'Digit5' && clickableDoors.includes(door5)) {
            clickDoor5();
        } else if (event.code === 'Digit6' && clickableDoors.includes(door6)) {
            clickDoor6();
        }
    };
    document.addEventListener('keyup', keyUpHandler);

    // Функция для удаления обработчиков событий
    const removeEventListeners = () => {
        document.removeEventListener('keyup', keyUpHandler);
        door1.removeEventListener('click', clickDoor1);
        door2.removeEventListener('click', clickDoor2);
        door3.removeEventListener('click', clickDoor3);
        door4.removeEventListener('click', clickDoor4);
        door5.removeEventListener('click', clickDoor5);
        door6.removeEventListener('click', clickDoor6);
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