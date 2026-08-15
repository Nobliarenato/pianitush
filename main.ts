input.onButtonPressed(Button.A, function () {
    music.stopMelody(MelodyStopOptions.All)
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.AB, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.giggle), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Prelude), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
})
basic.showString("HOLA")
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.UntilDone)
basic.forever(function () {
	
})
