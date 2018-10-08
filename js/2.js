// https://jsfiddle.net/8bv2amr5/

/** Сколько времени будет занимать выполнение каждой функции */

// Можно конечно замеры сделать, но не вижу смысла

function pause500ms () {
  return new Promise(res => setTimeout(res, 500));
} // ну собственно очевидно

(async function test1 () {
  pause500ms();
  pause500ms();
})(); // выполнятся параллельно сразу

(async function test2 () {
  await pause500ms();
  await pause500ms();
})(); // по очереди - 1000ms

(async function test3 () {
  await Promise.all([pause500ms(), pause500ms()]);
})(); // 500ms

(async function test4 () {
  await Promise.all([await pause500ms(), await pause500ms()]);
})(); // 1000ms
