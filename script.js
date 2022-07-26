const red = document.querySelector('[data-red="red"]')
const yellow = document.querySelector('[data-yellow="yellow"]')
const green = document.querySelector('[data-green="green"]')

const trafficLights = document.querySelector(".trafficLights")
const button = document.querySelector(".button")


//Коли нажимається кнопка, світофор починає працювати
//спочатку Червоний на 3сек і гасне
//потім Жовтий блимає 3 рази 3 сек і гасне
//потім зелений на 5 сек і гасне


function start() {
    red.classList.add("red");
    setTimeout(() => {
        red.classList.remove("red")
    }, 3000)
    
    setTimeout(() => {
        yellow.classList.add("yellow")

        setTimeout(() => {
                yellow.classList.remove("yellow")
            }, 500)
        setTimeout(() => {
                yellow.classList.add("yellow")
            }, 1000)
        
        setTimeout(() => {
                yellow.classList.remove("yellow")
        }, 1500)
        setTimeout(() => {
                yellow.classList.add("yellow")
            }, 2000)
        
        setTimeout(() => {
                yellow.classList.remove("yellow")
        }, 2500)
        
    }, 3100)

    setTimeout(() => {
        green.classList.add("green")
        if (green.classList.contains("green")) {
            return setTimeout(() => {
                green.classList.remove("green")
            }, 2000)
        }
    }, 6000)
}


button.addEventListener("click", start)


