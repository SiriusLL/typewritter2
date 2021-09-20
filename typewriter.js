// const sentence = "hello there from lighthouse labs";

// let t = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     if (sentence.length - 1 !== sentence.indexOf(char)) {
//       process.stdout.write(char);
//     } else {
//       process.stdout.write(`${char}\n`);
//     }
//   }, t);
//   t += 100;
// }

const sentence = "hello there from lighthouse labs";

// part 1 (walkthrough / exercise)
let delay = 0;
for (let char of sentence) {
  setTimeout(() => process.stdout.write(char), delay);
  delay += 50;
}

// part 2 (challenge)
setTimeout(() => {
  console.log("");
}, delay);
