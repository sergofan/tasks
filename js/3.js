// https://jsfiddle.net/t21vry5s/3/

// А это что подсказка что ли? :)

function pause500ms () {
  return new Promise(res => setTimeout(res, 500));
}

(async function test1 () {
  console.time('test1');

  pause500ms();
  pause500ms();

  console.timeEnd('test1');
})();

(async function test2 () {
  console.time('test2');

  await pause500ms();
  await pause500ms();

  console.timeEnd('test2');
})();

(async function test3 () {
  console.time('test3');

  await Promise.all([pause500ms(), pause500ms()]);

  console.timeEnd('test3');
})();

(async function test4 () {
  console.time('test4');

  await Promise.all([await pause500ms(), await pause500ms()]);

  console.timeEnd('test4');
})();
