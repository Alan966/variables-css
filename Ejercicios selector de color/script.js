const red = document.getElementById('red')
const green = document.getElementById('green')
const blue = document.getElementById('blue')
const rootStyle = document.documentElement.style

const changeColorRed = e => {
    rootStyle.setProperty('--red', e.target.value)
}
const changeColorGreen = e => {
    rootStyle.setProperty('--green', e.target.value)
}

const changeColorBlue = e => {
    rootStyle.setProperty('--blue', e.target.value)
}

red.addEventListener('change', e => {
    changeColorRed(e)
})

red.addEventListener('mousemove', e => {
    changeColorRed(e)
})

green.addEventListener('change', e => {
    changeColorGreen(e)
})

green.addEventListener('mousemove', e => {
    changeColorGreen(e)
})

blue.addEventListener('change', e => {
    changeColorBlue(e)
})

blue.addEventListener('mousemove', e => {
    changeColorBlue(e)
})