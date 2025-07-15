import { FaBrain, FaTrophy, FaPalette, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            About <span className="text-purple-600">Number Hunt</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            A fun, interactive number guessing game designed to test your intuition and improve your number sense
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/"
              className="inline-block bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-indigo-700 transition"
            >
              Play Now
            </Link>
            <Link
              to="/leaderboard"
              className="inline-block bg-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:bg-purple-700 transition"
            >
              View Leaderboard
            </Link>
          </div>
        </section>

        {/* Game Features */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 pb-2 border-b-2 border-indigo-100">
            🚀 Game Features
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-indigo-600 text-2xl mb-3">
                <FaBrain />
              </div>
              <h3 className="font-bold text-indigo-800 mb-2">Brain Training</h3>
              <p className="text-gray-700">
                Improves your number sense and logical thinking through strategic guessing
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="text-purple-600 text-2xl mb-3">
                <FaTrophy />
              </div>
              <h3 className="font-bold text-purple-800 mb-2">Multiple Difficulties</h3>
              <p className="text-gray-700">
                Choose from Easy (1-50), Medium (1-100), or Hard (1-200) to match your skill level
              </p>
            </div>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="text-indigo-600 text-2xl mb-3">
                <FaPalette />
              </div>
              <h3 className="font-bold text-indigo-800 mb-2">Beautiful Design</h3>
              <p className="text-gray-700">
                Enjoy a clean, modern interface with delightful animations and feedback
              </p>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">🎯 How It Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Pick Your Difficulty</h3>
                <p className="text-gray-600">
                  Choose between Easy, Medium, or Hard modes to set the number range
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Make Your Guess</h3>
                <p className="text-gray-600">
                  Enter a number within the selected range and submit your guess
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Get Feedback</h3>
                <p className="text-gray-600">
                  Receive "Too High" or "Too Low" hints to guide your next guess
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-indigo-100 text-indigo-800 rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                4
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-1">Win the Game</h3>
                <p className="text-gray-600">
                  Find the secret number in the fewest guesses possible!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Developer */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6">👨‍💻 About the Developer</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              JS
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Zephania Owuor</h3>
              <p className="text-gray-600 mb-4">
                Passionate about creating fun, educational games that challenge the mind. 
                Number Hunt was designed to help players improve their number sense while having fun.
              </p>
              <div className="flex items-center space-x-4">
                <a 
                  href="https://github.com/zeph254" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-indigo-600 transition"
                >
                  <FaGithub className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-purple-700 mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-6">Put your number skills to the test!</p>
          <Link
            to="/"
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition"
          >
            Start Hunting Numbers
          </Link>
        </section>
      </div>
    </div>
  );
}