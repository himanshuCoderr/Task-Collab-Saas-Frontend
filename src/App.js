import './App.css';
import HomePage from './pages/Home.tsx';
import Login from './pages/Login.tsx';
import SignUp from './pages/SignUp.tsx';
import OrganizationRegistration from './pages/AddOrganization.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskFlowBoard from './pages/TaskFlowBoard.tsx';




let myAppRoutes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/my-task-flow-board",
    element: <TaskFlowBoard/>
  }

])

function App() {
  return (
    <div className="App">
    <RouterProvider router={myAppRoutes} />
    </div>
  );
}

export default App;
