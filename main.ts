input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Happy)
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
