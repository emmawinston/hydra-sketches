// does some fun psychedelic stuff to a browser window source. I used https://www.deviantart.com/earlpiko/art/DJ-Space-Cat-565977838.

render(o3)

s0.initScreen(2)

src(s0)
.color(-0.8, 1)
.rotate(0.2, 0.2)
.kaleid(3)
.colorama(({time}) => Math.sin(time) * 0.1)
.diff(
  osc(60, 0.1, 0.0)
  .pixelate(20,20)
  .kaleid(3)
  .rotate(0.2, 0.2)
)
.out(o3)

src(s0).out()
