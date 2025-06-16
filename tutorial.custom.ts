tiles.setTilemap(tilemap`level1`)
namespace SpriteKind {
    export const Camera = SpriteKind.create()
    //% isKind
    export const Penguin = SpriteKind.create()
}
let __camera = sprites.create(image.create(150, 110), SpriteKind.Camera)
__camera.image.setPixel(0, 0, 4)
__camera.image.setPixel(149, 0, 4)
__camera.image.setPixel(0, 109, 4)
__camera.image.setPixel(149, 109, 4)
controller.moveSprite(__camera)
__camera.setFlag(SpriteFlag.Invisible, true)
__camera.setFlag(SpriteFlag.Ghost, true)
__camera.setFlag(SpriteFlag.StayInScreen, true)
scene.cameraFollowSprite(__camera)
scene.onOverlapTile(SpriteKind.Penguin, assets.tile`tile`, function (sprite, location) {
    control.runInBackground(() => {
        pause(1000)
        game.over(true)
    })
})
sprites.onCreated(SpriteKind.Penguin, function(sprite: Sprite) {
    sprite.setVelocity(randint(10, 150), randint(-150, 150))
    sprite.setFlag(SpriteFlag.BounceOnWall, true)
    sprite.lifespan = 2000
    sprite.y = 80
})