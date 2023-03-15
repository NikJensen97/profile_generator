const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name/nickname? ', (name) => {
  rl.question('What is an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
       rl.question('Which meal is your favourite? Breakfast, lunch or dinner? ', (meal) => {
         rl.question('What is your favourite thing to eat for said meal? ', (food) => {
           rl.question('Which sport is your favourite? ', (sport) => {
             rl.question('What is your superpower? In a few words, tell us your best talent. ', (talent) => {
               console.log(`${name} loves listening to ${music} while ${activity}, devouring ${food} for ${meal}, prefers ${sport} over any other sport, and is amazing at ${talent}.`);
               rl.close();
            });
          });
        });
      });
    });
  });
});
