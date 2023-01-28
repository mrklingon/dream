input.onButtonPressed(Button.A, function () {
    pause2 = 0
    for (let index = 0; index < 4; index++) {
        Ship.move(1)
        Ship.ifOnEdgeBounce()
        if (Ship.isTouching(Planet)) {
            Ship.turn(Direction.Right, 180)
            music.playMelody("C - C F F - - - ", 120)
            game.removeLife(1)
        }
        basic.pause(100 + pause2 * 75)
        pause2 += 1
    }
})
input.onButtonPressed(Button.B, function () {
    Ship.turn(Direction.Right, 45)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    if (sound == 1) {
        music.setBuiltInSpeakerEnabled(false)
        sound = 0
    } else {
        music.setBuiltInSpeakerEnabled(true)
        sound = 1
    }
})
let Asteroid: game.LedSprite = null
let pause2 = 0
let sound = 0
let Ship: game.LedSprite = null
let Planet: game.LedSprite = null
images.createBigImage(`
    . . . . . . . # # #
    . . . # # # # # . .
    # # # # # # # . . .
    . . . . . . # # . .
    . . . . . . . # # #
    `).scrollImage(1, 200)
images.createBigImage(`
    . . . . . . # . . .
    . . # . . . . . . .
    . # . . . # . # . .
    . . . . # . # . . .
    . . . . . . . # . .
    `).scrollImage(1, 200)
game.setLife(3)
Planet = game.createSprite(2, 2)
Ship = game.createSprite(0, 0)
sound = 1
basic.forever(function () {
    if (!(game.isGameOver())) {
        Planet.move(1)
        Planet.ifOnEdgeBounce()
        basic.pause(100)
    }
})
basic.forever(function () {
    if (!(game.isGameOver())) {
        basic.pause(100 * randint(1, 5))
        Asteroid = game.createSprite(randint(0, 4), 4)
        Asteroid.turn(Direction.Right, randint(0, 360))
        for (let index = 0; index < 15; index++) {
            Asteroid.move(1)
            if (Asteroid.isTouching(Ship)) {
                game.addScore(randint(10, 50))
                music.playTone(131, music.beat(BeatFraction.Whole))
                Asteroid.turn(Direction.Right, 180)
            }
            Asteroid.ifOnEdgeBounce()
            basic.pause(100)
        }
        Asteroid.delete()
    }
})
