import React from "react";

function App() {

  const [randomNumber, setRandomNumber] = React.useState(generateRandomNumber());
  const [guess, setGuess] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [attempts, setAttempts] = React.useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  function handleGuess() {
    const guessNumber = parseInt(guess, 10);
    
    if (isNaN(guessNumber) || guessNumber < 1 || guessNumber > 100) {
      setMessage('Not a valid number.');
      return;
    }

    setAttempts(attempts + 1);

    if (guessNumber < randomNumber) {
      setMessage('Your guess is low.');
    } else if (guessNumber > randomNumber) {
      setMessage('Your guess is high.');
    } else {
      setMessage(`Congratulations! You've guessed the correct number in ${attempts + 1} attempts.`);
    }
  }

  function restartGame() {
    setRandomNumber(generateRandomNumber());
    setGuess('');
    setMessage('');
    setAttempts(0);
  }

  return (
    <div className="container">
      <div className="game">
        <h4>Guess a number between 1 and 100</h4>
        <input
          type="text"
          value={guess}
          onChange={(e) => setGuess(e.target.value)}
          placeholder="Guess a number"
        />
        <button onClick={handleGuess}>Check</button>
        <p className="message">{message}</p>
        <p>Attempts: {attempts}</p>
        <button onClick={restartGame} className="restart">Restart</button>
      </div>
    </div>
  );

}

export default App
