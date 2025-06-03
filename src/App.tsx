import { Link, Route, Routes } from "react-router";
import "./App.css";
import Main from "./pages/main";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-900 p-4 shadow-lg">
        <ul className="flex justify-center space-x-6">
          <li>
            <Link
              to="/"
              className="text-white hover:text-blue-400 font-medium transition duration-300">
              Главная
            </Link>
          </li>
          <li>
            {/* <Link to="/about" className="text-white hover:text-blue-400 font-medium transition duration-300">
              О нас
            </Link> */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
