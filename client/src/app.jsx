import './App.css';
import { HomePage } from './pages/Home/HomePage';
import { Login } from './pages/Login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
}

export default App;
