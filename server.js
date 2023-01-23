function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favFood = process.env.FAV_FOOD;
  while(true) {
    console.log(`Containers rule! ....and I love ${favFood}`);
    await sleep(5000);
  }
}

main();
