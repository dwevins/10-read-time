'use strict';

function readTime(inputString, wpm = 1) {
  let time = 0;
  const rate = wpm;
  const totalWords = stringToWords(inputString).length;
  time = Math.ceil(totalWords / rate);

  return time;
}
