const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
// get port, corsUrl and originPort from config.json
const port = 5501
let corsUrl = "34.68.132.80"
const originPort = 5501
let debug = true;
if (debug) {
  corsUrl = '127.0.0.1';
}
 //

app.use(cors({ origin: `http://${corsUrl}:${originPort}` }));
app.use(express.static('public')); 

app.use(express.json()); // This line is necessary to be able to parse JSON from the request body
// Check if scores.json exists, and if not, create it
fs.access('scores.json', fs.constants.F_OK, (err) => {
  if (err) {
    fs.writeFile('scores.json', '[]', (err) => {
      if (err) throw err;
    });
  }
});

// render index.html
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// update answers.json appending the new answer from the request body
app.post('/api/answers', (req, res) => {
  
  // check if answers.json exists, if not create it empty
  fs.access('answers.json', fs.constants.F_OK, (err) => {
    if (err) {
      fs.writeFile('answers.json', '[]', (err) => {
        if (err) throw err;
      });
    }
  });
  
  fs.readFile('answers.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      let answers = JSON.parse(data);
      answers.push(req.body);
      fs.writeFile('answers.json', JSON.stringify(answers), (err) => {
        if (err) {
          console.error(err);

          res.sendStatus(500);
        } else {
          res.send({ message: 'Answer successfully saved' });
        }
      });
    }
  });
});


app.get('/scores', (req, res) => {
  fs.readFile('scores.json', 'utf8', (err, data) => {
    if (err) {
      console.log('fuck!')
      console.error(err);
      res.sendStatus(500);
    } else {
      res.send(JSON.parse(data));
    }
  });
});

app.post('/scores', (req, res) => {
  fs.readFile('scores.json', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      let scores = JSON.parse(data);
      scores.push(req.body);
      fs.writeFile('scores.json', JSON.stringify(scores), (err) => {
        if (err) {
          console.error(err);
          res.sendStatus(500);
        } else {
          res.send({ message: 'Score successfully saved' });
        }
      });
    }
  });
});

app.get('/answers',(req,res)=>{


  // Read and parse the JSON data
  fs.readFile('answers.json', 'utf-8', (err, data) => {
    if (err) {
      console.log('Error reading file:', err);
      return;
    }

    const answers = JSON.parse(data);

    let tableData = {};

    // Loop through each answer and tally up the counts
    answers.forEach((answer) => {
      if (!(answer.question in tableData)) {
        // If the question doesn't exist in the tableData object, add it
        tableData[answer.question] = {};
      }
      // If the answer option doesn't exist in the tableData object, add it
      if (!(answer.userAnswer in tableData[answer.question])) {
        tableData[answer.question][answer.userAnswer] = 0;
      }
      // Increment the count for the answer option
      tableData[answer.question][answer.userAnswer]++;
    });

    let html = '<table>';

    // Create table header
    html += '<tr><th>Question</th><th>Answer Option</th><th>Count</th></tr>';

    // Create table rows for each question and answer count
    Object.entries(tableData).forEach(([question, answers]) => {
      Object.entries(answers).forEach(([answer, count]) => {
        html += `<tr><td>${question}</td><td>${answer}</td><td>${count}</td></tr>`;
        
      });
    });

    html += '</table>';
    res.send(html);
  });
});

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`));
