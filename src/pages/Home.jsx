import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-800 mb-4">
            Welcome to <span className="text-purple-600">Number Hunt!</span>
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            A thrilling numbers guessing game that tests your intuition
          </p>
          <Link
            to="/game" // Update this to your game route
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300 hover:scale-105"
          >
            Start Playing Now
          </Link>
        </section>

        {/* How to Play Section */}
        <section className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-indigo-700 mb-6 pb-2 border-b-2 border-indigo-100">
            🎮 How to Play
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Step 1 */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                1
              </div>
              <h3 className="font-bold text-indigo-800 mb-2">Guess the Number</h3>
              <p className="text-gray-700">
                The computer selects a random number between 1 and 100
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                2
              </div>
              <h3 className="font-bold text-purple-800 mb-2">Get Feedback</h3>
              <p className="text-gray-700">
                After each guess, you'll get "Too high" or "Too low" hints
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                3
              </div>
              <h3 className="font-bold text-indigo-800 mb-2">Win the Game</h3>
              <p className="text-gray-700">
                Find the number in the fewest guesses possible!
              </p>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">💡 Pro Tips</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded mr-3">✨</span>
              <span>Start with the midpoint (50) to eliminate half the possibilities</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded mr-3">✨</span>
              <span>Keep track of previous guesses to narrow down the range</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-800 p-1 rounded mr-3">✨</span>
              <span>The game remembers your best score - try to beat it!</span>
            </li>
          </ul>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-2xl font-bold text-indigo-700 mb-4">Ready to Play?</h2>
          <p className="text-gray-600 mb-6">Test your number intuition now!</p>
          <Link
            to="/game" // Update this to your game route
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition duration-300"
          >
            Start Hunting Numbers
          </Link>
        </section>
      </div>
    </div>
  );
}