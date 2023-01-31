import './App.css';
import { HomePage } from './pages/Home/HomePage';
import { Login } from './pages/Login/Login';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Register } from './pages/Register/Register';
import NotFoundPage from './pages/NotFound/NotFoundPage';
function App() {
	return (
		// <div className='h-screen flex justify-center items-center'>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />}/>
				<Route path="*" element={<NotFoundPage/>} />
			</Routes>
		// </div>
	);
}

export default App;
