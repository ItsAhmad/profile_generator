const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.question ('What is your favourite car and why?', (answer2) => {
    console.log(`Awesome, thanks for letting us know: ${answer2}`);
  
    rl.question ('What is your favourite soccer team', (answer3) => {
      console.log(`Great, thanks for letting us know: ${answer3}`);

      rl.question ('Do you prefer playstation or xbox?', (answer4) => {
        console.log(`Woah, this one might cause a ripple: ${answer4}`);

    rl.close();
      });
    });
  });   
});
