// makes gorgeous feedback with a mix of a browser tab and the current IDE window

render(o3)

// this IDE window
s0.initScreen(1)

// browser tab
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
