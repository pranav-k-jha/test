function counterJs(n) {
  let counter = 0;

  function logAfterTimeout(i) {
    setTimeout(function timeout() {
      console.log(i);
      counter =  i;
    }, i * 3000);
  }
// loop start
  for (let i = 0; i < n; i++) {
    logAfterTimeout(i);
  }

  // Call setTimeout after the loop
}
//log the output for n = 10
console.log(counterJs(10));
