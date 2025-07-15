import { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function Game() {
  // Difficulty settings
  const difficultySettings = {
    easy: { range: 50, label: 'Easy (1-50)' },
    medium: { range: 100, label: 'Medium (1-100)' },
    hard: { range: 200, label: 'Hard (1-200)' }
  };

  const [difficulty, setDifficulty] = useState('medium');
  const [targetNumber, setTargetNumber] = useState(() => 
    generateRandomNumber(difficultySettings[difficulty].range)
  );
  const [userGuess, setUserGuess] = useState('');
  const [message, setMessage] = useState('Enter your first guess!');
  const [guessCount, setGuessCount] = useState(0);
  const [guessHistory, setGuessHistory] = useState([]);
  const [gameWon, setGameWon] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Generate random number based on current difficulty
  function generateRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
  }

  // Save score to localStorage
  const saveScore = () => {
    const newScore = {
      guesses: guessCount + 1, // +1 because we haven't incremented yet when winning
      date: Date.now()
    };

    // Get existing scores
    const storageKey = `numberHunt_scores_${difficulty}`;
    const existingScores = JSON.parse(localStorage.getItem(storageKey)) || [];

    // Add new score and keep only top 5
    const updatedScores = [...existingScores, newScore]
      .sort((a, b) => a.guesses - b.guesses)
      .slice(0, 5);

    // Save to localStorage
    localStorage.setItem(storageKey, JSON.stringify(updatedScores));
  };

  // Reset game with current difficulty
  const resetGame = () => {
    setTargetNumber(generateRandomNumber(difficultySettings[difficulty].range));
    setUserGuess('');
    setMessage(`Guess a number (1-${difficultySettings[difficulty].range})!`);
    setGuessCount(0);
    setGuessHistory([]);
    setGameWon(false);
  };

  // Change difficulty and reset game
  const changeDifficulty = (newDifficulty) => {
    setDifficulty(newDifficulty);
    // Reset will happen in useEffect below
  };

  // Reset game when difficulty changes
  useEffect(() => {
    resetGame();
  }, [difficulty]);

  // Handle window resize for confetti
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handle guess submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const guess = parseInt(userGuess);
    const currentRange = difficultySettings[difficulty].range;

    // Validate input
    if (isNaN(guess)) {
      setMessage('⚠️ Please enter a valid number!');
      return;
    }
    if (guess < 1 || guess > currentRange) {
      setMessage(`⚠️ Please enter a number between 1 and ${currentRange}!`);
      return;
    }

    // Update guess count and history
    setGuessCount(guessCount + 1);
    setGuessHistory([...guessHistory, guess]);

    // Check guess
    if (guess < targetNumber) {
      setMessage('🔽 Too low! Try a higher number.');
    } else if (guess > targetNumber) {
      setMessage('🔼 Too high! Try a lower number.');
    } else {
      saveScore(); // Save the score when player wins
      setMessage(`🎉 Correct! You guessed it in ${guessCount + 1} tries!`);
      setGameWon(true);
    }

    // Clear input
    setUserGuess('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-12 px-4">
      {gameWon && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={500}
        />
      )}

      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <h1 className="text-2xl font-bold text-center text-indigo-700 mb-2">
          Number Hunt
        </h1>
        
        {/* Difficulty Selector */}
        <div className="mb-6">
          <p className="text-sm font-medium text-gray-700 mb-2">Difficulty:</p>
          <div className="flex gap-2">
            {Object.entries(difficultySettings).map(([key, setting]) => (
              <button
                key={key}
                onClick={() => changeDifficulty(key)}
                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${
                  difficulty === key
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {setting.label}
              </button>
            ))}
          </div>
        </div>

        <p className="text-center text-purple-600 mb-6">
          Guess between 1 and {difficultySettings[difficulty].range}
        </p>

        {/* Game Status */}
        <div
          className={`p-4 rounded-lg mb-6 text-center ${
            gameWon
              ? 'bg-green-100 text-green-800'
              : 'bg-indigo-100 text-indigo-800'
          }`}
        >
          <p className="font-medium">{message}</p>
          <p className="text-sm mt-1">Guesses: {guessCount + (gameWon ? 1 : 0)}</p>
        </div>

        {/* Guess Input */}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex">
            <input
              type="number"
              value={userGuess}
              onChange={(e) => setUserGuess(e.target.value)}
              placeholder={`1-${difficultySettings[difficulty].range}`}
              min="1"
              max={difficultySettings[difficulty].range}
              disabled={gameWon}
              className="flex-1 px-4 py-2 border border-indigo-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <button
              type="submit"
              disabled={gameWon}
              className={`px-4 py-2 rounded-r-lg font-medium ${
                gameWon
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-indigo-600 hover:bg-indigo-700'
              } text-white transition`}
            >
              Guess
            </button>
          </div>
        </form>

        {/* Guess History */}
        {guessHistory.length > 0 && (
          <div className="mb-6">
            <h3 className="font-medium text-gray-700 mb-2">Your Guesses:</h3>
            <div className="flex flex-wrap gap-2">
              {guessHistory.map((guess, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm ${
                    guess === targetNumber
                      ? 'bg-green-100 text-green-800'
                      : guess < targetNumber
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {guess}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Reset Button */}
        <button
          onClick={resetGame}
          className="w-full py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-md transition"
        >
          {gameWon ? 'Play Again' : 'Reset Game'}
        </button>
      </div>
    </div>
  );
}