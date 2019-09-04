// rain window

render(o3)
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/gifs/opening.mp4'

// video to channel 0
s0.init({src: vid})
src(s0)
  .scale(0.6, 0.6)
  .mask(shape(4).scale(1.9, 0.6).luma())
.out(o0)

// cam to channel 1
s1.initCam()
a.show()
a.setSmooth(0.8)

src(o3)
.layer(
    src(o0, 0.9).luma(0.1)
)
.blend(
  gradient()
  .colorama(0.00001)
  .kaleid(3)
  .brightness(0.2)
  .pixelate(200, 200)
  .rotate(0, 0.2), 0.1 // make this smaller before scaling
)
//.scale(1.01)
//.scrollX(0.2, 0.01)
// .scrollY(0.2, 0.01)
// .modulate(s1, 0.05)
.out(o3)


////////////////////////////////////

// glitch trails

render(o3)
s1.initScreen(2)

src(s1)
  .add(o3, 0.9)
  .repeat(2, 2)
  .invert(1)
  .scale(2) // 2nd parameter () => a.fft[0] * 3
  .brightness(1)
  .contrast(4)
  //.pixelate(200, 200)
  .modulate(voronoi(0.2))
.out(o3)


//////////////////////////////

// road

render(o3)
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/gifs/road.mp4'

// video to channel 0
s0.init({src: vid})
src(s0)
  .scale(2, 0.6)
  .brightness(0.06)
  .contrast(2)
.out(o0)

// screen to channel 1
s1.initScreen(1)
src(s1)
.out(o1)

// everything to channel 3
src(o2)
.layer(
  src(o0)
.luma(0.06)
)
.out(o3)

// sky to channel 2
src(o2)
// src(s1)
.layer(
  (
    osc(2)
    .mask(shape(3, 0.5)
    .saturate(4)
    .repeat(2,2)
    .scale(1.01)
    .luma(0.1)
  ) // end .mask
  )
)
// .scale(1.01)
// .scrollX(0.001, -0.2)
// .scrollY(0, 0.2)
// .modulate(shape(3, 0.5)).rotate(0.2, 0.2)
.out(o2)

/////////////////////////////

// leafy/melty

s1.initCam()
s2.initScreen(1)

src(o3)
// .layer(
//   src(s2)
// )
// .scale(1.01)
.layer(
  osc(4, 0.02)
  .mask(
    shape(4)
    .modulate(
      (
        noise(0.6,0.5)
      ) ,0.5
    )
    // .modulate(voronoi(5))
    // .modulateScale(s1, 0.05)
    // .scrollX(0, () => mouse.x * 0.000001)
    // .scrollY(({time}) => Math.sin(time) * 0.2, 0.2)
  )
)
.out(o3)


/////////////////////////////

render(o3)
vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/gifs/gem.mp4'

// video to channel 0
s0.init({src: vid})
src(s0)
  .scale(0.6, 0.6)
  .mask(shape(4).scale(0.6, 0.6).luma(0.9))
.out(o0)

osc().out(o3)

src(o3)
  .layer(
    src(s0)
    .scale(1.2, 0.6)
    .luma(0.3)
  )
  .blend(
    gradient()
    .colorama(0.5)
    .kaleid(3)
    .pixelate(20)
    .brightness(0.5)
    .rotate(0, 0.02), 0.05 // make this smaller before scaling
  )
  // .scale(1.01)
.out(o3)

////////////////////////////

//pencil

render(o3)

s0.initCam()

src(s0)
.scale(1.01)
.color(1, -1)
.colorama(0.07)
.saturate(0)
.modulate(
  shape(3)
      .mult(
          osc(10, 1, 2),
     0.1
      )
  .repeat()
  .add(
    osc(4, 0, 8)
    .rotate(0, 0.2)
    .repeat(20)
    .kaleid(55)
    .brightness(0.6)
  )
  .blend(o0, 0.99)
  .blend(o3, 0.99)
  .blend(osc(20, 0.01, 1.4))
  .scrollX(({time}) => Math.sin(time), 0.2)
).out(o3)


////////////////////

// barcode

render(o3)

s0.initScreen(1)

s1.initScreen(2)

src(s0)
.pixelate(100, 100)
.out(o0)

src(s1)
.out(o1)

src(s0)
.mask(
  osc(10)
  .pixelate(2, 2)
  .blend(o1)
, 20, 0.2)
  .invert(({time}) => (time) * 1)
.out(o3)

////////////////////

// sierpinski triangles

shape(3)
  .add(o3, 0.9)
  // .repeat(2, 2)
  // .rotate(0, 0.01)
  .out(o3)
