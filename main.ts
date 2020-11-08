function displayMyTemperature (Temperature: number) {
    if (temperature == 24) {
        basic.showLeds(`
            . . # . #
            # . # . #
            # . # # #
            . . . . #
            . . . . #
            `)
    } else if (temperature == 23) {
        basic.showLeds(`
            . . # # #
            # . . . #
            # . # # #
            . . . . #
            . . # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
}
input.onButtonPressed(Button.A, function () {
    if (DisplayActual) {
        DisplayActual = 0
    } else {
        DisplayActual = 1
    }
})
function displayDecimal (decimal: number) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    if (decimalTemperature < 0.1 && decimalTemperature >= 0) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # . #
            . . # . #
            . . # # #
            `)
    } else if (decimalTemperature < 0.2 && decimalTemperature >= 0.1) {
        basic.showLeds(`
            . . # # .
            . . . # .
            . . . # .
            . . . # .
            . . # # #
            `)
    } else if (decimalTemperature < 0.3 && decimalTemperature > 0.2) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . # . .
            . . # # #
            `)
    } else if (decimalTemperature < 0.4 && decimalTemperature > 0.3) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . . . #
            . . # # #
            `)
    } else if (decimalTemperature < 0.5 && decimalTemperature > 0.4) {
        basic.showLeds(`
            . . # . #
            . . # . #
            . . # # #
            . . . . #
            . . . . #
            `)
    } else if (decimalTemperature < 0.6 && decimalTemperature > 0.5) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . . . #
            . . # # #
            `)
    } else if (decimalTemperature < 0.7 && decimalTemperature > 0.6) {
        basic.showLeds(`
            . . # # #
            . . # . .
            . . # # #
            . . # . #
            . . # # #
            `)
    } else if (decimalTemperature < 0.8 && decimalTemperature > 0.7) {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
    } else if (decimalTemperature < 0.9 && decimalTemperature > 0.8) {
        basic.showLeds(`
            . . # # #
            . . # . #
            . . # # #
            . . # . #
            . . # # #
            `)
    } else {
        basic.showLeds(`
            . . # # #
            . . . . #
            . . # # #
            . . . . .
            . . # . .
            `)
    }
}
let ReturnedTemperature = 0
let decimalTemperature = 0
let temperature = 0
let DisplayActual = 0
DisplayActual = 1
basic.forever(function () {
    ReturnedTemperature = dstemp.celsius(DigitalPin.P0)
    temperature = Math.round(ReturnedTemperature)
    decimalTemperature = ReturnedTemperature - temperature
    if (DisplayActual == 0) {
        displayMyTemperature(1)
        basic.pause(100)
        displayDecimal(decimalTemperature)
    } else {
        basic.showNumber(ReturnedTemperature)
    }
})
