function setUpStopper () {
    stopper = sprites.create(img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `, SpriteKind.Enemy)
    stopper.setPosition(80, 116)
    animation.runImageAnimation(
    stopper,
    [img`
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        `,img`
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        `],
    200,
    true
    )
}
/**
 * controller.moveSprite(Dancer)
 */
let stopper: Sprite = null
scene.setBackgroundImage(img`
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeefeeeeeeeeeefeeeeeeeeeeeeeeefeeeeeeeeeeeeefeeeeeeeeeeeefeeeeeeeeefeeeeeeeeefeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
effects.smiles.startScreenEffect()
let arrowImgs = [img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 1 1 4 4 4 4 2 8 . . 
    . . . 8 2 1 1 1 1 1 1 4 2 8 . . 
    . . . 8 2 4 1 1 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 1 1 4 2 8 . . 
    . . . 8 2 1 1 1 1 1 1 1 2 8 . . 
    . . . 8 2 4 4 4 4 1 1 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . . . 8 . . . . . . . 
    . . . . . . . 8 2 8 . . . . . . 
    . . . . . 8 8 2 4 2 8 8 . . . . 
    . . . . 8 2 2 4 4 4 2 2 8 . . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 1 1 1 4 4 2 8 . . 
    . . . 8 2 4 4 4 1 4 4 4 2 8 . . 
    . . . 8 2 4 4 4 4 4 4 4 2 8 . . 
    . . . . 8 2 2 2 2 2 2 2 8 . . . 
    . . . . . 8 8 8 8 8 8 8 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
setUpStopper()
let Dancer = sprites.create(img`
    .....f......f.......
    .....f......f.......
    ....f77777777f......
    ...f7777777777f.....
    ...f7777777777f.....
    ...f7777777777f.....
    ..f777777777777f....
    ..f777777777777f....
    ..f777777777777f....
    ..f777777777777f....
    ..ff7777777777ff....
    ..ffffffffffffff....
    ..fff........fff....
    ..fff........fff....
    ..fff........fff....
    ..fff........fff....
    `, SpriteKind.Player)
// Dancer.setFlag(SpriteFlag.ShowPhysics, true)
Dancer.y = 78
