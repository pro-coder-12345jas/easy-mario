enum ActionKind {
    Walking,
    Idle,
    Jumping,
    walk_left,
    walk_right,
    stand,
    walk_left_dino,
    walk_right_dino
}
namespace SpriteKind {
    export const Rock = SpriteKind.create()
    export const Dino = SpriteKind.create()
    export const Field = SpriteKind.create()
    export const Web = SpriteKind.create()
    export const RockB = SpriteKind.create()
    export const Spidey = SpriteKind.create()
    export const Lava = SpriteKind.create()
    export const MommyDino = SpriteKind.create()
}
function create_guiseppe () {
    info.setLife(5)
    guiseppe = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    guiseppe.ay = 290
    scene.cameraFollowSprite(guiseppe)
    guiseppe.setFlag(SpriteFlag.ShowPhysics, false)
    guiseppe_stand()
    guiseppe_walk()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (guiseppe.isHittingTile(CollisionDirection.Bottom)) {
        guiseppe.vy = -150
    }
})
function guiseppe_walk () {
    giuseppe_walk_left = animation.createAnimation(ActionKind.walk_left, 200)
    giuseppe_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `)
    giuseppe_walk_left.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `)
    giuseppe_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    giuseppe_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `)
    giuseppe_walk_right = animation.createAnimation(ActionKind.walk_right, 200)
    giuseppe_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    giuseppe_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    giuseppe_walk_right.addAnimationFrame(img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `)
    giuseppe_walk_right.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `)
    animation.attachAnimation(guiseppe, giuseppe_walk_left)
    animation.attachAnimation(guiseppe, giuseppe_walk_right)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RockB, function (sprite, otherSprite) {
    if (controller.right.isPressed() || controller.left.isPressed()) {
        sprite.x += -2 * direction
    }
    if (!(sprite.isHittingTile(CollisionDirection.Bottom))) {
        sprite.y += -1
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Web, function (sprite, otherSprite) {
    if (controller.right.isPressed() || controller.left.isPressed()) {
        sprite.x += -0.7 * direction
    }
    if (controller.up.isPressed()) {
        sprite.y += 1
    }
    if (!(sprite.isHittingTile(CollisionDirection.Bottom))) {
        sprite.y += -1
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (info.score() >= 5) {
        if (field_Active == 0) {
            field_Active = 1
            guiseppe.sayText("force push")
            field = sprites.create(img`
                ................................................................
                ................................................................
                ...6............6............6............6.....................
                ..676..........676..........676..........676....................
                ..6776.........6776.........6776.........6776...................
                ..86776........86776........86776........86776.cfcceeeccbb......
                cccc67ffffffcccce67eeeeeeeeeee77ffcceeeeee877ffceeeeefbdddb.....
                cccc66cccccceeeee66eeeeeeeeeee66eeeeeeeeeee66ceeeeeefbdbbbdb....
                67777ccccccce67776eeeecccf67766eeeeeeee67766eeeeeeeefdbbdbbdb...
                c7776cccceceee7776eeeeeeeee7776eeeeeeeee7776eeeeeeefbdbdbdbdb...
                cc67cccceeeeeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeefdbdbdbdbdb..
                cc87cccceeeeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
                cc87cccecceeeee87eeeeeeeeeee87eeeeeeeeeee86eeeeeeeecdbdbdbdbdb..
                cc67ccccccceeee67eeeeeeeeeee67eeeeeeeeeee67eeeeeeeecdbdbdbdbdb..
                c6776cceeeeeee6776eeeeeeeee6776eeeeeeeee7776eeeeeeecbdbdbdbdb...
                67777ccecccce67777eeeeeeee67776eeeeeeee67776eeeeeeeecdbbdbbdb...
                cc866cccccceeee866eccfffccce866eeeeeeeeee866eeeeeeeecbdbbbdb....
                ff8666fccceeeee8666eeeeeeeee8676fffcceeec8666eeeeeeeecbdddb.....
                ..67776........67776........67776effffffe67776......eeccbb......
                ..6776.........6776.........6776........e6776...................
                ..676..........676..........676..........676....................
                ...6............6............6............6.....................
                ................................................................
                ................................................................
                `, SpriteKind.Field)
            field.setFlag(SpriteFlag.Invisible, true)
            field.setPosition(guiseppe.x, guiseppe.y)
            field.x += 32 * direction
            info.changeScoreBy(-5)
            if (direction == -1) {
                animation.setAction(guiseppe, ActionKind.walk_left)
            } else {
                animation.setAction(guiseppe, ActionKind.walk_right)
            }
            timer.after(100, function () {
                animation.setAction(guiseppe, ActionKind.stand)
                field.destroy()
                timer.after(1500, function () {
                    field_Active = 0
                    guiseppe.sayText("")
                })
            })
        } else {
            guiseppe.sayText("I needa cooldown")
        }
    } else {
        guiseppe.sayText("not enough points :((")
        timer.after(1500, function () {
            guiseppe.sayText("")
        })
    }
})
sprites.onOverlap(SpriteKind.Spidey, SpriteKind.Rock, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
    sprite.vx = otherSprite.vx / Math.abs(otherSprite.vx) * 10
    sprite.z += -1
    if (sprite.z <= -4) {
        sprite.destroy(effects.spray, 500)
        info.changeScoreBy(4)
    }
})
function create_dino3 () {
    dino3 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `, SpriteKind.Dino)
    dino3.setPosition(200, 104)
    dino3.ay = 290
    dino3.z = -1
    dino3.lifespan = 7000
    scene.placeOnRandomTile(dino3, 12)
    animation.setAction(dino3, ActionKind.walk_left_dino)
}
function create_dino () {
    dino = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `, SpriteKind.Dino)
    dino.setPosition(200, 104)
    dino.ay = 290
    dino.z = -1
    dino.lifespan = 7000
    scene.placeOnRandomTile(dino, 10)
}
function dino_walk () {
    dino_walk_left = animation.createAnimation(ActionKind.walk_left_dino, 400)
    dino_walk_left.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `)
    dino_walk_left.addAnimationFrame(img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c c b 5 5 b d d d c . 
        . . . . . c d 5 5 b b c c c . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `)
    dino_walk_left.addAnimationFrame(img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c c 
        . c c c c c c d d d d d d d d c 
        . . . . c c b 5 5 b d d d c c . 
        . . . . c d 5 5 b b c c c . . . 
        . . . . c c c c c c c . . . . . 
        . . . . c b b b c . . . . . . . 
        `)
    dino_walk_left.addAnimationFrame(img`
        . . . . c c c c c . . . . . . . 
        . . c c 5 5 5 5 5 c . . . . . . 
        . c 5 5 5 5 1 f 5 5 c . . . . . 
        c 5 5 5 5 5 f f 5 5 5 c . . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 c . . . 
        c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
        c 5 5 5 5 5 5 5 5 5 d d d c . . 
        . c 5 5 5 5 b 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c . . 
        . c b b c 5 5 b b d d d d c c . 
        . c c c c c b b d d d d d d c c 
        . . . c c 5 5 b 5 5 d d d d d c 
        . . . . c b 5 5 b b c c c c c c 
        . . . . c c c c c c . . . . . . 
        . . . . . c b b b c . . . . . . 
        `)
    animation.attachAnimation(dino, dino_walk_left)
    animation.attachAnimation(dino2, dino_walk_left)
    animation.attachAnimation(dino3, dino_walk_left)
}
sprites.onOverlap(SpriteKind.MommyDino, SpriteKind.Field, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.vx = 50 * direction
    sprite.sx = 1.5
    timer.after(200, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        timer.after(1000, function () {
            sprite.sx = 1
        })
    })
    sprite.z += -2
    if (sprite.z <= -30) {
        sprite.destroy(effects.spray, 500)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (proj_Active == 0) {
        proj_Active = 1
        create_proj()
        if (direction == -1) {
            animation.setAction(guiseppe, ActionKind.walk_left)
        } else {
            animation.setAction(guiseppe, ActionKind.walk_right)
        }
        timer.after(500, function () {
            animation.setAction(guiseppe, ActionKind.stand)
            timer.after(500, function () {
                proj_Active = 0
            })
        })
    }
})
function clear_level () {
    for (let value of sprites.allOfKind(SpriteKind.Rock)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Dino)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Field)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Web)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Projectile)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.RockB)) {
        value.destroy()
    }
    for (let value of sprites.allOfKind(SpriteKind.Spidey)) {
        value.destroy()
    }
}
sprites.onOverlap(SpriteKind.RockB, SpriteKind.Field, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.vx = 100 * direction
    timer.after(200, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        timer.after(1000, function () {
            sprite.vx = 0
        })
    })
    sprite.z += 2
    if (sprite.z >= 6) {
        sprite.destroy(effects.spray, 500)
    }
})
scene.onHitTile(SpriteKind.Dino, 2, function (sprite) {
    sprite.destroy(effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Dino, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    bouncevx = otherSprite.vx / Math.abs(otherSprite.vx) * 100
    sprite.vx = bouncevx
    if (controller.left.isPressed() || controller.right.isPressed()) {
        sprite.vx = bouncevx * 1.5
        console.log(sprite.vx)
    }
    pause(250)
    sprite.vx = 0
    pause(250)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = -1
    animation.setAction(guiseppe, ActionKind.walk_left)
})
sprites.onOverlap(SpriteKind.Dino, SpriteKind.Field, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.vx = 100 * direction
    sprite.sx = 1.5
    timer.after(200, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        timer.after(1000, function () {
            sprite.sx = 1
        })
    })
    sprite.z += -2
    if (sprite.z <= -4) {
        sprite.destroy(effects.spray, 500)
    }
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(guiseppe, ActionKind.stand)
})
sprites.onOverlap(SpriteKind.Dino, SpriteKind.Rock, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
    sprite.vx = otherSprite.vx / Math.abs(otherSprite.vx) * 10
    sprite.z += -1
    if (sprite.z <= -4) {
        sprite.destroy(effects.spray, 500)
        info.changeScoreBy(4)
    }
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.setAction(guiseppe, ActionKind.stand)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Spidey, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    bouncevx = otherSprite.vx / Math.abs(otherSprite.vx) * 100
    sprite.vx = bouncevx
    if (controller.left.isPressed() || controller.right.isPressed()) {
        sprite.vx = bouncevx * 1.5
        console.log(sprite.vx)
    }
    pause(250)
    sprite.vx = 0
    pause(250)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
    create_web(sprite.x, sprite.y)
})
function spawn_laval (block_cnt: number) {
    list = []
    while (block_cnt != list.length) {
        lavab = sprites.create(img`
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
            `, SpriteKind.Lava)
        lavab.setFlag(SpriteFlag.Invisible, true)
        scene.placeOnRandomTile(lavab, 2)
        already_filled = 0
        for (let value of list) {
            if (value == lavab.x + lavab.y) {
                already_filled = 1
            }
        }
        if (already_filled) {
            lavab.destroy()
        } else {
            list.push(lavab.x + lavab.y)
        }
    }
}
sprites.onOverlap(SpriteKind.MommyDino, SpriteKind.Rock, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
    sprite.vx = otherSprite.vx / Math.abs(otherSprite.vx) * 5
    sprite.z += -1
    if (sprite.z <= -30) {
        sprite.destroy(effects.spray, 500)
        info.changeScoreBy(4)
    }
})
function create_proj () {
    vxval = direction * 100
    rock = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Rock)
    rock.x = guiseppe.x
    rock.y = guiseppe.y
    rock.x += direction * 7
    rock.y += -3
    rock.vx = vxval
    rock.ay = 100
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    animation.setAction(guiseppe, ActionKind.walk_right)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Rock, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    info.changeLifeBy(-2)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    bouncevx = otherSprite.vx / Math.abs(otherSprite.vx) * 100
    sprite.vx = bouncevx
    if (controller.left.isPressed() || controller.right.isPressed()) {
        sprite.vx = bouncevx * 2
        console.log(sprite.vx)
    }
    pause(250)
    sprite.vx = 0
    pause(250)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
sprites.onOverlap(SpriteKind.Web, SpriteKind.Rock, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
    sprite.z += 1
    if (sprite.z >= 4) {
        sprite.destroy(effects.spray, 500)
    }
})
function create_dino2 () {
    dino2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . c c c c . . . . . . . . 
        . . c c 5 5 5 5 c c . . . . . . 
        . c 5 5 5 5 5 5 5 5 c . . . . . 
        c 5 5 5 5 5 1 f 5 5 5 c . . . . 
        c 5 5 5 5 5 f f 5 5 5 5 c . . . 
        c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
        c c b b 1 b 5 5 5 5 5 5 d c . . 
        c 5 3 3 3 5 5 5 5 5 d d d c . . 
        . b 5 5 5 5 5 5 5 5 d d d c . . 
        . . c b b c 5 5 b d d d d c c . 
        . c b b c 5 5 b b d d d d c d c 
        . c c c c c c d d d d d d d d c 
        . . . c c c c d 5 5 b d d d c . 
        . . c c c c c b 5 5 b c c c . . 
        . . c b b b c d 5 5 b c . . . . 
        `, SpriteKind.Dino)
    dino2.setPosition(200, 104)
    dino2.ay = 290
    dino2.z = -1
    dino2.lifespan = 7000
    scene.placeOnRandomTile(dino2, 11)
    animation.setAction(dino2, ActionKind.walk_left_dino)
}
function create_spidey () {
    spidey = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Spidey)
    spidey.setPosition(200, 104)
    spidey.ay = 290
    spidey.z = -1
    spidey.lifespan = 7000
    scene.placeOnRandomTile(spidey, 6)
}
function create_spidey3 () {
    spidey3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Spidey)
    spidey3.setPosition(200, 104)
    spidey3.ay = 290
    spidey3.z = -1
    spidey3.lifespan = 7000
    scene.placeOnRandomTile(spidey3, 8)
}
sprites.onOverlap(SpriteKind.RockB, SpriteKind.Rock, function (sprite, otherSprite) {
    otherSprite.destroy(effects.spray, 100)
})
function setup_level () {
    info.setScore(0)
    clear_level()
    create_map()
    create_guiseppe()
    if (level == 2) {
    	
    }
    if (level == 3) {
    	
    }
    scene.placeOnRandomTile(guiseppe, 5)
}
function create_spidey2 () {
    spidey2 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Spidey)
    spidey2.setPosition(200, 104)
    spidey.ay = 290
    spidey2.z = -1
    spidey2.lifespan = 7000
    scene.placeOnRandomTile(spidey2, 7)
}
scene.onHitTile(SpriteKind.Player, 15, function (sprite) {
    level += 1
    setup_level()
})
sprites.onDestroyed(SpriteKind.MommyDino, function (sprite) {
    timer.after(1000, function () {
        game.over(true)
    })
})
function create_web (x: number, y: number) {
    webb = sprites.create(img`
        1 . . . . . 1 . . . . . . . . . 
        1 1 . . . . 1 . . . . . . 1 1 . 
        . 1 . . . . 1 . . . . . . . 1 . 
        . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
        . . 1 1 . . 1 . . . 1 1 . 1 . . 
        . 1 1 1 . . 1 . . . . 1 . 1 1 . 
        . 1 . . 1 1 1 1 1 1 1 1 . . 1 . 
        . 1 . 1 1 1 . 1 . 1 1 1 . . 1 . 
        . 1 . 1 1 . . . 1 . . . 1 . 1 . 
        . 1 . 1 1 1 . . 1 . . . 1 1 1 . 
        . 1 . . 1 1 1 1 1 1 1 1 . 1 . . 
        . 1 . . 1 . 1 1 1 1 1 1 . . . 1 
        . 1 . 1 . . 1 1 . . . 1 1 1 1 1 
        . 1 1 1 . . . 1 1 . . 1 1 . . . 
        1 1 1 1 1 1 1 1 1 1 1 1 . . . . 
        . . . . . . . . . . . . 1 1 1 1 
        `, SpriteKind.Web)
    webb.setPosition(x, y)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.MommyDino, function (sprite, otherSprite) {
    info.changeLifeBy(-3)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    bouncevx = otherSprite.vx / Math.abs(otherSprite.vx) * 100
    sprite.vx = bouncevx
    if (controller.left.isPressed() || controller.right.isPressed()) {
        sprite.vx = bouncevx * 2
        console.log(sprite.vx)
    }
    pause(250)
    sprite.vx = 0
    pause(250)
    sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
})
scene.onHitWall(SpriteKind.Rock, function (sprite, location) {
    if (sprite.isHittingTile(CollisionDirection.Bottom)) {
        if (sprite.vy > 5) {
            sprite.vy = sprite.vy * -1 * 0.67
        }
        if (sprite.vy <= 5 && sprite.vy >= -5) {
            sprite.destroy(effects.spray, 100)
        }
    } else {
        sprite.destroy(effects.spray, 100)
    }
})
function create_mommydinoproj () {
    vxval2 = mommydino.vx / Math.abs(mommydino.vx) * 100
    rock2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 4 4 4 4 4 . . . . . . 
        . . . 4 4 4 5 5 5 d 4 4 4 4 . . 
        . . 4 d 5 d 5 5 5 d d d 4 4 . . 
        . . 4 5 5 1 1 1 d d 5 5 5 4 . . 
        . 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . 
        . 4 d d 1 1 5 5 5 1 1 5 5 d 4 . 
        . 4 5 5 1 1 5 1 1 5 5 d d d 4 . 
        . 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . 
        . . 2 4 d d 5 5 5 5 d d 5 4 . . 
        . . . 2 2 4 d 5 5 d d 4 4 . . . 
        . . 2 2 2 2 2 4 4 4 2 2 2 . . . 
        . . . 2 2 4 4 4 4 4 4 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, SpriteKind.Rock)
    rock2.x = mommydino.x
    rock2.y = mommydino.y
    rock2.x += mommydino.vx / Math.abs(mommydino.vx) * 20
    rock2.y += -3
    rock2.vx = vxval2
    rock2.ay = 100
}
function create_mommydino () {
    mommydino = sprites.create(img`
        ........................
        ........................
        ...........ccc..........
        ...........cccc.........
        .......ccc..ccccccc.....
        .......cccccc555555cc...
        ........ccb5555555555c..
        .....cc..b555555555555c.
        .....cccb555555ff155555c
        ......cb55555555ff55d55c
        ......b5555555555555555c
        ...cc.b555dd5555bb13bbc.
        ...cccd55ddddd555b3335c.
        .....bdddddddddd55b335c.
        ..cccdddddb55bbddd5555c.
        ..cccdddddb555bbbbcccc..
        ...ccddddddb5555cbcdc...
        ccccbdddddd5cb55cbcc....
        cddddddddd5555ccbbc.....
        .cddddddbdd555bbbcc.....
        ..ccdddbbbdd55cbcdc.....
        ....ccbbcbddddccdddcc...
        ......cccdd555dcccccc...
        ........cccccccc........
        `, SpriteKind.MommyDino)
    mommydino.setPosition(1395, 184)
    mommydino.ay = 290
    mommydino.z = -1
    scene.placeOnRandomTile(mommydino, 13)
}
function create_map () {
    if (level == 1) {
        scene.setBackgroundImage(img`
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999999dd999999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddd99999999999999999999999999999999999999999999999999999999999999999999999
            9999999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            999999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999999999999999
            99999999999999999999999999999999999999999999999999999999999999999999999999999999999ddddddd9999999999999999999999999999999999999999999999999999999999dddddddddd99
            dd999999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999999999999ddddddddddddd
            ddddd999999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            dddddd99999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd9999999999999999999999999999999999999999999999999999999dddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd999999999999999999999999999999999999999999999999ddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999dddddddd99999999999999999999999999999999999999999999999dddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd9999999999999999999999999999999999999999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999ddddddddddddddddddddddd
            ddddddd999999999999999999999999999999999ddd9999999999999999999999999999999999999999ddddddddd999999999999999999999999999999999999999999999dd7777777777777dddddddd
            ddddddd999999999999999999999999999999ddddddd999999999999999999999999999999999999999dddddddddd999999999999999999999999999999999999999977777777777777777777ddddddd
            ddddddd9999999999999999999999999999ddddddddd999999999999999999999999999999999999999dddddddddd9999999999999999999999999999999999999777777777777777777777777dddddd
            ddddddd99999999999999999999999999dddddddddddd99999999999999999999999999999999999999ddddddddddd999999999999977777777777777777777777777777777777777777777777dddddd
            ddddddd9999999999999999999999999ddddddddddddd9999999999999999999999999999999999999dddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999999999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd977777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999999999997999999999999dddddddddddddd999999999999999999999999999999999999ddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd999997777777799999999999dddddddddddddd999999999999999999999999dd999999999dddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd997777777777799999999999ddddddddddddddd9999999999999999999999ddddddd9999ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999dddddddddd99ddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777779999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddddd77777777777777999999999dddddddddddddddd999999999999999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777dddddd
            ddddd7777777777777777999999999dddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777999999ddddddddddddddddddd99999999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            dddd77777777777777777ddddddddddddddddddddddddd99ddd999999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777ddddddddddddddddddddddddd99dddd99999999999999ddddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777dddddd
            ddd777777777777777777dddddddddddddddddddddddddddddddd9999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd999999999999dddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            dd7777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777ddddd
            d77777777777777777777ddddddddddddddddddddddddddddddddd99999999999ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777dddd
            d77777777777777777777dddddddddddd77777dddddddddddddddd99999999999dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777dddd
            7777777777777777777777ddddddddddd7777777dddddddddddddd99999999999ddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777dddddddddd77777777dddddddddddddd9999999999dddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777ddddddd77777777777dddddddddddddddddddddd9dddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777dddd777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777dddddddddddddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777ddddddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777ddddddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            777777777777777777777777777777777777777777777777777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777ddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777dddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            77777777777777777777777777777777777777777777777777777777dddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777dddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
            `)
        scene.setTileMap(img`
            ........................................
            ........................................
            .....................aa.................
            ........................................
            .555....................................
            ....................eeeeeee.............
            ...................e....................
            ..............................e........f
            eeeee11..1111eeeeeeeeeeeeeeee....eeeeeee
            eeeeeee22eeeeeeeeeeeeeeeeeeee2222eeeeeee
            `)
        game.showLongText("space bar to throw fireball", DialogLayout.Bottom)
    } else if (level == 2) {
        scene.setBackgroundImage(img`
            fffffffcbccffffffffffcfbddddddddddd111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbffcddffffffcfcfffff
            fffffffccffffcffffffbfddddddddd11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfccdbffffffffffffff
            fffffffcffffffbffffffddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffcbfffffffffffcdcf
            ffffffcffffffffbdffffddddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffdfbfffffff
            fcfffffffcdcdffdffdccdddddd11111111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbffffffdffffffff
            fffffffffdbddcfffffcddddd1111111111111111111111111111111111111111111dddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfcfffffcfffbfff
            fcffffbffbffffffffbbddddd111111111111111111111111111111111111111111d11dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbdcfffffffffbffff
            fcbffffffcfffffffcdddd1111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccffffffffffffff
            fdcccffffdbffcffccdddd111111111111111111cc1111111111111111111111111d111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffff
            fffffffffffffffcdddd1111111111111111111cccc111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddfcfffffffffffff
            ffffffffffffffcbddd11111111111111111111cccc11111111111111111111111111111dddd1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffffff
            fffffffddcfffdddddd11111111111111111111ccccc11111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffffff
            fffffffdddbffbddd111111111111111111111cccccc111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffcffffffffff
            ffffffcbfcccddddd111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfffffffffffff
            fffffffffcfddddd1111111111111111111111ccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcffffffffffff
            ffffffffdfcdddd1111111d11111d111111111cccccccc11111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfbfffcfffffff
            ffffffffcfbddd11111111111111111111111ccccccccc1111111111111111111111111111111111d1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfffdffffffff
            fffffffcdcdddd11111111111111111111111cccccccccc1111111ccc111111111ccc111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddffffffffffff
            fffffbfffcddd11111111111111111111111ccccccccccc1111111cccc111c1111ccc11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fccffdcbfbddd11111111111111111111111cccccccccccc111111cccc11ccc111ccc1111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            fffcffcdfbdd11111111111111111111111ccccccccccccccc1111cc1c11ccc11cccc111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffffffff
            ffddfffbbbdd1111111111111111111111cccccccccccccccc1111cc1c11ccc11c11c111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcfccfffffffff
            cfdffffbcdd11111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbfcdfffffffff
            ffffffccdd111111111111111111111111cccccccccccccccc1111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccfbfffffffff
            ffcfffbdb111111111111111111111111111cccccccccccc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbdddddddddddddddcfdbffffffff
            fffffcddddd1111111111111111111111111cc1cc1ccd1cc111111ccccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbfcfffffffff
            fffffbdddd11111111111111111111111111cc1cc1ccc1cc1111111ccccccccccccc1111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddddcfcfffffffff
            ffffcbddddd1111111111111111111111111cccccccccccc11111111ccccccccccc11111111111111111d1ddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbcfffffffffff
            fffccddddd11111111111111111111111111cccccccccccc111111111cccccccccc11111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbdddddddddddddddbbffffffffffff
            ffdcbddddd11111111111111111111111111cccccccccccc111111111ccccccccc111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddbddddddddddddddddbffffffffffcf
            ffccddddddd11111111111111111111111111cccccccccc1111111111ccccccccc1111111111111111111dddddddddddddddddddddddddddddddddddddddddddddbddddddbbdddddddbcffffffffffff
            ffcbdddddd1111111111111111111111111111cccccccc11b11111111ccccccccc111111111111bb1111ddddddddddddddddddddddddddddddddddddddddddbbddbbdddddbbdddddddbccfffffffffff
            ffcbddddd111111111111111111111111111111cccccccbccccccc111ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbddbddddddbddddddddfffffffffffff
            fcbbdddddd1111111111cccb1ccc1111cccc111ccccccccccccccccc1ccccccccc1111111111111b1111dddddddddddddddddddddddddddddddddddddddddddbbbdbbdddddbdbddddbbbcfffffffffff
            fcddddddd1111111111ccccb1cccc11ccccc111cccccccccbbccbbbccccccccccc1111111111111b111ddddddddddddddddddddddddddbdddddddddddddddddddbddbbddddbbbddbbbcfffffffffffff
            ccddddddd1111111111cccccbcccc11ccccc111cccccccccbbcccbbccccccccccc111111111111111111dddddddddddddddddddddddddbbdddddddddddddddddddbddbddddbbddbbbbffffffffffffff
            ddddddddd1111111111ccc1ccccccccc1ccc111ccccccccccccccccccccccccccc1111111111111b111bdddddddddddddddddddddddddbbdddddddddddddddddddbbbbddddbddbbbbccfffffffffffff
            dddddddd11111111111cc11ccc11cccc1ccc111ccccccccc1111cccccccccccccc1111111111111b111bddd1dddddddddddddddddddddbdddbdddddddddddddddddbbbddddbbbbbbbccfffffffffffff
            dddddddd11111111111cccccccbcccccccccc11cccccccc1111111cccccccccccc1111111111111b111bddd1dddddddddddddddddddddbddbbdddddddddddddddddbbbdddbbbbbbbbccfffffffffffff
            dddddddd11111111111ccccccccccccccccc111ccccccc1111b1111ccccccccccc1111111111111b1dbb1ddddddddddddddbbbbddddddbddbdddddddddddddddddddbbdddbbbbbbbccffffffffffffff
            dddddddddd111111111cccccccccccccccc1bb1ccccccc1111bb111ccccccccccc11111b1111111b1dbbdddddddddddddddbddbbbddddbdbddddddddddddddddddddbbddbbbbbbbbcbffffffffffffff
            dddddddddd1111111111cccccccccccccccccccccccccc111111111cccccccccccbb11111111111b1db1dddddddddddddddbdddbbddddbbdddddddddddddddddddddbbdbbbbbbbbccfffffffffffffff
            dddddddddd11111111111cccccccccccccbccbbccccccc1111111b1cccccccccccbbbb111111111b1db1ddd1ddddddddddbbdddbbbddbbdddddddddddbbddddddddbbbbbbbbbbbcbbcffffffffffffff
            ddddddddd1d11111111111ccccccccccccbbcbbccccccc1111111b1cccccccccccc1b1111111111bbbddddd1dddddddddbbdddddbbdbbddddddddddddbdddddddddbbbbbbbbbbccbcfffffffffffffff
            ddddddddd1d11b11111111ccccccccccccbccbcccccccc111111bb1cccccccccccc111111111111bbbdddddddddddddddbbdddddbbbbbddddddddddddbdddddddddbbbbbbbbbbbbcffffffffffffffff
            ddddddddd1d11b11111111cccccccccccccccccccccccc1111111bbcccccccccccc11111111111bbbdddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbccfffffffffffffffff
            dddddddddddddbbd1bb111cccccccccccc111d1cccccccd1d1111bbcccccccccccc11111111111bbb1ddddddddddddddddddddddbbbbddddddddddddbbdddddbddbbbbbbbbbbbbccffffffffffffffff
            dddddddddddddbbd1b1111ccccccccccccddbccccccccccc1ddddbccccccccccccc11111111bb1bb11dddbddddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbd1b11bbccccccccccccccccccccccccccbcccccccccccccccccb1d111111bbbbbdddddbbdddddddddddddddddbbbbddddddddddddbbdddddbdbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddbb1b11bbccccccccccccccccccccccccccccccccccccccccccccd1111b1111bbb11ddddbbdddddddddddddddddbbbbddddddddddddbbdddddbbbbbbbbbbbbbbcffffffffffffffffff
            dddddddddddddddb1b1db1ccccccccccccccccccccccccccccccccccccccccccccc1111d1111bbb11dddddbbddddddddddddddddbbbbbddddddddddddbdddddbbbbbbbbbbbbbbbcfffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1111d1111bbbddddddddbddddddddddddddddbbbbbddddddddddddbbdddbbbbbbbbbbbbbbbcffffffffffffffffff
            ddddddddddddddddbb1bbdccccccccccccccccccccccccccccccccccccccccccccb1b11d1111bbbddddddddbbdbbddddddddddddbbbbbddddddddddddbbddbbbbbbbbbbbbbbbcfcffffffffffffffcff
            ddddddddddddddddbb1b11cccccccccccccccccccccccccccccccccccccccccccccbbb111111bbbddddddddbbdbdddddddbbddddbbbbbdddddddddddbbbbbbbbbbbbbbbbbbbccfffffffffffffffffff
            ddddddddddddddddbddbd1ccccccccccccccccccccccccccccccccccccccccccccbbb111d111bbbb1dddddddbbbdddddddbbddddbbbbbddddddddbdbbbbbbbbbbbbbbbbbbbbcfcffffffffffffffffff
            ddddddddddddddddbbb111cccccccccccccccccccccccccccccccccccccccccccc1bb1111111bbbbddddddddbbbdddddddbdddddbbbbbddddbdddbdbbbbbbbbbbbbbbbbbbbbffffffffffffffffffcff
            ddddddddddddddddbbd111ccccccccccccccccccccccccccccccccccccccccccccd1bbb11111bbbbdddddddddbbddddddbbdddddbbbbbdddbbdddbbbbbbbbdbbbbbbbbbbbbcfffffffffffffffffffff
            ddddddddddddddddbbdd1dcccccccccccccccccccccccccccccccccccccccccccc111bb11111bbbbdddd1ddddbbddddddbbdddddbbbbbdddbbddddddbdddddddddbbbbbbbbcfffffffcfffffffffffff
            dddddddbbdddddbbbbddddcccccccccccccccccccccccccccccccccccccccccccc111bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbddddbdbdddddddddddddddddddddddfffffffffffffffffffff
            dbddddddddbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccbcccccb11bb1111bbbbbdddddddddbbbdddddbbdddddbbbbbbdddddddddddddddbddddddddddbbcfffffffffffffffffffff
            ddbddbddbbbbbbbbbbbbbbcccccccccccccccccccccccccccccbccccccccccccccd11b11111bbbbbbddddddddbbbdddddbbddddbbbbbbdddddddddddddddddddddddddddbcffffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccc111bb111bbbbbbbbdddddddbbbbddddbbdddbbbbbbddddddddddddddddddddddddddbbbcdfffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbb1bb1bbbbbbbbbbbbdddddbbbbddddbbddbbbbddbbdddddddddddddddddddbddddbccfddfffffffffffffffffffff
            dbbbbbbbbbbbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddddddddddddbdddddddddddddbcffffffffffffffffffffffffff
            bbbbbbbbbbbbbbbbbbbbbbccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbddddbdddddddddddddddddddddddddddccffffffffffffffffffffffffff
            bbbbbbbbddbbbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbbbddddddddddbddddddddddddddddddddddbdddddbbbffbdfffffffffffffffffffffff
            bbbbbbbdddddbbbbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbbbbbbbbbbbddddbddddddddbdddddddddddddddddddddddddddbddfcbfdffffffffffffffffffffff
            bbbbddddddddddddddbbbbcccccccccccccccccccccccccccccccccccccccccccccccbbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddbdffdffbcfffffffffffffffffffff
            bbbddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccccccbbbdbbdbdddddddbddddbddddddddddddddddddddddddddddddddddddddcffcdfffffffffffffffffcfffffff
            bbdddddddddddddbbbbbbbcccccccccccccccccccccccccccccccccccccccccccccbcccbbbbbddbdddddddddddddddddddddddddddddddddddddddddddddddddbcdffdfcdfffffffffffffffffffffff
            bddddddddddddddbdbbbbccccccccccccccccccccccccccccccccccccccccccbcbbbcbddddddddddddbddddddddddddddddddddddddddddddddddbddddddddddbfcffffcffffffffffffffffffffffff
            ddddddddddddddddbdbbbcccccccccccccccccccccccccccccccccccccccccbbcddddcdbddddbbddddbbdddddddddddbdddddddddddddddddddbddddddddddddcbdffffffffffbfffffcffffffffcbff
            dbdbddddddddbdbdbbbbccccccccccccccccccccccccccccccccccbcccbcbbdbcddddddddddddddddddddddddbddddddddddddddddddddddddddddddddddddddcffffffffffffffffffffffffcfffddf
            ddddddbddddddddbbbbbcccccccccccccccccccccccccccccccbbcbccbbbbdbdddddddddddbbbddddddddddddddddddddddddddddddddddddddddddddddddddbffffffffffffffffffffffffcdfffcff
            ddddddddddddbdbbbbbbccccccccccccccccccccccccccccccbbbbbbdddddddbddddddddddddbddddddddddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffdffff
            dddddddddddddbbbbbbcccccccccccccccccccccccccccccbbbcddddbdbcdddcddddddddddddddddbdddbddddddddddbdddddddddddddddddddddddddddddddccfffffffffffffffffffffffffffffff
            ddddddddddddbbbbbbbcccccccccccccccccccccccccccbbddddddddbdbddddbdddddddddddddddddddddddddbbbddddddddddddddddddddddddddddddddddcfcffffffffffffffffcffffffffffffff
            bdbddddddbddbbbbbbccccccccccccccccccccccccccbddddbbdddddddddddddddddddbddddddddddddddddddddddddddddbdbdddddddddddddddddddddddbffffffffcffffffffffffffffcfcffffff
            dbddbdddddddbbbbcccccccccccccccccccccccccccdbdbdddddddddddddddddddddddbddddddddbdcbddddddddddddddddddddddddddddddddddddddddddcfffffffffffffffffffffffffffcffffff
            dddddddddddddddddbcbcccccccccccccccccccccbddcbbcdddbddddddddddddcdbddddddddddddddddddddbdddddddddddddddddddddddddddddddddddddfffbffffffffffffffffffffffffffcffff
            ddddddddddddcddddddbbccccccccccccccccbcbcbddddddbdbcddddddddddddddddddddddddddcbddddddddddddbdddddddddddddddddddddddddddddddcfffdfffffffffffffffffffffffffffffff
            dddddddddddbcdddddbddcbbcccccccbcccbbbbbccddbddddbdbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbbddddddddddddddbffffcfffffffffffffffffffffffffffffff
            bdddddddddcdddddddddbcbbbcbbbcbbbdddbddddbddddddddddddddddbddddddddddddddddbcdddcddddddddddddddddddddddddddccddddddddddddddbddfffffffffffcffffffffffffffffcccfff
            ddddddddddddbddddbdddbbdbcbddbdbddddddddddbdddddddbdddddcddddddddddddbddddddddddddddddbddddddddbdddddddddddddddddddddddddddcdfffffffffffffffffffffffffffffccfffc
            dddcdddddddddddddddddcdddddddbdbbbdddbddddddddddddccdddddbddddddddcddddddddcddddddddddddddddddddddddddddddddddddddddcddddddcffffffffffffffffffffffffffffffffffff
            dddbdddddddddddddddddcdddddddcbddddbbddddddcdbddbdddddddddddbcbbbdcbddddddcbddddddddddddddddddddddddddddbddddddddddddddddddcfffffffffffffffcffffffffffffffffffff
            bdddddddddddddddddddddddddddbddbdbcbdbbddddbdddddddddddddbbbbbbcbbbbcdbbddddbddbcddddddddddddddddbdddddddddddddddddddddddddcffffbdcffffffffcffffffffffcfffffffff
            dddddddddddddddddddddddddddbbdddddbcdddddddbddddcdbbdbbbbcccbbccccbcbcbbbbbbbbccbcbbbdbbbbddddddddddddddddddddddddddbbbbdddcffffcfbfffffffffffffffffffffffffffff
            dddddddddddddddddddbdddddcbbddddddbbdddddddbbddddbbbbbccccccccccccccccccccccccccccbccbcbbccbdbbdddddddddddddddddddbbbbbbddbccfddfffffffffffbbfffffffffffffffffff
            bbbdddddddbddddddddddddbddcddbdddddbbddbccbcccbbcbbbcbccccccccccccccccccccccccccbcccccccccccccbbbdddddddddddddbbbbccccbbddccfffffcffffffffffffffffffffffffffffff
            cccbddddddddddddddddddddddbdddddbbbcbcccccbcccccccccccccccccccccccccccccccccccccccccccccccccccbccccbdbdddbdbbbcccbccbbbdddbfffffdfffffffffffffffffffffffffffffff
            ccccddbdddddddddddcddddccbbbccbbcbbccccccbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbdddddfffffffffffffffcfffffffffffffffffffff
            ccbbbbbddddddddddbcdddcccccccccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccccccccccccccccbbddddddbfffffffffffffffffffffffffffffffffffff
            ccccccbcbbbdddddbcccbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbddddddddbfffffffffffffffffffffffffffffffffffff
            cccccccbccbbbcbccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbdddddddddbcffffffffffffffffcbfffffffffffffffffff
            cccccccccccbcbcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbccccccccccccccccbbdddddbdddbcfffffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbbcccccccccccccbbbbddddddddddbcffcffffffffffffffffffffffffffffffffff
            ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcccbbcccccbbcccccccbbbbdddddddddddbccffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccbcbddddddbbcbbbdbccccbbdddddbdddddddddcffdffdffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccccccbbccccccccccccccccccccccccccccccccccccccccbcccbbbbbbddddddddddddddbbbbbbdddddcdddddddddddbcfffffffffffffffffffffffffffffffffffffc
            cccccccccccccccccccccccccccccbbddcbccccbccccccccccccccccccccccccccccccbdbbbbddddbdddddbddddddddddddddddddddddccdddddddddcfffffffffffffffffffffffffffffffffffffff
            cccccccccccccccccccccccccccbbbcddbbcbbbbbccbbcccccccccccccccccccccbbbddddbbdddddbdccddbdddddddddddddddddddddddddddddddbcffffffffffffffffffffcfffffffffffffffffff
            ccccccccccccccccccccccccccbddddddbbbbddbbbbdbccccccccccccccccccbcddddddddddbddcbdccbddddddddddddddddddddddddddddddddcbfdffffffffffffffffffffffffffffffffffffffff
            cccccccccccccccbccccccccbcdddddddddbddddddbbbddbbbbccccccccccccdbdddddddddddbddddddddddddddddddddddddddddddddddddddcfcfffffffffffffffffcbffffffffffffffcffffffff
            cccccccccccccccccccccfccccbddddddddddddddbcbcdddddbbbcccccbbbcdddddddbdddddddddddddddddddddddddddddddddddddddddddcdffbffffffffffffffffffbffffffffffffcbcffffffff
            ccccccccccccccccccfccffffccbdddddddddddddddbdbddddddcdbcbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffdffcfffffbfffffffffdccfffffffffffffffffffff
            cccccccccccccccffcffcccffffccdddddddddddddcccdddddbdbddbdddddddddddddddddddddddddddddddddddddddddddddddddddddddbcffffffddfffffffffffffffddffffffffffffffffffffff
            cccccccfccffffcffffffcdfffffcfddddddddddddbccbddddbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbcfffffffffdfffffffffcffffffffffffffbffffffffffffff
            ccfcccfffffffffffffffffffffcfccddddddddddbdcdddddddddddddddddddddddddddddddddddddddddddddbccbbccbcbbbdbbbdbfffdffffffffffffffffcfffffffffffffddfffffffffffffffff
            cffcccffffffffffffffffffffffbcfcdddddddddccbdbdddddddddddddddddddddddddddddddddddddddbddfccccbfcfffffcbcfffcffcffffffffffccfffcffffffffffffffdbfffffffffffffffff
            fcfffffffffffffffffffffffffffffbcbbdddddbcbcdbbbcbdbddddddddddddddddddddddddddddddbbccffffffffffffffffcbfffffffffffdffffcfffffffffffffffffffccffffffffffffffffff
            fffffffffffffffffffffffffffffffcfffcdcfffcbcfcbccfccbddddddddddddddddddddddddddddbbbcfffffffffffffffffffcdbffffffffffffcdfdfffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffcffffffdffdfcffffccddddddddddddddddddddddddbdccfffffffffffffffffffffcffffcffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffdfffffbfbfffffbcfbffffffcccbcbcbdddddddddddddccccffffffffffffffffffffffffffffffffffffffffffcfffffffccfffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffccffffffffffffffdfdcfffffddffcffccccffbdbbbdddcfdfffffffffffffffffffffffffffffffffffffffffffffffffffffffffbfffffffffffffffffffffffff
            fffffffffffffffffffcffffffffffffffffffffffffffffffffddfcfbfffffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
            ffffffffffffffffffffffffffffffffffffffffffffffcfffffdcfffddffffffffffffffffbffffcbffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffffffffcffcfffff
            ffffffffffffffffffffffdfffffffffcfffffffbffffffffffdffffffffffffffffffcfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbdffffffffffffffffffffffffffff
            fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffbffffbffffdfffcddcfffffffffffffffff
            fffffffffffffffffffffffffffffffffbffffffbffffffffffffffffffffffbfcffffcfffffffffffffffcffffffffffffffffffffffffffffffffffffffffffffffffffffdddffffffffffccffffff
            `)
        scene.setTileMap(img`
            ............e.....e....e.
            ...........ee.....e...ee.
            f...........e.....e...e..
            eeeee....999ee........e..
            ......e..................
            .......e.................
            ........eeee..eeeeee.....
            ..eeeeeeeeeeeeee....eee..
            ...........88..........e.
            .........................
            ..............eeeeeeeeeee
            .....eeeeeeeeeeeeeeeeeeee
            ...e.....................
            .........................
            ee......66666............
            ..ee.....................
            .....e...................
            .......eeeeeeeeeeee......
            .......eeeeeeeeeeee.e....
            .........55555........e..
            .........................
            .......eeeeeeeeeeeeeeeeee
            .......eeeeeeeeeeeeeeeeee
            2222222222222222222222222
            2222222222222222222222222
            `)
        create_web(280, 88)
        create_web(270, 88)
        create_web(270, 80)
        create_web(280, 80)
        game.showLongText("x to force push, consumes 5 points. force push can be used on enemies and webs. fireballs can also destroy webs", DialogLayout.Bottom)
    } else {
        scene.setBackgroundImage(img`
            8fffffffffffffffffffffffff88fffff88ffff8998889999999989988888989999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffffffffffffff8fffff88ff9f88889889999999989998888898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffffffffffff8fffff889ff9988888988999989998999888889899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffffffffffff8fff8f8f99ff998888898899988999899988888989999899999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffffffffffff8fff8f8fff998998888889889998899989998898898999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffffffffff8fff8f8fffff98888888888888999889998899889888899999699999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffffffffff8ffff88ffffff99888889988888999988999889988988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffffffff88fff8ffff8ff889988888998898988998899988998899888999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffffffff8fff8f8ff8ff8888988888899889988899889998899989988889998999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffffff8ffffff888888ff88888888888889988998889988999889998999888999999999989999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffff8ffffff88888fff888888888888889999999888998899988999899988899999999999999999999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffff8ffffff88888ff88888888888888888898899988899889998899989999889998999999999999999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffff8fff88f888888f888888888888888888889889998889988999889998989988999999999999899999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffff8ffff88f8888888888888888888888888888988899888998889988999988999899999999899998999999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffff8ffff88888888888888888888888889888888998889988899888998899998889989999999998999969999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffffff888f88888888888888888888888988888899888999889988899888999888899999999999989999999999999999999999999999999999999999999999999999999999999999999999
            fffffffffffffff888f888888888888888888888888898888889988899988998889988899998888999999999999899999999999999999999999999999999999999999999999999999999999999999999
            ffffffffffffff8fff8888888888888888888888888889888888998889998889988998889999988889999989999998999999999999999999999999999999999999999999999999999999999999999999
            fffffff8fffff8fff88888888888888888888888888888988888899888999888998899888999999889999998999999989999999999999999999999999999999999999999999999999999999999999999
            ffffff8fffff8fff88f888888888888888888888888888898888889988899988899888998899999999999999989999999899999999999999999999999999999999999999999999999999999999999999
            ffffffff8f88fff88ff888888888888888888888888888889888888999889998889988899888999999899999999899999998999989999999999999999999999999999999999999999999999999999999
            fffffff8888ff888ff8888888888888888888888888888888988888899999999888999899988899999988999999998899999999998899999999999999999999999999999999999999999999999999999
            ff8fff888ffff8fff88888888888888888888888888888888888888889999999988999999999888999998899999999988889999999988999999999999999999999999999999999999999999999999999
            fffff888ffff8ff8888888888888888888888888888888888888888889999989998889999988988899999988899999999998899999999999999999999999999999999999999999999999999999999999
            ffff88fffff8ff88888888888888888888888888888888888888888889999888999888999988889999999999888999999998988999999999999999999999999999999999999999999999999999999999
            fff88fff88fff888888888888888888888888888888888888888888888988988899998889999888899999999999889999999998889999999999999999999999999999999999999999999999999999999
            f8888ff88ffff888888888888888888888888888888888888888888888898899888998888999998889999888999998899999999988889899999999999999999999999999899999999999999999999999
            88fff888ffff8888888888888888888888888888888888888888888888889888988898888889999988899988889999988888999999988888999999999899999999999999999999999999999999999999
            8fff88ffff888888888888888888888888888888888888888888888888888988899888988888999998888999888889999888888999999988888898999999888999999999999999999999999999999999
            ff888ffff8888888888888888888888888888888888888888888888888888899888988898888899999988889999888899999888889999999888888899999999998889999999999999999999999999999
            f888ffff88888888888888888888888888888888888888888888888889988888888898888988888999999888899998888899999888899999999888888889999999999988888999999999999888888888
            88ffff8888888888888888888888888888888888888888888888888888998888888889988898888999999998888999998888999999888899999998889999988888999999999899999999998888888888
            8ffff88888888888888888888888888888888888888888888888888888899888888988898899988889999999988988999998889999999988999999999999999999999999999999999999999999999999
            8fff888888888888888888888888888888888888888888888888888888888988888888888999999888999999999988889999998889999999989999989999999999999999999999999999999999999999
            ff88888888888888888888888888888888888888888888888888888888888898888888988999999998889999999999888899999998899999999999999999999999988888889999999999999999999999
            f888888888888888888888888888888888888888888888888888888888888889988888899998899999888899999999998888899999998899999999999999899999999988888888888888888888889999
            6888888888888888888888888888888888888888888888888888888888888888898888888898888999998888999999999998888999999998899999999999999999999999999988888888888888888888
            6888888888888888888888888888888888888888888888888888888888888888888888888888988889999988888899999999988888999999998899999999999999999999999999999999999999999999
            6688888888888888888888888888888888888888888888888888888888888888888888888888899888889999998888999999999988888999999998899999999999999999999999999999999999999999
            66f8888888888888888888888888888888888888888888888888888888888888888888888888889999888899999988888999988999988888999999999999999999999999999899999999999999999999
            66f8888888888888888888888888888888888888888888888888888888888888888888889888888898998888899999988889988889999988999999999999999999999999999999999999999999999999
            66f8888888888888888888888888888888888888888888888888888888888888888888888998888888889998888999999989999888889999999999999888999999998888888888889999999888888899
            66f8888888888888888888888888888888888888888888888888888888888888888888888889988888888999888888999999999999888899999999999988888999999999998899999999888889999999
            66ff888888888888888888888888888888888888888888888888888888888888888888888888899888888889988888889999999999998888899999999999888888899999999999988889888889999999
            66fff88888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888899998889999988888999989999998999999999999999998888888999999999
            666ff88888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888889998888888999988899888889999999999888999999999999888888888889
            666fff8888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888899999899888888999999998888889999999999998888889999999888888888
            666fff6888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888889888999988998889999998888889999999998888888888888888999999
            666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888899888888888888888888888999998888888999999888888999999999998888889999999999
            666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888898888888888888888888889999999888888888999888899888888888888889999999999
            666ff66688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998899998888888889999989999999999999999999999
            666ff6666f888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889999988889999999999999888888888888fff
            666fff66fff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888888888fff668
            6666fffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888998888888888888888888888888888888888888888888888fff666666
            66666fffffff888888888f888888888888888888888888888888888888888888888888888888888888888888888888888888888888899988888888888888888888888888888888888888fffff6666866
            66666fffffff888888f8f6688888888888888888888888888888888888888888888888888888888888888888888888888888888888888899998888888888888888888888888888888888fff886666666
            666666ffff8666888ffff66f8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff866666666
            666666ffff8666888ffff666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889988888888888888899999996ff66666866
            666666fff68666888ffff666f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888888888ff8f666666666
            666666ff668666f888fff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888889998888888888fffff666666668
            6666666f6666666f8866f666ff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff8666666668
            66666666666866fff86666668ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
            6666cc666668fffff86666666ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffff6666666666
            696ccccc6668fff8ff6666666888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fffff8888ffff86666666666
            96cccccc66688fff6f866666688888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888fff8ffff88fff866666666666
            96ccccbb66668ff66ff66666668f88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ffffffff8ffff666666666666
            96ccccbb66668ff666f8666666ffff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888ff6fffffffff6666666666666
            96ccccbb66668ff666f8666666ff8ff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666fffffff66666666666666
            99ccccbbc6666ff6666f666666fff8fff888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888f666ffffff866666666666666
            99ccccbbb6666ff6666f8666666ffffff88888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886888888886668fff66666644466666666
            69ccccbbb6666ff666668666666fff6ff8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888886668888886666ffff66666444449444466
            666cccbbb66666f666668f66666ff666ff888888888888888888888888888888888888888888888888888888888888888888888888888888ff888888fff888666888888666fff6666666444444444446
            6666cccbb66cccc66666ff666666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888888f6fff888ffff8886668888ff666f666666666442224444446
            666ccccbb6ccccbb6666f6f88666f666ff88888888888888888888888888888888888888888888888888888888888888888888888888886666f888ffffff88666688fff6666666666666442224444446
            66cccccbbcccccbb666666686666f666ff888888888888888888888888888888888888888888888888888888888888888888888888888f666ff888ff88ffff6666f8fff6666666666644442222224466
            6cccbbcbbbbbcccc6666f666666666666ff8888888888888888888888888888888888888888888888888888888888888888888888888f6666f888fff8888ff6666fffff6666666666644222424226666
            6cccbbbbbbbbcccc6668556666666f666ff8888888888888888888888888888888888888888888888888888888888888888888888888f666ff88fff88888886666fff666666666666444244444466666
            6cccbbccbbbccccc66685566666cccf666ff888888888888888888888888888888888888888888888888888888888888888888888888f666ff8fff888888886666886666666666666444244444466666
            6cccccccccccccc66665566666ccccc666fffff886888888888888888888888888888888888888888888888888888888888888888888f666ff8ffff888fff66666866f66666666666644444444466666
            8cccccccccccccc6666566666ccccbbc666fffff666888888888888888888888888888888888888888888888888888888888888ffff6f666f8fffffff8ff666666866f8ff666cbbb666c4b4444466668
            66ccccccccccccc6665566666ccccbbb666fffff6668888f88888888888888888888888888888888888888888888888888888f6666666666fffff8fffff666666666f666666bbbbbc66cbb4444c66668
            666cccccccccccc6665566666cccccbc6666fff866688ffff88888888888888888888888888888888888888888888888888886666666ff666fff6668f66666666666666666bbbcbcc66cbbcccccbc666
            6666ccccccccccc66655666666ccccbb6666ffff66688ffff888888888888888888888888888888888888888888888888888f666666fff666f666668666666666666666686bbbccccc66bbccc5bbbc66
            6666cccccccccc666655666666cccbbb666cccff6668ff68ff888888888888888888888888888888888888888888fffffffff666666ff666f6666666666666666666666666bbccccccccbbccc55bbcc6
            666ccccccccc44446655666666cccbbb6cccccc66668f666ff8888888ff88888888888888888888888888fff88888888888f6666666ff6666666666666f666666666666666cbccccccccccccb55cccc6
            666cccccccc64444444566666cccccbbbbbbbccc6666f666ff8588ff6666888888888ffffffff888888888888fffffffffff6666666f6666666666666668666666666666666cccccccccccccb556ccc6
            666ccccccc64444444445666ccbcccbbbbbbbcccf666f666f6658ff66666f88fff888888888888888888888fffffffffffff6666666f66666666666666666666666666666666ccccccccccccb556cc68
            666ccccccc6644442444446ccbbbcccbbbbbccbb86666666f665ff866666fffffff88888888ffff88ff8888f88888ff88886666666666666666666666866688666699666666666ccccccccccc556cc55
            666ccccccc6644222444444cccbbccccccccccbb666666666655f886666ffffffffffff888888888888ffffff8888888888666656666cccc6666666666668666666996666556666cccccccccc556c556
            666ccccccc64442244244444ccccccccccccccbb666666666655f8f6666fffffffff888888888888888888888888888888866655666cccbbc6666666666666666669996665566666ccccccccc5566556
            666ccccccc64444444244444cccccccccccccccc666666666655f88f6668ffffff8888ffffffffffffffff888888888888ff6655566ccbbbc66ccc66666666666669999995666666cccccccc55665566
            666ccccccc6444444444444ccccccccccccccccc666666666556f88ff666ff88fffffffffffffffffffffff8fffffffffff66655566cccbbc6ccbbcc6666666666699999556666666ccccccc55665566
            666ccccccc64444444422466666cccccccccccccc6666666655666866666ff88ffffffffff88f8888ff8888888ff888ff6666665666cccccbbccbbcc6666666666699999556666666866cccc55c66668
            666ccccccc66444444424566666cccccccccccccc6666666656666666666ff8888ffff555f88f8ffff888888fffffff6666666656666ccccbbcccccc6666666666669999556666666866cccc55c66668
            666cccccc666666444445566666cccccccccccccc66666665566666666666f88666fff5558888888888888888fffff66666666656666cccccccccccc6666666666666696556666666666cccc55c66666
            666ccccccc66666644445566666cccccccccccccc666666655666666666cc6866666ff65f88888fffffffffffffff666666666655666cccccccccccc6666666666666666656666666666cccc55c66666
            666ccccccc66666665565566666cccccccccccccc6666666566666666ccccc866666ff65ffffffffffff888888ff66666666666556666cccccccccc6666666666666666665566666666cccccc5666666
            66cccccccc66666665566666666ccccccc666cc666666666566666666cccbbc6666f66655ffffffffffff8888ff6666666666665666666ccccccccc66ff666666666666665566666666ccccc65566666
            66cccccccc666666665566666666cccccbb666666666666666666666ccccbbbb668f6665568888ffff888fffff666666655666655666666ccccccc66666666666666666666576666666ccccc65566666
            666cccccc6666666665566666666cccccbb666666666666666666666ccccccbb66ff6665566888ffffffffff66666666655666669666996cbbcccc66666422444666666666556666666ccccc55666666
            666cccccc6666666666566666666cccccbb6666666666666666ccccc6ccccccccc6f6665566fffffff8888866666666665566655999999cbbbcccc66644422444466666666556666666cccc655666666
            666cccccc6666666666556666666cccccbbb666665566666666cccbbcccccccccbc666655666888888ffff66666ffffff5566655999999ccbbccc666224222444466666666656666666cccc655666666
            666cccccc66666666665566666666cccccb666666656666666ccccbbccccccccbbbc6665566fffffffffff666ffffffff5566669959996ccccccc644224422444466666666656666666ccccc56666666
            66cccccccc6666666666566666666cccccbb66666655696666ccccbbcccccccccbcc6665566fffffffffff6fffffffff6656666655666cbbbcccc444444424224466666666655666666cccc556666666
            66ccccccc66666666666556666666cccccbb66666655966666cccccbbbccccccccc66665566fffffffffffffffffffff666665665566ccbbbccc6444444224444466666666655666666cccc556666666
            66cccccccc6666666666556666666ccccccb666666559666666ccccbbbccccccccc6666556ff8ffffffffffffffffff6666655665566ccbbcc666444444494444466666666655666666cccc556666666
            666ccccccc6666666666559666666cccccccc66666655444466cccccbccccccc66666665566ffffffffffffffff88866666655665666cbbbccc66644422444444468666666656666996cccc556666666
            666ccccccc6666666666559666666cccccccc666666544444444ccccccccccccf8666666666fffffffffffffffffff66666666666666cbbbccc66664444449444666668666666666999cccc556666bcc
            666ccccccc6666666666556966666ccccccccc666665444442444cccccccccc6f6666666666fffffffffffff88fffff6666666666666cbbcccc6666444444ccccc66686666666666cccccbb556666bbc
            66ccccccc66666666666556666666cccccccccc666654444224444cccccccbbcff666666666ffffffffffffffffffff6666666666666cccccc6666664444cbbbbbc66666666666ccccbbbbbb56b666cc
            66ccccccc66666666666566666666ccccccccccc66665442424444cccccccbbc68666666666fffffffff888888f8ff866666666666666cccc6666666644cbbbbbbcccc6666666cccbbbbbcbb66c666cc
            66ccccccc66666666666566666666ccccccbbbccc6665542422244cccccccbbc66666666666688888ff8888fffffff6666666666666666cccc666666666bbbbcbcccccc666666cccbbbbbccc666c66cc
            66ccccccc66666666665566666666ccccccbbbbcc6666444442244466ccccccc666665666666ffffffffffffffffff666666666666666cccccc6666666bbbccccccccccc66666ccccccccccc666c66cc
            66ccccccc66666666665566666ccccccccccbbbbb6664444444424446cccccbb666665666666fffffffffffffffff6666666666666666cccccc666666bbbbcccccccccccc66666ccccccccccc66666cc
            66ccccccc666666666655666ccccccccccccccbbb6664444444424446cccccbbb666656686666ffffffffffffffff666666666666666cccccccc66666bbbcccccccccccccc66666ccccccccccc6666cc
            66cccccccccccc666665566cccccccccccccccccb666b444444444446cccccbbb6666566f6666f66ffffff88888866666666666666666cccccccc666cbbccccccccccccccc66666cccccccccccc666cc
            66ccccccccccccc6666566ccccccccccccccccccc66ccb444444444666ccccbbb66655666666666666ffffffffff66666666666666666ccccccccccccccccccccccccccccc66666ccccccccccccc66cc
            66ccccccccccccc66665cccccccccccccccccccc666cccc6444444ccc6cccccbb6666566666666f6666fffffffff66666666666666666cccccccccccccccccccccccccccccc666cccccccccccccc66cc
            6cccccccccccccc66666ccccccccccccccccccc6666cccc6644bccccccccccccc8666666666666f66666ffffffff666666666666666666ccccccccccccccccccccccccccccccccccccccccccccccccc8
            6cccccccccccccc66666ccccccccccccccccccc666ccccc6666ccccccccccccccf666666666666ff6666ffffffff6666666666666666666ccccccccccccccc6cccccccccccccccccccccccccccccccc8
            `)
        scene.setTileMap(img`
            ...................aaaaaaaaaa.........................bbbbbbbbbb.....................cccccccccccccccccccc...............
            ..................a..........aaaaaaaaaaaaaaaaaabbbbbbb..........bbbb........cccccccccc..................................
            .................a.................................................bbbccccccc...........................................
            .............................................................................................e..........................
            ........................e...........................eee....................................eeee.........................
            .......................eeee....ee................eeeeeeee..........eee..................eeeeeeeeee......................
            ......................eeeeeeeeeeeeee22eeeeee22eeeeeeeeeeeeee22eeeeeeeeeeeeeeeee22eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee........
            .................e..eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.......
            ....5555......eee....................................................................ddddd..............................
            .............ee.........................................................e...............................................
            ...........eee..........................................................e........ee.............eee.....................
            ..........eee...........................................................ee......eeee...........eeeee................eeee
            .....eeeeeee2222222222222222222222222e...................................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeee2222222222222222222222222eeeeeeeeeeeeeeeee..................eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
            eeeeeeeeeeee222222222222222222222222222222222222222222eeeeeeeeeeeeeeeeee22222222222222222222222222eeeeeeeeeeeeeeeeeeeeee
            `)
        create_mommydino()
        game.showLongText("find dino king and kill him", DialogLayout.Bottom)
    }
    scene.setTile(14, img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b c c 
        d b b b b b b c d b b b b c b c 
        d b b b b b b c d b b b d d b c 
        d b b b b b b c d b b c b b b c 
        d b b b b b b c d b c c b b b c 
        d b b b b b b b d b c c b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b c c d b b b b b b c 
        d b b b b c c c d b b b b b b c 
        d b b b b c c b d b b b b b b b 
        c c c c c c c a c c c c c c c a 
        `, true)
    scene.setTile(15, img`
        b b b b b b b b b b b b b b b b 
        b c b e 4 4 4 4 4 4 4 4 e b c b 
        b b e 4 4 4 4 4 4 4 4 4 4 e b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b 4 4 4 4 4 4 4 4 4 4 4 4 b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b d 4 4 4 4 4 4 4 4 4 4 d b b 
        b b 4 d 4 4 4 4 4 4 4 4 d 4 b b 
        b b 4 4 d d d d d d d d 4 4 b b 
        b b c 4 4 4 4 4 4 4 4 4 4 c b b 
        b b b c c c c c c c c c c b b b 
        b c b b b b b b b b b b b b c b 
        b b b b b b b b b b b b b b b b 
        `, true)
    scene.setTile(1, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, true)
    scene.setTile(1, img`
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b c c 
        d b b b b b b c d b b b b c b c 
        d b b b b b b c d b b b d d b c 
        d b b b b b b c d b b c b b b c 
        d b b b b b b c d b c c b b b c 
        d b b b b b b b d b c c b b b b 
        c c c c c c b a c c c c c c b a 
        b d d d d d d c b d d d d d d c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b b c d b b b b b b c 
        d b b b b b c c d b b b b b b c 
        d b b b b c c c d b b b b b b c 
        d b b b b c c b d b b b b b b b 
        c c c c c c c a c c c c c c c a 
        `, true)
    scene.setTile(10, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(5, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(11, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(12, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(2, img`
        5 5 4 2 2 2 2 2 4 2 2 2 2 4 4 5 
        5 4 2 2 2 2 2 4 4 4 4 4 4 4 5 5 
        4 2 2 4 2 4 4 4 5 5 5 5 5 5 4 4 
        2 2 2 2 4 4 5 5 4 4 4 5 4 5 4 4 
        4 4 2 4 4 5 5 4 4 2 2 4 5 4 4 2 
        4 4 2 4 5 4 4 2 2 2 2 4 5 4 4 2 
        2 2 4 5 4 4 2 2 2 4 4 2 5 5 4 2 
        4 4 5 5 4 2 2 2 2 4 4 2 4 5 5 4 
        5 5 5 4 2 2 4 2 2 2 2 2 4 5 5 5 
        4 5 4 4 2 2 2 2 2 2 2 2 4 5 4 4 
        4 5 5 2 2 4 2 2 2 4 2 2 4 5 5 4 
        5 5 4 2 4 2 4 2 2 2 2 4 5 5 5 5 
        4 5 5 4 2 4 2 2 2 2 2 4 5 4 4 4 
        4 5 5 5 2 2 2 4 4 4 5 5 5 4 2 2 
        4 5 5 4 5 5 5 5 5 5 5 4 4 2 2 2 
        4 5 5 4 4 4 4 4 4 4 4 2 2 2 4 4 
        `, true)
    scene.setTile(6, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(7, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
    scene.setTile(8, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, false)
}
sprites.onOverlap(SpriteKind.Web, SpriteKind.Field, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.vx = 100 * direction
    timer.after(200, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        timer.after(1000, function () {
            sprite.vx = 0
        })
    })
    sprite.z += 2
    if (sprite.z >= 4) {
        sprite.destroy(effects.spray, 500)
    }
})
function guiseppe_stand () {
    giuseppe_stand = animation.createAnimation(ActionKind.stand, 200)
    giuseppe_stand.addAnimationFrame(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `)
    animation.attachAnimation(guiseppe, giuseppe_stand)
}
sprites.onOverlap(SpriteKind.Spidey, SpriteKind.Field, function (sprite, otherSprite) {
    sprite.setFlag(SpriteFlag.GhostThroughSprites, true)
    sprite.vx = 100 * direction
    sprite.sx = 1.5
    timer.after(200, function () {
        sprite.setFlag(SpriteFlag.GhostThroughSprites, false)
        timer.after(1000, function () {
            sprite.sx = 1
        })
    })
    sprite.z += -2
    if (sprite.z <= -4) {
        sprite.destroy(effects.spray, 500)
    }
})
function create_rock (x: number, y: number) {
    rock_block = sprites.create(img`
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 
        `, SpriteKind.RockB)
    rock_block.setPosition(x, y)
}
scene.onHitTile(SpriteKind.Player, 2, function (sprite) {
    info.changeLifeBy(-2)
    scene.placeOnRandomTile(sprite, 5)
    sprite.sayText("bro I died, do better")
    timer.after(1500, function () {
        sprite.sayText("")
    })
})
let rock_block: Sprite = null
let giuseppe_stand: animation.Animation = null
let rock2: Sprite = null
let mommydino: Sprite = null
let vxval2 = 0
let webb: Sprite = null
let spidey2: Sprite = null
let spidey3: Sprite = null
let spidey: Sprite = null
let rock: Sprite = null
let vxval = 0
let already_filled = 0
let lavab: Sprite = null
let list: number[] = []
let bouncevx = 0
let proj_Active = 0
let dino2: Sprite = null
let dino_walk_left: animation.Animation = null
let dino: Sprite = null
let dino3: Sprite = null
let field: Sprite = null
let field_Active = 0
let giuseppe_walk_right: animation.Animation = null
let giuseppe_walk_left: animation.Animation = null
let guiseppe: Sprite = null
let direction = 0
let level = 0
level = 1
setup_level()
direction = 1
info.setScore(0)
game.onUpdate(function () {
    guiseppe.x += controller.dx() / 2
})
forever(function () {
    for (let value of sprites.allOfKind(SpriteKind.Spidey)) {
        value.sayText("sssssss")
        if (value.sx != 1.5) {
            value.vx = (guiseppe.x - value.x) / Math.abs(guiseppe.x - value.x) * 30
        }
        if (value.isHittingTile(CollisionDirection.Left) || value.isHittingTile(CollisionDirection.Right)) {
            value.vy = -120
        }
        if (value.lifespan < 100) {
            value.destroy(effects.spray, 100)
            create_web(value.x, value.y)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.Dino)) {
        value.sayText("raaawwwrr!")
        animation.setAction(value, ActionKind.walk_left_dino)
        if (value.sx != 1.5) {
            value.vx = (guiseppe.x - value.x) / Math.abs(guiseppe.x - value.x) * 30
        }
        if (value.isHittingTile(CollisionDirection.Left) || value.isHittingTile(CollisionDirection.Right)) {
            value.vy = -120
        }
        if (value.lifespan < 100) {
            value.destroy(effects.spray, 100)
        }
    }
    for (let value of sprites.allOfKind(SpriteKind.MommyDino)) {
        if (mommydino.sx != 1.5) {
            mommydino.vx = (guiseppe.x - mommydino.x) / Math.abs(guiseppe.x - mommydino.x) * 10
        }
        if (mommydino.isHittingTile(CollisionDirection.Left) || mommydino.isHittingTile(CollisionDirection.Right)) {
            mommydino.vy = -120
        }
    }
})
forever(function () {
    if (level == 1) {
        if (guiseppe.x >= 170 && guiseppe.x <= 440) {
            create_dino()
            pause(10000)
        }
    }
    if (level == 3) {
        if (guiseppe.x >= 190 && guiseppe.x <= 730) {
            create_dino()
            pause(5000)
        }
        if (guiseppe.x >= 730 && guiseppe.x <= 1130) {
            create_dino2()
            pause(5000)
        }
        if (guiseppe.x >= 1130) {
            create_dino3()
            pause(5000)
        }
    }
    if (level == 2) {
        if (guiseppe.x <= 280 && guiseppe.y >= 260) {
            create_spidey()
            pause(5000)
        }
        if (guiseppe.x >= 95 && (guiseppe.y >= 165 && guiseppe.y <= 260)) {
            create_spidey2()
            pause(5000)
        }
        if (guiseppe.x <= 275 && (guiseppe.y >= 80 && guiseppe.y <= 165)) {
            create_spidey3()
            pause(5000)
        }
    }
})
forever(function () {
    if (mommydino) {
        mommydino.vy = -120
        pause(randint(300, 3000))
        create_mommydinoproj()
        pause(3000)
    }
})
