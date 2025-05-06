
function Navbar() {
  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">TaskFlow</div>
        <nav className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#integrations" className="hover:text-blue-600 transition">Integrations</a>
          <a href="#security" className="hover:text-blue-600 transition">Security</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </nav>
        <div className="space-x-4">
          <button className="text-sm text-gray-600 hover:text-blue-600 transition">Login</button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Get Started</button>
        </div>
      </div>
    </header>
  );
}


export default Navbar