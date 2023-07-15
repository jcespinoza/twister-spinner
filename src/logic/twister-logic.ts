function* generateRotation(spins: number){
  let degrees = spins * 360;
  while (degrees < 2) {
    yield degrees;
    degrees++;
  }
}