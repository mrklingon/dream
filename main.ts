input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Ship.move(1)
        Ship.ifOnEdgeBounce()
        basic.pause(100)
    }
})
input.onButtonPressed(Button.B, function () {
    Ship.turn(Direction.Right, 45)
})
let Asteroid: game.LedSprite = null
let Ship: game.LedSprite = null
let Planet = game.createSprite(2, 2)
Ship = game.createSprite(0, 0)
basic.forever(function () {
    basic.pause(100 * randint(1, 5))
    Asteroid = game.createSprite(4, 4)
    Asteroid.turn(Direction.Right, randint(0, 360))
    for (let index = 0; index < 15; index++) {
        Asteroid.move(1)
        Asteroid.ifOnEdgeBounce()
        basic.pause(100)
    }
    Asteroid.delete()
})
basic.forever(function () {
	
})
