function fractal90(n, size) {
  if (n === 0) {
    return;
  }

  tforward(size);
  var p = {};
  tpos(p);
  theading(p);

  tsetpos(p);
  tsetheading(p);
  tleft(90);
  fractal90(n - 1, size * 2 / 3);


  tsetpos(p);
  tsetheading(p);
  tright(90);
  fractal90(n - 1, size * 2 / 3);
}

treset();
tspeed(100);
tgoto(0, -100);
fractal90(8, 100);
thide();
