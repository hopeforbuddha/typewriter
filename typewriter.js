const sentence = "hello there from lighthouse labs";
seconds = 600
for (const char of sentence) {
  
  setTimeout(() => {
  process.stdout.write(char);
  
}, seconds)
seconds += 150;

}
setTimeout(() => {
console.log('\n')
}, 7000)