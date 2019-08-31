// glitch trails

render(o1)

s1.initScreen(1)

src(s1)
  .add(o1, 0.9)
  .repeat(2, 2)
  .invert(1)
  .scale(2)
  .brightness(1)
  .contrast(4)
  .pixelate(200, 200)
  .modulate(voronoi(4))
.out(o1)

shape(3)
  .add(o0)
  .repeat(2, 2)
  .invert(0)
.out(o0)
