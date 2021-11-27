amt = base * rate;
cal = 2 * basis(amt) + extra(amt) * 1.05;
if (province === "ONTARIO") {
  rate = ONTARIO_RATE;
  return;
}
if (province === "QUEBEC" || province === "ALBERTA") {
  rate = province === "QUEBEC" ? QUEBEC_RATE : ALBERTA_RATE;
  if (province === "QUEBEC") {
    points = 2;
  }
  return;
}
if (province !== "ONTARIO" && province !== "QUEBEC" && province !== "ALBERTA") {
  rate = 1;
  return;
}
