import { useState, useEffect } from 'react';

export default function Leaderboard() {
  // Difficulty settings (matches your game settings)
  const difficultySettings = {
    easy: { range: 50, label: 'Easy (1-50)' },
    medium: { range: 100, label: 'Medium (1-100)' },
    hard: { range: 200, label: 'Hard (1-200)' }
  };

  // State for all scores
  const [scores, setScores] = useState({
    easy: [],
    medium: [],
    hard: []
  });

  // Load scores from localStorage on component mount
  useEffect(() => {
    const loadScores = () => {
      const savedScores = {
        easy: JSON.parse(localStorage.getItem('numberHunt_scores_easy')) || [],
        medium: JSON.parse(localStorage.getItem('numberHunt_scores_medium')) || [],
        hard: JSON.parse(localStorage.getItem('numberHunt_scores_hard')) || []
      };
      setScores(savedScores);
    };

    loadScores();
  }, []);

  // Clear all scores
  const clearScores = () => {
    if (window.confirm('Are you sure you want to clear all leaderboard data? This cannot be undone.')) {
      localStorage.removeItem('numberHunt_scores_easy');
      localStorage.removeItem('numberHunt_scores_medium');
      localStorage.removeItem('numberHunt_scores_hard');
      setScores({
        easy: [],
        medium: [],
        hard: []
      });
    }
  };

  // Get top 5 scores for a difficulty
  const getTopScores = (difficulty) => {
    return [...scores[difficulty]]
      .sort((a, b) => a.guesses - b.guesses)
      .slice(0, 5);
  };

  // Format date
  const formatDate = (timestamp) => {
    return new Date(timestamp).toLocaleDateString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-indigo-700">Number Hunt Leaderboard</h1>
          <button
            onClick={clearScores}
            className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition"
          >
            Clear All Scores
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(difficultySettings).map(([difficultyKey, { label }]) => (
            <div key={difficultyKey} className="bg-gray-50 rounded-lg p-4">
              <h2 className="text-xl font-semibold text-center mb-4 text-gray-800">
                {label}
              </h2>
              
              {getTopScores(difficultyKey).length > 0 ? (
                <div className="overflow-x-auto">
                  <table className="min-w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Rank</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Guesses</th>
                        <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getTopScores(difficultyKey).map((score, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="px-4 py-2 text-gray-700">#{index + 1}</td>
                          <td className="px-4 py-2 font-medium">
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              index === 0 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {score.guesses}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-sm text-gray-500">{formatDate(score.date)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">No scores yet!</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-medium text-gray-700 mb-2">How Scores Work:</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Only your best 5 scores per difficulty are saved</li>
            <li>• Lower guess counts rank higher</li>
            <li>• Scores are saved in your browser's storage</li>
          </ul>
        </div>
      </div>
    </div>
  );
}