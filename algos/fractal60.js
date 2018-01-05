function fractal60(n, size) {
  if (n === 0) {
    return;
  }

  forward(size);
  var [x, y] = tpos();
  var deg = theading();

  goto(x, y);
  tsetheading(deg);
  left(30);
  fractal60(n - 1, size * 2 / 3);


  goto(x, y);
  tsetheading(deg);
  right(30);
  fractal60(n - 1, size * 2 / 3);
}

tspeed(1);
goto(0, -50);
fractal60(8, 50);
