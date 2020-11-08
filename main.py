DisplayActual = 0
temperature = 0

def on_button_pressed_a():
    global DisplayActual
    if DisplayActual:
        DisplayActual = 0
    else:
        DisplayActual = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_forever():
    global temperature
    temperature = dstemp.celsius(DigitalPin.P0)
    temperature = Math.round(temperature)
    basic.show_number(temperature)
    basic.show_number(DisplayActual)
basic.forever(on_forever)
