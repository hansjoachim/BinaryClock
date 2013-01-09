function converter(number) {
  return number.toString(2);
}

function convertTime(timestamp) {
  hour = converter(timestamp.getHours());
  minute = converter(timestamp.getMinutes());
  second = converter(timestamp.getSeconds());
  return hour + ":" + minute + ":" + second;
}
