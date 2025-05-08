import './App.css';
import HomePage from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import OrganizationRegistration from './pages/AddOrganization.tsx';
function App() {
  return (
    <div className="App">
     <HomePage />
     <Login />
     <SignUp />
    </div>
  );
}

export default App;
