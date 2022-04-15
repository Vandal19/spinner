const spinner = ['\r|', '\r/', '\r-', '\r\\', '\r|', '\r/', '\r-', '\r\\', '\r|'];
let delay = 0;

for (const symbol of spinner) {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, delay += 300);
}