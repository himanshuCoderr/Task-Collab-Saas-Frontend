
function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-xl font-bold mb-4">TaskFlow</h4>
          <p className="text-sm text-gray-400">Powering modern teams with seamless task collaboration, real-time updates, and productivity insights.</p>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white">Dashboard</a></li>
            <li><a href="#" className="hover:text-white">Features</a></li>
            <li><a href="#" className="hover:text-white">Support</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-md font-semibold mb-4">Subscribe</h4>
          <p className="text-sm text-gray-400 mb-4">Stay in the loop with product updates and tips.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="w-full px-3 py-2 rounded-l-lg text-sm text-gray-800"
            />
            <button className="bg-blue-600 px-4 rounded-r-lg text-sm hover:bg-blue-700">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-10">© 2025 TaskFlow. All rights reserved.</div>
    </footer>
  );
}


export default Footer