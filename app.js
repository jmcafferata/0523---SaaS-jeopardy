var fs = require('fs');

var scores = {
    player1: 100,
    player2: 200
};

fs.writeFile('scores.json', JSON.stringify(scores), function (err) {
  if (err) throw err;
  console.log('Scores saved!');
});


fs.readFile('scores.json', 'utf8', function (err, data) {
    if (err) throw err;
    var scores = JSON.parse(data);
    console.log(scores);
  });