// rain window

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/gifs/rainwindow.mp4'

s0.init({src: vid})
src(s0)
  .scale(0.6, 0.6)
  .mask(shape(4).scale(1.9, 0.6).luma())
  // .scrollX(({time}) => (time/10))
  // .scrollY(({time}) => (time/10))
.out(o0)

s2.initScreen(1)
src(s2).out(o2)

a.show()
a.setSmooth(0.8)

gradient()
.colorama(0.00001)
.kaleid(3)
.brightness(0.5)
.rotate(0, 0.2)
  .layer(
    src(o0, 0.9).luma(0.1)
    // .mult(
    //   src(o1)
    //   .repeat(2, 2, ({time}) => (time), ({time}) => (time))
    //   .rotate(({time}) => (time * 0.0001), ({time}) => (time * 0.0001))
    //   .modulate(osc())
    // )
)
// .blend(
//   src(o2, 0.1)
// )
.out(o1)

render(o1)
