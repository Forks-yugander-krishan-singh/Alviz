def fractal_tree(n, size):
  if (n == 0) {
    return
  }

  forward(size)
  (x, y) = position()
  deg = heading()

  setposition(x, y)
  setheading(deg)
  left(90)
  fractal(n - 1, size*2/3)

  setposition(x, y)
  setheading(deg)
  right(90)
  fractal(n - 1, size*2/3)


left(90)
speed(0)
fractal(9, 100)

raw_input()
