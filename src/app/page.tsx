export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center text-center py-20 px-5">
        <h1 className="text-5xl font-bold mb-4">Welcome to ChatGenius AI</h1>
        <p className="text-lg text-gray-300 max-w-xl">
          The next-generation AI chatbot that automates customer support and boosts business productivity.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-xl text-lg font-semibold">
          Get Started
        </button>
      </header>

      {/* Features Section */}
      <section className="py-20 px-5 bg-gray-800">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose ChatGenius AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">AI-Powered Support</h3>
            <p className="text-gray-300">Automate customer service with intelligent AI responses.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">Seamless Integration</h3>
            <p className="text-gray-300">Easily connects with websites, WhatsApp, and social media.</p>
          </div>
          <div className="p-6 bg-gray-700 rounded-xl shadow-lg">
            <h3 className="text-xl font-semibold">24/7 Availability</h3>
            <p className="text-gray-300">Never miss a customer query with always-on AI support.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-5 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Started Today</h2>
        <p className="text-lg text-gray-300 max-w-lg mx-auto">
          Join thousands of businesses automating their support with ChatGenius AI.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 rounded-xl text-lg font-semibold">
          Sign Up for Free
        </button>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-800 text-gray-400">
        <p>&copy; 2025 ChatGenius AI. All rights reserved.</p>
      </footer>
    </div>
  );
}