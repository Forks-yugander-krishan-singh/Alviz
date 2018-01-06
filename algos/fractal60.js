function fractal60(n, size) {
  if (n === 0) {
    return;
  }

  tforward(size);
  var p = {};
  tpos(p);
  theading(p);

  tsetpos(p);
  tsetheading(p);
  tleft(30);
  fractal60(n - 1, size * 2 / 3);


  tsetpos(p);
  tsetheading(p);
  tright(30);
  fractal60(n - 1, size * 2 / 3);
}

treset();
tspeed(100);
tgoto(0, -140);
fractal60(8, 100);
