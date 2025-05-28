import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "./UserContext.tsx";
function Navbar() {
  // accessing current user is not limited to only navbar 

  // but current user should be accessible to whole app 

  // toh me puri app me currentUser ko baar baar localstorage se nhi uthaunga user ko but me kya chahta hu ki hum ek global bnanaye jisme hum ek baar access kare aur baar baar use kare !!


  // let [currentUser , setCurrentUser]

  // function checkCurrentUser(){

  // }
  // current user object make it global
  // loginStatus State Should also be global 
  let { user, loginStatus , setUser , setLoginStatus } = useContext(UserContext)
  const handleLogout = () => {
    localStorage.removeItem("userData")
    setUser({})
    setLoginStatus(false)
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <div className="text-2xl font-bold text-blue-600">TaskFlow</div>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium">
          <a href="#features" className="hover:text-blue-600 transition">Features</a>
          <a href="#integrations" className="hover:text-blue-600 transition">Integrations</a>
          <a href="#security" className="hover:text-blue-600 transition">Security</a>
          <a href="#about" className="hover:text-blue-600 transition">About</a>
        </nav>
        {/* Auth Buttons */}
        {
          loginStatus == true ? (
            <div className="space-x-4 flex items-center">
              <p> <span className="font-bold">Welcome {user.userName}</span></p>
              <button onClick={handleLogout} className="text-sm text-gray-600 hover:text-white transition bg-blue-600 text-white px-4 py-2 rounded-lg ">Logout</button>
            </div>
          ) : (
            <div className="space-x-4">
              <Link to="/login">
                <button className="text-sm text-gray-600 hover:text-blue-600 transition">Login</button>
              </Link>
              <Link to="/signup">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition">Get Started</button>
              </Link>
            </div>
          )
        }
      </div>
    </header>
  );
}

export default Navbar;
