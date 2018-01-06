function koch(order, size) {
  if (order === 0) {
    tforward(size);
  } else {
    koch(order - 1, size/3);
    tleft(60);
    koch(order - 1, size/3);
    tright(120);
    koch(order - 1, size/3);
    tleft(60);
    koch(order - 1, size/3);
  }
}

treset();
tspeed(2000);
tright(90);
tgoto(-100, 0);
koch(4,200);
thide();