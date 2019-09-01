// road

vid = document.createElement('video')
vid.autoplay = true
vid.loop = true
vid.src = atom.project.getPaths()[0]+'/gifs/road.mp4'

s0.init({src: vid})
src(s0)
  .scale(2, 0.6)
  .brightness(0.06)
  .contrast(2)
.out(o0)

s3.initScreen(1)
src(s3).out(o3)


osc(20, 0.02, 0.5)
.invert()
.color(0, 1, 0.8)
.kaleid(3)
.pixelate(80, 80)
.modulate(voronoi())
.scale(1.01)
.blend(o1)
.blend(
  src(o3).scale(1.01).repeat(2,2)
)
.out(o1)

src(o1)
.layer(
  src(o0)
.luma(0.06)
)
.out(o2)

render(o2)
